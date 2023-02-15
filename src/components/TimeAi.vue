
<!-- OBS!!! Nedan kod är 100% genererad av AI -->

<script>
export default {
  data() {
    return {
      selectedCity: "Stockholm",
      currentTime: new Date(),
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
  watch: {
    selectedCity(newVal) {
      if (newVal === "New York") {
        this.currentTime = new Date().toLocaleString("en-US", {
          timeZone: "America/New_York",
        });
      } else if (newVal === "Stockholm") {
        this.currentTime = new Date().toLocaleString("sv-SE", {
          timeZone: "Europe/Stockholm",
        });
      } else if (newVal === "Tokyo") {
        this.currentTime = new Date().toLocaleString("ja-JP", {
          timeZone: "Asia/Tokyo",
        });
      }
    },
  },
};
</script>

<template>
  <div>
    <p>Aktuell tid: {{ currentTime }}</p>
    <label>
      <input type="radio" v-model="selectedCity" value="New York" /> New York
    </label>
    <label>
      <input type="radio" v-model="selectedCity" value="Stockholm" /> Stockholm
    </label>
    <label>
      <input type="radio" v-model="selectedCity" value="Tokyo" /> Tokyo
    </label>
  </div>
</template>
