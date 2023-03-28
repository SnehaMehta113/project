<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Departments</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input dense label="Name" lazy-rules :rules="[val => (val && val.length > 0) || 'Please type something']" outlined v-model="formData.name"/>
        <q-select dense label="Draft" :options="['Draft','Published','Archived']" outlined v-model="formData.status"/>
  
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
      

      let response = await this.$api.post('/items/departments', this.formData)
      console.log(response)
        }
  },

  }
  </script>