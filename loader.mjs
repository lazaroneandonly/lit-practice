// loader.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

export function resolve(specifier, context, defaultResolve) {
  return defaultResolve(specifier, context, defaultResolve);
}

export function load(url, context, defaultLoad) {
  return defaultLoad(url, context, defaultLoad);
}
