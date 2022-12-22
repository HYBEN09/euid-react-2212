import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //localhost:3000로 구동
  server: {
    host: "localhost",
    port: 3000,
  },
});
