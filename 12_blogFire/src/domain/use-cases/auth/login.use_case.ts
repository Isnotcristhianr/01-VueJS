import { AuthService } from '../../../services/auth.services';
import type { UserCredential } from "firebase/auth";

export class LoginUseCase {

    //constructor(private readonly AuthService: AuthService) {}

    static execute(emai: string, password: string): Promise<UserCredential> {
        return AuthService.signInEmailAndPassword(emai, password);
        
    }
}