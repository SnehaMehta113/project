<template>
  <q-page class="flex flex-center bg-grey-3">
    <q-card class="q-pa-md col-4">
      <div class="column">
        <q-input label="username" v-model="formData.email"></q-input>
        <q-input type="password" label="password" v-model="formData.password"></q-input>
      </div>
      <div class="row q-my-md">
        <q-btn class="col" color="green" rounded unelevated label="Login" @click="login"></q-btn>


      </div>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      formData: {},
      response: {}
    }
  },
  methods: {
    async login () {
      delete this.$api.defaults.headers.common.authorization
      let response = await this.$api.post('/auth/login', this.formData)
      this.response = response.data.data
      this.postAuth()
    },
    async refresh () {
      let response = await this.$api.post('/auth/refresh', { refresh_token: this.response.refresh_token })
      this.response = response.data.data
      this.postAuth()
    },
    postAuth () {
      this.$api.defaults.headers.common.authorization = 'Bearer ' + this.response.access_token
      this.$q.localStorage.set('access_token', this.response.access_token)
      this.$q.localStorage.set('refresh_token', this.response.refresh_token)
      setTimeout(this.refresh, this.response.expires - 2000)
      this.$router.push('/')
    }
  }
}
</script>