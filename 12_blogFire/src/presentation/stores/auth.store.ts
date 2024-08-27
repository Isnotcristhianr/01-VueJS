import { LoginEmailAndPasswordUseCase } from "@/domain/use-cases/auth/loginEmailAndPassword.use_case";
import { defineStore } from "pinia";
import { reactive } from "vue";
import { RegisterUseCase } from "../../domain/use-cases/auth/registrer.use_case";
import { verifyPasswor } from "../../helpers/verifyPassword";
import { auth } from "@/config/firebaseConfig";
import { logoutUseCase } from "@/domain/use-cases/auth/logout.use_case";
import { LoginGoogleUseCase } from "@/domain/use-cases/auth/loginGoogle.use_case";

const AuthFormInitialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const useAuthStore = defineStore("auth", () => {
  const authForm = reactive({
    ...AuthFormInitialState,
  });

  const resetForm = () => {
    authForm.email = AuthFormInitialState.email;
    authForm.password = AuthFormInitialState.password;
    authForm.confirmPassword = AuthFormInitialState.confirmPassword;
  };

  const LoginEmailAndPassword = async () => {
    try {
      const user = await LoginEmailAndPasswordUseCase.execute(
        authForm.email,
        authForm.password
      );
      console.log(user);

      if (!user) {
        throw new Error("Error to login, email or password incorrect");
      }

      //redirecion
      return user;
    } catch (e) {
      console.log(e);
      resetForm();
    }
  };

  //register

  const RegisterEmailAndPassword = async () => {
    try {
      if (authForm.password.length < 6 || authForm.confirmPassword.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      if (!verifyPasswor(authForm.password, authForm.confirmPassword)) {
        throw new Error("Password and Confirm Password must be the same");
      }

      const user = await RegisterUseCase.execute(
        authForm.email,
        authForm.password
      );
      console.log(user);

      if (!user) {
        throw new Error("Error to register");
      }

      //redirecion
      return user;
    } catch (e) {
      console.log(e);
      resetForm();
    }
  };

  //cerrar sesion
  const logout = () => {
    try {
      return logoutUseCase.execute();
    } catch (e) {
      console.log(e);
    }
  };

  //sesion google
  const loginWhitGoogle = async () => {
    try{
      const user = await LoginGoogleUseCase.execute();

      if(!user){
        throw new Error("Error to login with google");
      }

      return user;
    }catch(e){
      console.log(e);
      resetForm();
    }
  }

  return {
    authForm,
    resetForm,
    LoginEmailAndPassword,
    RegisterEmailAndPassword,
    logout,
    loginWhitGoogle,
  };
});
