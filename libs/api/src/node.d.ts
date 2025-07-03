// <reference types="vite/client" />

interface BaseImportMetaEnv {
  // readonly [key: ImportMetaEnvFallbackKey]: any
  readonly BASE_URL: string
  readonly MODE: 'development' | 'production'
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMetaEnv extends BaseImportMetaEnv {
  readonly VITE_STRAPI_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
