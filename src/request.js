export const save = (allData) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const localData = window.localStorage;
            localData.setItem('ToDoList',JSON.stringify(allData))
            resolve({
                result: true
            })
        }, 1000)
    })
}

export const get = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const localData = window.localStorage;
            if(localData.ToDoList !== 'undefined' && localData.length > 0 ){
                resolve({
                    result: JSON.parse(localData.ToDoList)
                })
            }
        }, 1000)
    })
}