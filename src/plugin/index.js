import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { apiUrl } from '@/config'
import { getUserInfo } from '@/helper'

const axiosInstance = axios.create({
  baseURL: apiUrl,
})

const token = getUserInfo().access_token
if (token) axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token

Vue.use(VueAxios, axiosInstance)