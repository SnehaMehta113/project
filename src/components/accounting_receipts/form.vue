<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Accounting Details</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input dense label="Id" lazy-rules  :rules="[val => !!val || 'Field is required']" v-model="formData.id" outlined />
         <q-select dense label="Account ID" @filter="(val, done)=>{accountSearchText= val;done()}" outlined v-model="formData.account_id" :options="accountList" map-options option-label="account_name" option-value="id" emit-value="" use-input/>
        <q-input dense lable="Receipt Date" type="date" v-model="formData.receipt_date" outlined/>
       
        <q-select dense label="Receipt Mode" :options="['Cheque','Cash','Bank Transfer','UPI']" outlined v-model="formData.receipt_mode"/>
        <q-input dense label="Receipt Amount" v-model="formData.receipt_amount" outlined/>
        <q-select label="Receipt Status" :options="['Received','Cleared','Declined']" v-model="formData.receipt_status" outlined/>
        <q-input label="Date Updated" type="date" v-model="formData.date_updated" outlined/>
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
  accountSearchText:null
    }
  },
  methods: {
    async submitData () {
       let response = await this.$api.post('/items/accounting_receipts', this.formData)
      console.log(response)
        },
        async fetchAccount(){
            let params = {}
            if (this.accountSearchText) {
                params.filter = { name: {"_starts_with": this.accountSearchText} }
            }
            let response = await this.$api.get('/items/accounts', { params })
            this.accountList = response.data.data
        }
  },
  created(){
    this.fetchAccount()
  }
  
  }
  </script>