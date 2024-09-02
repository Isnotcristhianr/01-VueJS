<template>
     <header>
      <div class="navbar bg-base-200">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Blog Vue</a>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li>
            </li>
        </ul>
    </div>
    <button
    @click="logoutSesion"
    type="button" class="btn btn-error">Logout</button>
        </div>
      </div>
    </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth.store';
import { useRouter } from 'vue-router';

    const { logout } = useAuthStore();

    const router = useRouter();

    const logoutSesion = async () => {
        await logout();
        router.replace(
            {
                name: 'login'
            }
        );
    }
</script>