<template>
  <q-card class="q-pa-md">
    <h6> Customer</h6>
    <q-form class="q-gutter-md">
      <q-input v-model="formData.name" label="Name" />
      <q-input v-model="formData.dob" type="date" label="DoB" />
      <q-select v-model="formData.gender" :options="['Male', 'Female']" label="Gender" />
      <q-textarea v-model="formData.address" label="Address" />
      <q-input v-model="formData.district" label="District" />
      <q-input v-model="formData.contact_number" type="number" label="Contact Number" />
      <q-input v-model="formData.email" type="email" label="Email" />
    </q-form>
    <div class="row q-gutter-md q-my-md">
      <div v-if="c === 3">
        <q-btn ref="btn1" unelevated color="primary" label="Submit" @click="addToTable"></q-btn>
      </div>

      <div>
        <q-btn unelevated color="red" label="Close"></q-btn>
      </div>
    </div>

</q-card>
</template>
<script>
let a = 1
export default {

  methods: {
    fetchData () {
      // get value of c from server

    }
  },
  async cmounted () {
    await this.fetchData()
    crossOriginIsolated.log
    console.log(this.$refs.btn1)
  },
  data () {
    return {
      formData: {
        c: a
      }
    }

  },
}

</script>
