// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/cristhianrecalde/Documents/Escritorio%20-%20MacBook%20Air%20de%20Cristhian/Dev/VUE/01-VueJS/11_pinia_store/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/cristhianrecalde/Documents/Escritorio%20-%20MacBook%20Air%20de%20Cristhian/Dev/VUE/01-VueJS/11_pinia_store/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwindcss from "file:///Users/cristhianrecalde/Documents/Escritorio%20-%20MacBook%20Air%20de%20Cristhian/Dev/VUE/01-VueJS/11_pinia_store/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/cristhianrecalde/Documents/Escritorio%20-%20MacBook%20Air%20de%20Cristhian/Dev/VUE/01-VueJS/11_pinia_store/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_import_meta_url = "file:///Users/cristhianrecalde/Documents/Escritorio%20-%20MacBook%20Air%20de%20Cristhian/Dev/VUE/01-VueJS/11_pinia_store/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY3Jpc3RoaWFucmVjYWxkZS9Eb2N1bWVudHMvRXNjcml0b3JpbyAtIE1hY0Jvb2sgQWlyIGRlIENyaXN0aGlhbi9EZXYvVlVFLzAxLVZ1ZUpTLzExX3BpbmlhX3N0b3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY3Jpc3RoaWFucmVjYWxkZS9Eb2N1bWVudHMvRXNjcml0b3JpbyAtIE1hY0Jvb2sgQWlyIGRlIENyaXN0aGlhbi9EZXYvVlVFLzAxLVZ1ZUpTLzExX3BpbmlhX3N0b3JlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jcmlzdGhpYW5yZWNhbGRlL0RvY3VtZW50cy9Fc2NyaXRvcmlvJTIwLSUyME1hY0Jvb2slMjBBaXIlMjBkZSUyMENyaXN0aGlhbi9EZXYvVlVFLzAxLVZ1ZUpTLzExX3BpbmlhX3N0b3JlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHBvc3Rjc3MgZnJvbSAncG9zdGNzcyc7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnOyBcdTAwQTAgXG5cbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpXSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzLCBhdXRvcHJlZml4ZXJdLFxuICAgICAgXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFpZixTQUFTLGVBQWUsV0FBVztBQUVwaEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBRWhCLE9BQU8saUJBQWlCO0FBRXhCLE9BQU8sa0JBQWtCO0FBUDZSLElBQU0sMkNBQTJDO0FBU3ZXLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLFlBQVk7QUFBQSxJQUVyQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
