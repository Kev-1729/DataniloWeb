import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Importa el adaptador para Vercel

export default defineConfig({
  output: 'server', // Esto es importante para usar Vercel como servidor
  adapter: vercel(), // Configura el adaptador de Vercel
});
