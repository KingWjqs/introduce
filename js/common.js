axios.defaults.baseURL = 'https://hmajax.itheima.net';

axios.interceptors.request.use((req) => {
    if (localStorage.getItem('workuser')) {
        req.headers.Authorization = JSON.parse(localStorage.getItem('workuser')).token
    }
    return req
}, (err) => {
    return Promise.reject(err)
})
axios.interceptors.response.use((res) => {
    return res
}, (err) => {
    if (err.response.data.message === "token验证失败") {
        localStorage.removeItem('workuser')
        setTimeout(() => {
            location.href = 'login.html'
        }, 2000);
    }
    return Promise.reject(err)
})
