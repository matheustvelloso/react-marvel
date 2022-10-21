const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    facebook: import.meta.env.VITE_COMPANY_FACEBOOK,
    twitter: import.meta.env.VITE_COMPANY_TWITTER,
    instagram: import.meta.env.VITE_COMPANY_INSTAGRAM,
    tumblr: import.meta.env.VITE_COMPANY_TUMBLR,
    youtube: import.meta.env.VITE_COMPANY_YOUTUBE,
    snapchat: import.meta.env.VITE_COMPANY_SNAPCHAT,
    pinterest: import.meta.env.VITE_COMPANY_PINTEREST,
  },
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    key: import.meta.env.VITE_API_KEY,
    hash: import.meta.env.VITE_API_HASH,
    ts: import.meta.env.VITE_API_TS,
  },
  i18n: {
    debugg: import.meta.env.VITE_I18N_DEBBUG,
  },
};

export default Config;
