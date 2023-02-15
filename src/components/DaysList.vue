<script>
  export default {

    data() {
      return {
        days: null,
        cc: "",
        year: null,
        local: false
      }
    },
  methods: {
    onClick(){
      console.log("click if functioning")
      //fetch('https://date.nager.at/api/v3/publicholidays/'+ this.year +'/dk')
      fetch('https://date.nager.at/api/v3/publicholidays/'+ this.year +'/' + this.cc)
        .then((response) => response.json())
        .then((days) => {
          this.days = days
        })
    },

  }
  }
</script>

<template>
  <p>Här kan du ta reda på nationella helgdagar olika år, i olika länder</p>
  <ul>
  <li><input v-model="cc" type="text" placeholder="Ange landskod (ex SE)"></li>
  <li><input v-model="year" type="text" placeholder="år"></li>
  <li>Lokalt språk <input v-model="local" type="checkbox"></li>
  <li><input type="button" value="Sök" @click="onClick" ></li>
</ul>

<p >du valde år {{this.year }}</p>
  <ul>
    <li v-if="!local" v-for="day in days">{{ day.name + "    " + day.date }}</li>
    <li v-else v-for="day in days">{{ day.localName + "    " + day.date }}</li>
  </ul>
</template>
