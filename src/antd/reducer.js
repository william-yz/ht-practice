import {get} from './request'


const Login = (state = {
    mobile:'',
    password:'',
    msg:''
} , action) =>{
    switch(action.type){
        case 'GET_MOBILE':
            return {mobile:action.mobile,password:action.password}
        case 'GET_PASSWORD':
            return {mobile:action.mobile,password:action.password}
        case 'LOGIN':
            // if(state.msg)
            return
        case 'GET_SUCCED':
            if(state.mobile!=="" && state.password!==""){
                if(state.mobile==action.mobile){
                    if(state.password==action.password){
                        return {msg:'登录成功'}
                    }else{
                        return {msg:'用户名或密码不正确'}
                    }
                }else{
                    return {msg:'用户不存在'}
                }                
            }else if(state.mobile==""){
                return {msg:'请输入手机号'}
            }else{
                return {msg:'请输入密码'}               
            }
        default:
            return state
    }
}

export default Login;