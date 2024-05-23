export default defineNuxtRouteMiddleware((to, from) => {
  if (to != undefined && to.path != undefined) {
    if (to.path.startsWith('/k')) {
      const valid = [
        '/k0', '/k1', '/k2', '/k3', '/k4',
      ];

      if (!valid.includes(to.path)) {
        return navigateTo('/');
      }
    }
  }
});
