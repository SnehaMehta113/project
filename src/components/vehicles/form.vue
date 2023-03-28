<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Vehicles</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input dense label="Id" outlined v-model="formData.id"/>
        <q-input dense label="Vehicle_No" lazy-rules :rules="[val=>val.length>10||'Number is less than 10']" outlined v-model="formData.vehicle_no"/>
        <q-input dense label="Vehicle_type" outlined v-model="formData.vehicle_type"/>
        <q-select dense label="Status" :options="['Draft','Published','Archived']" outlined v-model="formData.status"/>
        <q-input dense label="Sort" outlined v-model="formData.sort"/>
        <q-input dense label="Fuel_Avg" outlined v-model="formData.fuel_avg"/>
        
  
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