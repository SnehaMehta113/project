<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none "> Items</h6>
    </div>
    <q-form class="q-gutter-md">
      <q-input dense label="Id" outlined v-model="formData.id"/>
      <q-input dense label="Item Name" outlined v-model="formData.item_name"/>
      <q-select dense label="Item Type" :options="['Service','service with rate']" outlined v-model="formData.item_type"/>
      <q-select dense label="Status" :options="['Draft','Published','Archived']" outlined v-model="formData.status"/>
      <q-input dense label="Date Created" type="date" outlined v-model="formData.date_created"/>
      <q-input dense label="Date Updated" type="date" outlined v-model="formData.date_update"/>

    </q-form>
    <q-separator class="q-my-md"></q-separator>
    <div class="row q-my-md q-gutter-sm">
      <div>
        <q-btn label="Submit" color="green" unelevated @click="submitData"></q-btn>
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
      

      let response = await this.$api.post('/items/items', this.formData)
      console.log(response)
        }
  },

}
</script>
