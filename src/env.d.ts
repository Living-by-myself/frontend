interface ImportMetaEnv {
  readonly VITE_KAKAO_MAP_API_KEY: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
