<script>
  import DaysList from './components/DaysList.vue'
  import Welcome from './components/Welcome.vue'


  export default {
    components: {
      DaysList,
      Welcome,

    }
  }
</script>
<style scoped>
ul{
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  margin-bottom: 20px;

}

</style>

<template>
  <body>
  <Welcome />
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/ai">Ai</RouterLink>
      </li>
    </ul>
  </nav>
</body>
  <main>
    <RouterView />
  </main>



</template>
