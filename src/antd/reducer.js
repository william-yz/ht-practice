// import {get} from './request'

// 记录action带来的状态变化

const Login = (state = {
    mobile:'',
    password:'',
    msg:''
} , action) =>{
    switch(action.type){
        case 'GET_MOBILE':
            return {...state, mobile:action.mobile}
        case 'GET_PASSWORD':
            return {...state, password:action.password}
        case 'MSG':
            return {...state,msg:action.msg}
        default:
            return state
    }
}

export default Login;













