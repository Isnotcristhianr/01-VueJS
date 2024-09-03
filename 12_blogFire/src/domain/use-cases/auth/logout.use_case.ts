import { AuthModel } from "@/database/auth/auth.model";
import { AuthService } from "@/services/auth.services";

export class logoutUseCase {
    static  execute() {
        try {
            return new AuthService(new AuthModel()).logout();
        }
        catch (e) {
            console.log(e);
        }
    }
}
