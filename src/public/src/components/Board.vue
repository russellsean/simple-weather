<template>
  <v-container fluid>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-data-table :items="employees">

      </v-data-table>

    </template>
    <template v-else>
      <v-data-iterator>

      </v-data-iterator>
    </template>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          'name': 'Sean Russell',
          'id': '1234',
          'status': 'In'
        },
        {
          'name': 'Joe Shmow',
          'id': '1235',
          'status': 'In'
        },
        {
          'name': 'Mike Smith',
          'id': '1236',
          'status': 'In'
        },
      ]
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
