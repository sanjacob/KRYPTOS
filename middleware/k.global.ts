export default defineNuxtRouteMiddleware((to, from) => {
  if (to != undefined && to.path != undefined) {
    if (to.path.startsWith('/k') && to.path.length > 2) {
      if (!(['1', '2', '3', '4'].includes(to.path[2]))) {
          return navigateTo('/');
      }
    }
  }
});
