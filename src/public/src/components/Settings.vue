<template>
  <v-container fluid>
    <v-checkbox v-model="settings.subscribe" label="Push Notifications"></v-checkbox>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        subscribe: true,
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
