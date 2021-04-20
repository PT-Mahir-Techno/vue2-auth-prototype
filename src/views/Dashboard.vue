<template>
  <div class="">
    <h1>this is dashboard</h1>
    <p>welcome back {{ profile.name }}</p>
    <button class="p-2 font-semibold bg-green-600 rounded shadow text-white" @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      profile: {}
    }
  },
  methods: {
    logout () {
      try {
        localStorage.removeItem('@userInfo')
        delete this.axios.defaults.headers.common["Authorization"]
        this.$router.push('/auth/login')
      } catch (err) {
        alert(err)
      }
    }
  },
  async mounted () {
    try {
      const res = await this.axios.post('/auth/me') // test token
      this.profile = res.data
    } catch (err) {
      alert(err.response)
    }

  }
}
</script>