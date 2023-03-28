<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Log Book</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input dense label="Id" outlined v-model="formData.id"/>
        
          <q-select dense label="Account ID" @filter="(val, done)=>{accountSearchText= val;done()}" outlined v-model="formData.account_id" :options="accountList" map-options option-label="account_name" option-value="id" emit-value="" use-input/>
    
            <q-select dense label="Contact ID" @filter="(val, done)=>{contactSearchText= val;done()}" outlined v-model="formData.contact_id" :options="contactList" map-options option-label="name" option-value="id" emit-value="" use-input/>
              <q-select dense label="Vehicle ID" @filter="(val, done)=>{vehicleSearchText= val;done()}" outlined v-model="formData.vehicle_id" :options="vehicleList" map-options option-label="vehicle_no" option-value="id" emit-value use-input/>
                <q-select dense label="Driver ID" @filter="(val, done)=>{driverSearchText= val;done()}" outlined v-model="formData.driver_id" :options="driverList" map-options option-label="driver_name" option-value="id" emit-value use-input/>
                  <q-select dense label="Contract ID" @filter="(val, done)=>{contractSearchText= val;done()}" outlined v-model="formData.contract_id" :options="contractList" map-options option-label="name" option-value="id" emit-value use-input/>
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
        accountSearchText:null,
        accountList:[],
        contactSearchText:null,
        contactList:[],
        vehicleSearchText:null,
        vehicleList:[],
        driverSearchText:null,
        driverList:[],
        contractSearchText:null,
        contractList:[]

    }
  },
  watch:{
    accountSearchText(val){
      this.fetchAccount();
    },
    contactSearchText(val){
      this.fetchContact();
    },
    vehicleSearchText(val){
      this.fetchVehicle();
    },
    driverSearchText(val){
      this.fetchDriver();
    },
    contractSearchText(val){
      this.fetchContract();
    },
  },
  methods: {
    async submitData () {
      

      let response = await this.$api.post('/items/log_book', this.formData)
      console.log(response)
        },
        async fetchAccount (){
          let params = {}
          if (this.accountSearchText){
            params.filter = {account_name:{
              _starts_with:this.accountSearchText
            }}
          }
          let response = await this.$api.get('/items/accounts', {params} )
          this.accountList = response.data.data
        },
        async fetchContact (){
          let params = {}
          if (this.contactSearchText){
            params.filter = {name:{
              _starts_with:this.contactSearchText
            }}
          }
          let response = await this.$api.get('/items/contacts', {params} )
          this.contactList = response.data.data
        },
        async fetchVehicle (){
          let params = {}
          if (this.vehicleSearchText){
            params.filter = {vehicle_no:{
              _starts_with:this.vehicleSearchText
            }}
          }
          let response = await this.$api.get('/items/vehicles', {params} )
          this.vehicleList = response.data.data
        },
        async fetchDriver (){
          let params = {}
          if (this.driverSearchText){
            params.filter = {driver_name:{
              _starts_with:this.driverSearchText
            }}
          }
          let response = await this.$api.get('/items/driver', {params} )
          this.driverList = response.data.data
        },
        async fetchContract (){
          let params = {}
          if (this.contractSearchText){
            params.filter = {name:{
              _starts_with:this.contractSearchText
            }}
          }
          let response = await this.$api.get('/items/contracts', {params} )
          this.contractList = response.data.data
        }

  },
  created(){
      this.fetchAccount()
      this.fetchContact()
      this.fetchVehicle()
      this.fetchDriver()
      this.fetchContract()
 }
}
  </script>