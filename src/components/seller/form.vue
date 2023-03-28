<template>
  <q-card class="q-pa-md">
    <h6> Seller</h6>
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
      <div>
        <q-btn unelevated color="primary" label="Submit" @click="addToTable"></q-btn>
      </div>
      <div>
        <q-btn unelevated color="red" label="Close"></q-btn>
      </div>
    </div>

</q-card>
</template>
<script>
export default {
  data () {
    return {
      formData: {},
    }
  }
}
</script>
