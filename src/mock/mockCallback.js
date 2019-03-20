const MockCallback = {
    login: function (options) {
        console.log('mock /\\/blog\\/login/', options);
        return {
            code: 200,
            msg: '登录成功'
        }
    }
}

export default MockCallback