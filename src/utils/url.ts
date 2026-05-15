/**
 * Deployment base path, with no trailing slash.
 * Empty string in dev (BASE_URL = '/'), '/as.axis.proto8' on GitHub Pages.
 */
export const deploymentBase = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Prepend the deployment base to any absolute path.
 * withBase('/en/') → '/en/' in dev, '/as.axis.proto8/en/' on GitHub Pages.
 */
export function withBase(path: string): string {
  return `${deploymentBase}${path}`;
}
