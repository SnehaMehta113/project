
<template>
    <q-page class="q-pa-md bg-grey-3">
        <div class="row">
          <q-card class="col-md-4 q-pa-md q-mx-md" v-if="mode">
            <component :is="formComponent">
            </component>
          </q-card>
          <div class="col">
            <component :is="tableComponent"></component>
    
          </div>
        </div>
    
    
      </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'customer',
  props: ['moduleName', 'mode'],
  watch: {
    moduleName: {
      handler () {
        this.formComponent = defineAsyncComponent(() => import('./../components/' + this.moduleName + '/form.vue'))
        this.tableComponent = defineAsyncComponent(() => import('./../components/' + this.moduleName + '/table.vue'))
      },
      immediate: true
    }
  },
  data () {
    return {
      formComponent: false,
      tableComponent: false,
    }
  },
  methods: {
    addToTable () {
      this.table.rows.push(JSON.parse(JSON.stringify(this.formData)))
      this.formData = {}
    }
  }
}
</script>