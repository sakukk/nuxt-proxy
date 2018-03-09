export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // config.headers['Token'] = 'token'
    console.log('Making request to ' + config.url)
    // console.log(config)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      // redirect('/400')
    }
  })
}
