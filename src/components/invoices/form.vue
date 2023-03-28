<template>
    {{ formData.account_id }}
    <div clas="column">
        <div>
            <h6 class="q-ma-none "> Invoices</h6>
        </div>
        <q-form ref="form" class="q-gutter-md">
            <q-input dense label="Id" v-model="formData.id" outlined/>
            
            <q-select dense :rules="[validationMandatory]" label="Select Account" @filter="(val, done)=>{accountSearchText= val;done()}" outlined v-model="formData.account_id" :options="accountList" map-options option-label="account_name" option-value="id" emit-value="" use-input/>

            <q-input lazy-rules :rules="[validationMandatory, validationNoSpace, validationNoSymbols , validationContactNumber ]" dense label="Invoice Number" outlined v-model="formData.invoice_number"/>
            <q-input :rules="[validationMandatory]" dense label="Invoice_date" type="date"  v-model="formData.invoice_date" outlined/>
            <q-input dense lable="Grand Total" v-model="formData.grand_total" outlined/>
            <q-select :rules="[validationMandatory]" dense label="Invoice status" :options="['Draft','Provisional','Final','Cancelled']" outlined v-model="formData.invoice_status"/>
            <q-select dense :rules="[validationMandatory]" label="Payment status" :options="['Unpaid','Partially Paid','Paid']" outlined v-model="formData.payment_status"/>
            <q-input dense label="Journey Date" type="date" outlined v-model="formData.journey_date" />
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
            accountList: [],
            formData: {},
            accountSearchText: null
        }
    },
    watch:{
    accountSearchText(val){
      this.fetchAccount();
    },
},
    methods: {
        async submitData() {
            if(!(await this.$refs.form.validate())){
                return 
            }

            let response = await this.$api.post('/items/invoices', this.formData)
            console.log(response)
        },
        async fetchAccount() {
            let params = {}
            if (this.accountSearchText) {
                params.filter = { account_name: {"_starts_with": this.accountSearchText} }
            }
            let response = await this.$api.get('/items/accounts', { params })
            this.accountList = response.data.data
        }
    },
    mounted(){
        console.log(this.$refs.form)
    },
    created() {
      
        this.fetchAccount()
    }

}
</script>