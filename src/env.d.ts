/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_APP_TITLE: string;
  readonly API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}