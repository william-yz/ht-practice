import React from 'react'
import { Input, Button } from 'antd'
import {connect} from 'react-redux'

class Login extends React.Component {
    state = {
        mobile: '123',
        password:'123',
        msg:'不能为空'
    }
 
    render = () => {
        const {getMobile,getPwd,login} = this.props
        return (
            <div>
                <Input type='text' onChange={e => getMobile(e.target.value)}/>
                <Input type='password' onChange={e => getPwd(e.target.value)}/>
                <Button onClick={login}>Login</Button>
                <p>{this.props.msg}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    
    return {
        // mobile: state.mobile,
        // password: state.password
        msg:state.msg
    }
}

function mapDispatchToProps(dispatch){

    return {
        getMobile:(mobile) => {
            dispatch({type:'GET_MOBILE',mobile:mobile})
        },
        getPwd:(password) => {
            dispatch({type:'GET_PASSWORD',password:password})
        },
        login:() => {
            dispatch({type:'GET_SUCCED'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
