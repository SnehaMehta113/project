<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Orgainsation</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input label="ID" v-model="formData.id" outlined/>
        <q-input dense label="Organsation Name" outlined v-model="formData.organisation_name"/>
        <q-input dense label="Prefix" outlined v-model="formData.prefix"/>
        <q-input dense label="Description" outlined v-model="formData.description"/>
        <q-input dense label="address" type="textarea" outlined v-model="formData.address"/>
      <q-input dense label="State" outlined v-model="formData.state"/>
      <q-input dense label="City" outlined v-model="formData.city"/>
      <q-input dense label="Country" outlined v-model="formData.country"/>
      <q-input dense label="Pin Code" outlined v-model="formData.pin_code"/>
      <q-input dense label="Contact Number " outlined v-model="formData.contact_number"/>
      <q-input dense label="email" outlined v-model="formData.email"/>
      <q-input dense label="Gst Number " outlined v-model="formData.gst_number"/>
      <q-input dense label="Pan Number " outlined v-model="formData.pan_no"/>
      <q-select dense label="Draft" :options="['Draft','Published','Arcived']" outlined v-model="formData.id"/>


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
      

      let response = await this.$api.post('/items/organisation', this.formData)
      console.log(response)
        }
  },

  }
  </script>