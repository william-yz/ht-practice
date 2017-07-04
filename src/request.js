// export const save = (data) => {
//     localStorage.setItem('todolist', JSON.stringify(data))
// }

// export const get = (data) => {
//     data = localStorage.getItem('todolist')
//     if(data!=null){
//         return JSON.parse(data)
//     }else{
//         return []
//     }
// }

export const save = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem('todolist', JSON.stringify(data))
            resolve({
                success: true
            })
        }, 1000)
    })
}

export const get = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = localStorage.getItem('todolist')
            resolve({
                success: true,
                data: result !== null ? JSON.parse(result) : []
            })
        }, 1000)
    })
}