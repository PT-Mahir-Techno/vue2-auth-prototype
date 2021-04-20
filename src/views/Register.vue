<template>
  <div class="bg-gray-100 h-screen w-screen">
    <div class="container px-2">
      <div class="h-screen flex justify-center items-center">
        <section class="p-5 rounded bg-white shadow-lg">
          <h2 class="text-2xl font-semibold text-center mb-8">Registration Form</h2>
          <div class="grid gap-6">
            <label class="text-sm">
              Username
              <input type="text" class="w-full rounded border-gray-300 mt-1">
            </label>
            <label class="text-sm">
              Email
              <input type="text" class="w-full rounded border-gray-300 mt-1">
            </label>
            <label class="text-sm">
              Phone
              <input type="text" class="w-full rounded border-gray-300 mt-1">
            </label>
            <label class="text-sm">
              Password
              <input type="password" class="w-full rounded border-gray-300 mt-1">
            </label>
            <label class="text-sm">
              Retype Password
              <input type="password" class="w-full rounded border-gray-300 mt-1">
            </label>
            <button class="w-full text-center bg-green-600 text-white rounded shadow p-2 font-semibold">Register</button>
            <small class="text-blue-700 hover:underline text-center">
              <router-link to="/login">
                Already have an account? Login now!
              </router-link>
            </small>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>