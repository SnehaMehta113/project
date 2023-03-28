<template>
    
    <div clas="column">
        <div>
            <h6 class="q-ma-none "> Invoice Details</h6>
        </div>
        <q-form class="q-gutter-md">
            <q-input dense label="Id" v-model="formData.id" outlined/>
            <q-select dense label="Invoice Id" @filter="(val, done)=>{invoiceSearchText= val;done()}" outlined v-model="formData.invoice_id" :options="invoiceList" map-options option-label="invoice_number" option-value="id" emit-value="" use-input/>
            
            <q-select dense label="Item ID" @filter="(val, done)=>{itemSearchText= val;done()}" outlined v-model="formData.item_id" :options="itemList" map-options option-label="item_name" option-value="id" emit-value="" use-input/>

           
            <q-select dense label="Status" :options="['Draft','Provisional','Final','Cancelled']" outlined v-model="formData.status"/>
            
            
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
            invoiceList:[],
            invoiceSearchText:null,
            itemList: [],
            formData: {},
            itemSearchText: null
        }
},
watch:{
    invoiceSearchText(val){
      this.fetchInvoice();
    },
    itemSearchText(val){
      this.fetchItem();
    },
},
    methods: {
        async submitData() {


            let response = await this.$api.post('/items/invoice_details', this.formData)
            console.log(response)
        },
        async fetchInvoice() {
            let params = {}
            if (this.invoiceSearchText) {
                params.filter = { invoice_number: {"_starts_with":this.invoiceSearchText }}
            }
            let response = await this.$api.get('/items/invoices', { params })
            this.invoiceList = response.data.data
        },
        async fetchItem() {
            let params = {}
            if (this.itemSearchText) {
                params.filter = {item_name: {"_starts_with":this.itemSearchText }}
            }
            let response = await this.$api.get('/items/items', { params })
            this.itemList = response.data.data
        }
    },
    created() {
        this.fetchInvoice()
        this.fetchItem()
       
    }

}
</script>