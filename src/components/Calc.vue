<script>
  export default {
    data() {
    return {
      user: "",
      name: this.name,
    };
  },

  props: ["name"]
}
</script>

<style lang="scss" scoped>
$endbackground: rgb(139, 135, 135);
p{
  background-color: $endbackground;
}

</style>

<template>


  <p> Tack för besöket {{name}}!</p>
  </template>
