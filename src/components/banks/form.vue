<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none "> Banks</h6>
    </div>
    <q-form ref="form" class="q-gutter-md">
      <q-input dense label="Id" v-model="formData.id" outlined />
      <q-input :rules="[validationMandatory, validationNoSymbols]" dense label="Bank Name" outlined v-model="formData.bank_name" />
      <q-input type="text" :rules="[validationMandatory, validationNoSymbols]" dense label="Account Name" outlined v-model="formData.account_name" />
      <q-input dense :rules="[validationMandatory, validationNoSymbols,validationNoSpace]" label="Account No" lazy-rules  outlined
        v-model="formData.account_no" mask="\AC##########" fill-mask/>
      <q-input :rules="[validationMandatory, validationNoSymbols,validationNoSpace]" dense label="IFSC" outlined v-model="formData.ifsc" />
      <q-input dense type="text" :rules="[validationMandatory,ValidationString ,validationNoSymbols]" label="Branch" outlined v-model="formData.Branch" />

      <q-select dense label=" Select Organisation" @filter="(val, done) => { organisationSearchText = val; done() }"
        :options="organisationList" outlined v-model="formData.organisation_id" map-options
        option-label="organisation_name" option-value="id" emit-value="" use-input />
      
    </q-form>
    <div></div>
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
      organisationList: [],
      organisationSearchText: null
    }
  },
  watch: {
    organisationSearchText(val) {
      this.fetchOrganisation();
    },
  },
  methods: {
    async submitData() {
      if(!(await this.$refs.form.validate())){
                return 
            }

            let response
      try{
         response = await this.$api.post('/items/banks', this.formData)
      }catch(err){
      
        this.$q.dialog({
          message: 'Error occurred: ' + err.toJSON().message

        })
      }
      if(response.status >= 200 && response.status < 400){
        this.$q.dialog({
          message: 'Data Submitted Successfully'
        })
      }
      
    },

    async fetchOrganisation() {
      let params = {}
      if (this.organisationSearchText) {
        params.filter = {
          organisation_name: { "_starts_with": this.organisationSearchText }
        }
        
      }
      let response = await this.$api.get('/items/organisation', { params })
        this.organisationList = response.data.data
    }
  },
  created() {
    this.fetchOrganisation()
  }

}
</script>
  