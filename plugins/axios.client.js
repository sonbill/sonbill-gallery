// export default function ({ $axios }) {
//   $axios.onRequest(request => {
//     let token = JSON.parse(localStorage.getItem('access_token'))
//     console.log(token)

//     if (token) {
//       request.headers.common['Authorization'] = `Bearer ${token}`
//     }
//     return request
//   })
// }