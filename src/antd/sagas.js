import { take, put, call, select } from 'redux-saga/effects'
import { get } from './request'

function* login() {
    while(true){
        const mobile = yield take('GET_MOBILE')
        const users = yield call(get)
        const result = users.filter(user => user.mobile == mobile.mobile)

        if(mobile.mobile == result.mobile){
            const pwd = yield take('GET_PASSWORD')
            if(pwd.password == result.password){
                console.log(result)
                yield put({type:'GET_SUCCED',data:result})            
            }
        }
    }
}

export default [login]
