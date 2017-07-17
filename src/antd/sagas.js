import { take, put, call, select } from 'redux-saga/effects'
import { get } from './request'

//进行相应动作逻辑判断

// function* mobile() {
//     while(true){
//         const mobile = yield take('GET_MOBILE')
//         const result = yield select(state => state)
//     }
// }

// function* pwd() {
//     while(true){
//         const pwd = yield take('GET_PASSWORD')
//         const result = yield select(state => state)
//     }
// }

function* succed() {
    while(true){
        const data = yield take('GET_SUCCED') //action 不改变state
        // console.log(data)
        const {mobile, password} = yield select(state => state) //getState {mobile: "", password: "", msg: ""}
        console.log(mobile,password)
        if(mobile!=="" && password!==""){ 
            const result = yield call(get)
            const user = result.find(user => mobile===user.mobile) //Array->object  filter->Array->Array
            console.log(user)
            if(user!==undefined){
                if(mobile===user.mobile){
                    if(password === user.password){
                        yield put({type:'MSG',msg:'登录成功'})
                    }else{
                        yield put({type:'MSG',msg:'密码不正确'})
                    }
                }
            }else{
                yield put({type:'MSG',msg:'用户不存在'})
            }
        }else if(mobile===""){
            yield put({type:'MSG',msg:'请输入手机号'})
        }else{
            yield put({type:'MSG',msg:'请输入密码'}) //派发action state改变
        }

    }
}


export default [succed]


        // const users = yield call(get)
        // const result = users.filter(user => user.mobile == mobile.mobile)

        // if(mobile.mobile == result.mobile){
        //     const pwd = yield take('GET_PASSWORD')
        //     if(pwd.password == result.password){
        //         console.log(result)
        //         yield call()         
        //     }
        // }



