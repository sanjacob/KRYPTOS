export default defineNuxtRouteMiddleware((to, from) => {
  const valid = ['/', '/k1', '/k2', '/k3', '/k4'];

  if (!valid.includes(to.path)) {
    return navigateTo('/');
  }
});
