<template>
    <div class="column">
      <div>
        <h6 class="q-ma-none "> Account Settlements</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input dense label="Id" lazy-rules  :rules="[val => !!val || 'Field is required']" v-model="formData.id" outlined />
         <q-select dense label="Account ID" @filter="(val, done)=>{accountSearchText= val;done()}" outlined v-model="formData.account_id" :options="accountList" map-options option-label="account_name" option-value="id" emit-value="" use-input/>
        <q-select dense label="Item ID" @filter="(val, done)=>{itemSearchText= val;done()}" outlined v-model="formData.item_id" :options="itemList" map-options option-label="item_name" option-value="id" emit-value="" use-input/>
       <q-input label="Amount" v-model="formData.amount" outlined/>
        <q-input label="Date Updated" type="date" v-model="formData.date_updated" outlined/>
        <q-input label="Date Created" type="date" v-model="formData.date_created" outlined/>
        <q-input label="User Created"  v-model="formData.user_created" outlined/>
        <q-input label="User Created" v-model="formData.user_created" outlined/>
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
  formData:{},
  accountList:[],
  accountSearchText:null,
  itemList:[],
  itemSearchText:null
    }
  },
  watch :{
    accountSearchText(val){
      this.fetchAccount();
    },
    itemSearchText(val){
      this.fetchItem();
    },
  },
  methods: {
    async submitData () {
       let response = await this.$api.post('/items/account_settlements', this.formData)
      console.log(response)
        },
        async fetchAccount(){
            let params = {}
            if (this.accountSearchText) {
                params.filter = { account_name: {"_starts_with":this.accountSearchText }}
            }
            let response = await this.$api.get('/items/accounts', { params })
            this.accountList = response.data.data
        },
        async fetchItem(){
            let params = {}
            if (this.itemSearchText) {
                params.filter = { item_name: this.itemSearchText }
            }
            let response = await this.$api.get('/items/items', { params })
            this.itemList = response.data.data
        }
  },
  created(){
    this.fetchAccount()
    this.fetchItem()
  }
  
  }
  </script>