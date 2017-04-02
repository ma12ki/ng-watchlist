// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { config as dotenvConfig } from 'dotenv';

const env = dotenvConfig();

console.log(env);

export const environment = {
  get production(): boolean {
    return process.env.NODE_ENV === 'production';
  },
  get port(): number {
    return process.env.PORT;
  },
  get serverUrl(): string {
    return process.env.WL_SERVER_URL;
  },
};
