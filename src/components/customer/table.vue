<template>
  <q-table :rows="table.rows" :columns="table.columns">

  </q-table>
</template>
<script>
export default {
  data () {
    return {
      table: {
        rows: [],
        columns: [
          { label: 'Name', field: 'name' },
          { label: 'DoB', field: 'dob' },
          { label: 'Contact Number', field: 'contact_number' },
        ]
      }
    }
  }
}
</script>
