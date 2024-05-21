<template>
<nav>
  <NuxtLink to="/">/</NuxtLink>
  <NuxtLink to="/k1">k1</NuxtLink>
  <NuxtLink to="/k2">k2</NuxtLink>
  <!--<NuxtLink to="/k3">k3</NuxtLink>
  <NuxtLink to="/k4">k4</NuxtLink>
  -->
</nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 2rem;
}

nav > a {
  color: black;
}

nav > a:hover {
  text-decoration: underline;
}
</style>
