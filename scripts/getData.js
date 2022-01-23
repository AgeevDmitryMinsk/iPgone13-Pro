console.log(`getData подключён`)
const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`).then((resp) => {
        //console.log(resp);
        if (resp.ok) {
            return resp.json()
        } else {
            throw new Error(` данные получены с ошибкой`)
        }

    })
        .then((data) =>
        console.log(data)
    )
        .catch((err)=> console.error(err))
        .finally(()=> console.log(`finally !!!!`))
}

getData()
