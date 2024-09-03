import { AuthModel } from "@/database/auth/auth.model";
import { AuthService } from "@/services/auth.services";

export class LoginGoogleUseCase {
  static execute() {
    return new AuthService(new AuthModel()).signInWhithGoogle();
  }
}