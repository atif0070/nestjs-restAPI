import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signUp(dto: AuthDto): Promise<{
        userId: number;
        fisrtName: string;
        lastName: string;
        email: string;
        hash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    signin(dto: AuthDto): Promise<{
        userId: number;
        fisrtName: string;
        lastName: string;
        email: string;
        hash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
