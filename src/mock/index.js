import Mock from 'mockjs';
// import $ajaxLogin from '../api/login'
import MockCallback from './mockCallback'
export default {
    startMock () {
        Mock.setup({
            timeout: '1350-1600'
        });

        // 模拟请求数据
        Mock.mock(/\/blog\/login/, 'post', MockCallback.login)
    }
}