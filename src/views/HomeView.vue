<script>
import DaysList from '../components/DaysList.vue';
import Picture from '../components/Picture.vue';
import Calc from '../components/Calc.vue';

export default {
  components: {
    DaysList,
    Picture,
    Calc
  }
}
</script>

<template>


  <DaysList />
  <br>
  <Picture />
  <br>
  <br>
  <Calc name="Jon"></Calc>

</template>
