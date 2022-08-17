export default function ({ $axios }) {
  // $axios.onRequest(request => {
  //   let token = JSON.parse(localStorage.getItem('access_token'))
  //   console.log(token)

  //   if (token) {
  //     request.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   return request
  // })
  $axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
}