import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), compress()],
  output: "hybrid",
  adapter: vercel()
});