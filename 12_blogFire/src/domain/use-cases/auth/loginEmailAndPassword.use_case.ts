import { AuthService } from "../../../services/auth.services";
import type { UserCredential } from "firebase/auth";

export class LoginEmailAndPasswordUseCase {
  //constructor(private readonly AuthService: AuthService) {}

  static execute(emai: string, password: string): Promise<UserCredential> {
    return AuthService.signInEmailAndPassword(emai, password);
  }
}
