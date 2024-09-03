import { AuthModel } from '@/database/auth/auth.model';
import { AuthService } from '../../../services/auth.services';
import type { UserCredential } from "firebase/auth";



export class RegisterUseCase {
    static execute(email: string, password: string) {
        return new AuthService(new AuthModel()).registerUserWithEmailAndPassword(email, password);
    }
}