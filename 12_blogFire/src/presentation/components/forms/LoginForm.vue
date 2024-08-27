<template>
  <div class=" mx-auto">
    <h2 class="card-title">Welcome Again!</h2>
    <form @submit.prevent="login" class="">
      <div class="form-control ">
        <label class="input input-bordered flex items-center gap-2 m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            />
          </svg>
          <input
          v-model="authForm.email"
          type="text" class="grow" placeholder="Email" />
        </label>
        <label class="input input-bordered flex items-center gap-2 m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
          v-model="authForm.password"
          type="password" class="grow" placeholder="password" />
        </label>
      </div>
      <div class="card text-center m-1">
        <button type="submit" class="btn btn-primary text-white">Login</button>
        <!-- with google -->
        <button  @click="loginGoogle" type="button" class="btn m-1">
          <!-- usar svg -->
          <img
          src="../../assets/Icono Google.svg" alt="" width="20" />
          Login with Google
        </button>
      </div>
    </form>
    <br>
    <hr>
    <!-- crear cuenta -->
    <div class="card text-center m-1">
      <p>Don't have an account?</p>
      <router-link to="/auth/register" class="btn btn-error text-white">Register</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useAuthStore } from '../../stores/auth.store';
  
  //ruta
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const {LoginEmailAndPassword, authForm, resetForm, loginWhitGoogle} = useAuthStore();

  const login = async()=>{
    const user = await LoginEmailAndPassword();

    if(user){
      router.replace({
        name: 'blog'
      }
      );
    }
  }

  const loginGoogle = async()=>{
    const user = await loginWhitGoogle();

    if(user){
      return router.replace({
        name: 'blog'
      });
    }
    return router.replace({
      name: 'login'
    });
  }

  onMounted(() => {
    resetForm();
  });

</script>