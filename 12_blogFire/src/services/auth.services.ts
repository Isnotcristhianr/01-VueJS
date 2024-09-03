import { AuthRepository } from "@/domain/repository/auth/auth.repository";
//import { AuthModel } from "../database/auth/auth.model";

export class AuthService {

  //inyeccion de dependencias
  constructor(private readonly authRepository: AuthRepository) {}

  //private AuthModel: AuthModel = new AuthModel();

  //static para invocar una sola vez
  public signInEmailAndPassword(email: string, password: string) {
    console.log("signInEmailAndPassword");

    return this.authRepository.signInEmailAndPassword(email, password);
  }

  public registerUserWithEmailAndPassword(
    email: string,
    password: string
  ) {
    console.log("register user with email and password");

    return this.authRepository.registerUserWithEmailAndPassword(email, password);
  }

  //cerrar sesion
  public logout(){
    console.log("logout");
    return this.authRepository.logout();
  }

  //sesion google
  public signInWhithGoogle(){
    return this.authRepository.signInWhithGoogle();
  }
}
