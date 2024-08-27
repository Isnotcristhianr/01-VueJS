import { AuthService } from "@/services/auth.services";

export class LoginGoogleUseCase {
  static execute() {
    return AuthService.signInWhithGoogle();
  }
}