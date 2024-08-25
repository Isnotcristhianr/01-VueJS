import { LoginEmailAndPasswordUseCase } from "@/domain/use-cases/auth/loginEmailAndPassword.use_case";
import { defineStore } from "pinia";
import { reactive } from "vue";

const LoginFormInitialState = {
  email: "",
  password: "",
};

export const useAuthStore = defineStore("auth", () => {
  const LoginForm = reactive({
    ...LoginFormInitialState,
  });

  const resetForm = () => {
    LoginForm.email = LoginFormInitialState.email;
    LoginForm.password = LoginFormInitialState.password;
  };

  const LoginEmailAndPassword = async () => {
    try {
      const user = await LoginEmailAndPasswordUseCase.execute(
        LoginForm.email,
        LoginForm.password
      );
        console.log(user);
    } catch (e) {
      console.log(e);
      resetForm();
    }
  };

  return {
    LoginForm,
    resetForm,
    LoginEmailAndPassword,
  };
});
