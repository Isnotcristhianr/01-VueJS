import { AuthService } from '../../../services/auth.services';
import type { UserCredential } from "firebase/auth";



export class RegisterUseCase {
    static execute(email: string, password: string) {
        return AuthService.registerUserWithEmailAndPassword(email, password);
    }
}