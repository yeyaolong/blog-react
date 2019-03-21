const MockCallback = {
    login: function (options) {
        console.log('mock /\\/blog\\/login/', options);
        if (options && typeof options.body === 'string') {
            let temp = options.body.split('&');
            let username = temp[0].split('=')[1];
            let password = temp[1].split('=')[1];
            if (username === 'yeyl' && password === 'yeyl') {
                return {
                    code: 200,
                    msg: '登录成功',
                    redirect: 'http://localhost:8081/public/view/404.html'
                }
            } else {
                return {
                    code: 401,
                    msg: '账号或密码错误'
                }
            }
        }

    }
}

export default MockCallback