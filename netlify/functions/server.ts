import serverless from 'serverless-http';
import { createApp } from '../../server/app';

let handlerPromise: Promise<serverless.Handler> | null = null;

function getHandler() {
  if (!handlerPromise) {
    handlerPromise = createApp().then(({ app }) => serverless(app));
  }
  return handlerPromise;
}

export const handler: serverless.Handler = async (event, context) => {
  const h = await getHandler();
  return h(event, context);
};
