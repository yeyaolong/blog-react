import Mock from 'mockjs';
import $ajaxLogin from '../api/login'
export default {
    startMock () {
        Mock.setup({
            timeout: '1350-1600'
        });

        // 模拟请求数据
        Mock.mock(/\/blog\/login/, 'post', function (options) {
            console.log('mock /\\/blog\\/login/', options);
            return {
                code: 200,
                msg: '登录成功'
            }
        })
    }
}