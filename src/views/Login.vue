<template>
  <div class="container px-2">
    <div class="h-screen flex justify-center items-center">
      <section class="p-5 rounded bg-white shadow-lg">
        <h2 class="text-2xl font-semibold text-center mb-8">Login Form</h2>
        <form class="grid gap-6" @submit.prevent="login">
          <label class="text-sm">
            Email
            <input v-model="form.email" type="email" class="w-full rounded border-gray-300 mt-1" required>
          </label>
          <label class="text-sm">
            Password
            <input v-model="form.password" type="password" class="w-full rounded border-gray-300 mt-1" required>
          </label>
          <button
            class="w-full text-center bg-green-600 text-white rounded shadow p-2 font-semibold"
            :class="{'opacity-50' : isLoading}"
            :disabled="isLoading"
          >Login</button>
          <small class="text-blue-700 hover:underline text-center">
            <router-link to="/register">
              Doesn't have any account? Register now!
            </router-link>
          </small>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    async login () {
      try {
        this.isLoading = true

        const loginRes = await this.axios.post('/auth/login', this.form) // dapatkan token

        this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + loginRes.data.access_token // taruh di header axios

        const profileRes = await this.axios.post('/auth/me') // dapatkan informasi user

        const userInfo = JSON.stringify({ ...loginRes.data, ...profileRes.data }) // gabungkan dan format ke string

        localStorage.setItem('@userInfo', userInfo) // simpan ke localStorage

        this.$router.push('/admin/dashboard') // arahin ke dashboard ketika berhasil
      } catch (err) {
        if (err.response?.status == 401) return alert('Your email or password is incorrect!')
        return alert(err.message)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>