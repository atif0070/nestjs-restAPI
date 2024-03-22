import { ForbiddenException, Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Invalid Credentials');
        }
      }
      throw error;
    }
  }
  async signin(dto: AuthDto) {
    const userFound = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!userFound) {
      throw new ForbiddenException('Invalid Credentials');
    }
    const isPasswordMatch = await argon.verify(userFound.hash, dto.password);
    if (!isPasswordMatch) {
      throw new ForbiddenException('Invalid Credentials');
    }
    delete userFound.hash;
    return userFound;
  }
}
