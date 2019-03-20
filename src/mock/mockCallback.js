const MockCallback = {
    login: function (options) {
        console.log('mock /\\/blog\\/login/', options);
        return {
            code: 200,
            msg: '登录成功',
            redirect: 'http://localhost:8081/public/view/404.html'
        }
    }
}

export default MockCallback