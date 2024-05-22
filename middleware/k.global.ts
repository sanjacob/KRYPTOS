export default defineNuxtRouteMiddleware((to, from) => {
  const valid = [
    '/', '/k0', '/k1', '/k2', '/k3', '/k4',
    '/manifest.webmanifest'
  ];

  if (!valid.includes(to.path)) {
    return navigateTo('/');
  }
});
