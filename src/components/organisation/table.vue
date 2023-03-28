<template>
    <q-table :rows="rows">
      <template v-slot:top>
        <div class="row justify-between full-width">
          <div class="row q-gutter-md items-center">
            <div>
              <h5 class="q-ma-none">
                Organization
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
        params.fields = 'id,organisation_name,prefix,description,address,state,city,country,pin_code,contact_number,email,gst_no,pan_no,invoices,status,banks'
        if (this.searchText) {
          params.search = this.searchText
        }
  
        let response = await this.$api.get('/items/organisation', { params })
        this.rows = response.data.data
      }
    },
    created () {
      this.fetchData()
    }
  }
  </script>
  