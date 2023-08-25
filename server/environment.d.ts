export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string | number;
      ENV: "test" | "dev" | "prod";
    }
  }
}
