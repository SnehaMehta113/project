<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Documents</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input dense label="ID" lazy-rules :rules="[val => !!val || 'Field is required']" outlined v-model="formData.id"/>
        <q-input dense label="Document Name" lazy-rules :rules="[val => (val && val.length > 0) || 'Please type something']" outlined v-model="formData.document_name"/>
        <q-input dense label="Date" type="date" outlined v-model="formData.date"/>
        <q-select dense label="Draft" :options="['Draft','Published','Archived']" outlined v-model="formData.status"/>
        <q-input dense label="Date Created" type="date" outlined v-model="formData.date_created" />
        <q-input dense label="Date Updated" type="date" outlined v-model="formData.date_updated" />
        <q-toggle dense label="Approved" outlined v-model="formData.approved" />
  
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
      

      let response = await this.$api.post('/items/documents', this.formData)
      console.log(response)
        }
  },

  }
  </script>