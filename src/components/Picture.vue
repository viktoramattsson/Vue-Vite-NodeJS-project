<script>
  export default {
    data() {
      return { image: 'Viktor.png' }
    }
  }
</script>

<style>
img{
  width: 100px;
}</style>
<template>

<h3>Såhär ser jag ut</h3>
<img alt="" :src="image">
</template>
