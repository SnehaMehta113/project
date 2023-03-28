<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Vehicles Type</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input dense label="Id" outlined v-model="formData.id"/>
        <q-input dense label="Sort" outlined v-model="formData.sort"/>
        <q-input dense label="Date Created" type="date" outlined v-model="formData.date_created"/>
        <q-input dense label="Date Updated" type="date" outlined v-model="formData.Date_updated"/>
        <q-input dense label="Vehicles Type" outlined v-model="formData.vehicles_type"/>
        <q-input dense label="Vehicles" outlined v-model="formData.vehicles"/>
        <q-input dense label="Contracts" type="date" outlined v-model="formData.contracts"/>
        </q-form>
      <q-separator class="q-my-md"></q-separator>
      <div class="row q-my-md q-gutter-sm">
        <div>
          <q-btn label="Submit" color="green" unelevated  @click="submitData"></q-btn>
        </div>
        <div>
          <q-btn label="Cancel" color="red" unelevated></q-btn>
        </div>
      </div>
    </div>
  </template>

  
  <script>
  export default {
    data () {
    return {
formData:{}
    }
  },
  methods: {
    async submitData () {
      

      let response = await this.$api.post('/items/vehicles', this.formData)
      console.log(response)
        }
  },

  }
  </script>