import type { MiddlewareHandler } from 'hono';

import { createAppContainer } from '../../../di/container.js';
import type { AppEnv } from '../../../types.js';

const appContainer = createAppContainer();

export const appContainerMiddleware: MiddlewareHandler<AppEnv> = async (context, next) => {
  const scope = appContainer.createScope();
  context.set('container', scope);
  await next();
};
