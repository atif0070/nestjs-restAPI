import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
//Controller will control the request like fetch data from the reques
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST /auth/signup
  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    console.log(dto);

    return this.authService.signUp(dto);
  }

  // POST /auth/signin
  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
