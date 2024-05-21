<template>
<ul>
  <li v-for="row in k[0]">
    <h1>{{ row }}</h1>
    <h2>{{ morse.decode(row) }}</h2>
  </li>
</ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
}

li {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

h1 {
  margin: 1rem;
  opacity: 1;
  transition: opacity 0.8s linear;
}

h2 {
  margin: 1rem;
  opacity: 0;
  transition: opacity 1.0s linear;
  position: absolute;
  top: 0.5rem;
  font-weight: bold;
}

li:hover > h1 {
  opacity: 0;
}

li:hover > h2 {
  opacity: 1;
}
</style>
