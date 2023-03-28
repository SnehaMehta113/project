<template>
    <q-table :rows="rows">
      <template v-slot:top>
        <div class="row justify-between full-width">
          <div class="row q-gutter-md items-center">
            <div>
              <h5 class="q-ma-none">
                Invoice
              </h5>
            </div>
            <div>
              <q-btn label="Add" color="green" unelevated rounded to="./add"></q-btn>
            </div>
  
          </div>
          <div>
            <q-input  v-model="searchText" label="Search" icon="search"></q-input>
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
        params.fields = 'id,account_id,invoice_number, invoice_date,grand_total,invoice_status,payment_status,organisation_id,journey_date'
        if (this.searchText) {
          params.search = this.searchText
        }
  
        let response = await this.$api.get('/items/invoices', { params })
        this.rows = response.data.data
      }
    },
    created () {
      this.fetchData()
    }
  }
  </script>
  