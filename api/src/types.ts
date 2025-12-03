import type { AppContainer } from './di/container.js';

export type AppEnv = {
  Variables: {
    container: AppContainer;
  };
};
