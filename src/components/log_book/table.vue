<template>
    <q-table :rows="rows">
      <template v-slot:top>
        <div class="row justify-between full-width">
          <div class="row q-gutter-md items-center">
            <div>
              <h5 class="q-ma-none">
                Log Book
              </h5>
            </div>
            <div>
              <q-btn label="Add" color="green" unelevated rounded to="./add"></q-btn>
            </div>
  
          </div>
          <div>
            <q-input v-model="searchText" label="Search" icon="search"></q-input>
          </div>
        </div>
  
  
      </template>
    </q-table>
  </template>



  <script>
  export default {
    data () {
      return {
        rows: [],
        searchText: null
      }
    },
    watch: {
      searchText () {
        this.fetchData()
      }
    },
    methods: {
      async fetchData () {
        let params = {}
        params.fields = 'id,account_id,contact_id,vehicle_id,driver_id,contract_id,log_type,date_from,date_to'
        if (this.searchText) {
          params.search = this.searchText
        }
  
        let response = await this.$api.get('/items/log_book', { params })
        this.rows = response.data.data
      }
    },
    created () {
      this.fetchData()
    }
  }
  </script>
  