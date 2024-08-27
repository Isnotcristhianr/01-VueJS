import { AuthModel } from "../database/auth/auth.model";

export class AuthService {
  //private AuthModel: AuthModel = new AuthModel();

  //static para invocar una sola vez
  public static signInEmailAndPassword(email: string, password: string) {
    console.log("signInEmailAndPassword");

    return new AuthModel().signInEmailAndPassword(email, password);
  }

  public static registerUserWithEmailAndPassword(
    email: string,
    password: string
  ) {
    console.log("register user with email and password");

    return new AuthModel().registerUserWithEmailAndPassword(email, password);
  }

  //cerrar sesion
  public static logout(){
    console.log("logout");
    return new AuthModel().logout();
  }

  //sesion google
  public static signInWhithGoogle(){
    return new AuthModel().signInWhithGoogle();
  }
}
