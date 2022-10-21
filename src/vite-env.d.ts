/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_I18N_DEBBUG?: 'true' | 'false';
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_API_KEY?: string;
  readonly VITE_API_HASH?: string;
  readonly VITE_API_TS?: string;
  readonly VITE_COMPANY_FACEBOOK?: string;
  readonly VITE_COMPANY_TWITTER?: string;
  readonly VITE_COMPANY_INSTAGRAM?: string;
  readonly VITE_COMPANY_TUMBLR?: string;
  readonly VITE_COMPANY_YOUTUBE?: string;
  readonly VITE_COMPANY_SNAPCHAT?: string;
  readonly VITE_COMPANY_PINTEREST?: string;
  // add more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
