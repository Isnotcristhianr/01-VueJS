import { AuthService } from "@/services/auth.services";

export class logoutUseCase {
    static  execute() {
        try {
            return AuthService.logout();
        }
        catch (e) {
            console.log(e);
        }
    }
}
