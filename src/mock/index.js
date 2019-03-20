import Mock from 'mockjs';
// import $ajaxLogin from '../api/login'
import Api from '../api/api'
export default {
    startMock () {
        Mock.setup({
            timeout: '1350-1600'
        });

        // 模拟请求数据
        Mock.mock(/\/blog\/login/, 'post', Api.login)
    }
}