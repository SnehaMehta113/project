<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none "> Menu Modules</h6>
    </div>
    <q-form class="q-gutter-md">
      <q-input dense label="Collection Name" outlined v-model="formData.collection_name" />
      <q-input dense label="Display Name" outlined v-model="formData.display_name" />
      <q-select dense label="Menu Id" @filter="(val, done)=>{menuSearchText= val;done()}" :options="menuList" outlined v-model="formData.menu_id" map-options
        option-label="name" option-value="menu_id" emit-value use-input />
      <q-select dense label="Draft" :options="['Draft', 'Published', 'Archived']" outlined v-model="formData.status" />

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
  data() {
    return {
      formData: {},
      menuList: [],
      menuSearchText: null
    }
  },
  methods: {
    async submitData() {


      let response = await this.$api.post('/items/menu_modules', this.formData)
      console.log(response)
    },
    async fetchMenu() {
      let params = {}
      if (this.menuSearchText) {
        params.filter = { name: {"_starts_with":this.menuSearchText} }
      }
      let response = await this.$api.get('/items/menu', { params })
      this.menuList = response.data.data
    }
  },
  created() {
    this.fetchMenu()
  }

}
</script>