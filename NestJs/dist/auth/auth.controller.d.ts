import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(dto: AuthDto): Promise<{
        userId: number;
        fisrtName: string;
        lastName: string;
        email: string;
        hash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    signIn(dto: AuthDto): Promise<{
        userId: number;
        fisrtName: string;
        lastName: string;
        email: string;
        hash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
