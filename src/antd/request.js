
// {mobile, password}

// export default login = (user) => {
//     // return fetch('http://dev11.demo.com:52038/api/v1/users/token', {
        
//     return fetch('http://localhost:3000', {
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify(user)
//     })
//     .then(res => res.json())
// }

export const get = (data) => {
    data = localStorage.getItem('users')
    if(data!=null){
        return JSON.parse(data)
    }else{
        return []
    }
}