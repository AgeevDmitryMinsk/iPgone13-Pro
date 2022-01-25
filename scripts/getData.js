console.log(`getData подключён`)
const getData = () => {
    const list = document.querySelector('.cross-sell__list')
    const buttonShowMore = document.querySelector(`.cross-sell__add`)
    console.log(buttonShowMore)


    let stack = 4
    let count = 1

    buttonShowMore.addEventListener(`click`, ()=> {
        //console.log(`buttonShowMore`)
        ++count
            console.log(count)
            fetchData()

    }
    )


    const render = (data) => {
        console.log(data.length)
        list.innerHTML = ``;

        data.forEach((item) => {
            console.log(item)
            list.insertAdjacentHTML(`beforeend`, `
            <li>
    \t\t\t\t\t\t<article class="cross-sell__item">
    \t\t\t\t\t\t\t<img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
    \t\t\t\t\t\t\t<h3 class="cross-sell__title">${item.name}</h3>
    \t\t\t\t\t\t\t<p class="cross-sell__price">${item.price}₽</p>
    \t\t\t\t\t\t\t<button type="button" class="button button_buy cross-sell__button">Купить</button>
    \t\t\t\t\t\t</article>
  \t\t\t\t\t</li>
            `)
        })

    }

    const sliceArray = (data , index) => {
        return  data.slice(0,index)
    }

    const changeData = (data) => {
        render(sliceArray(data, stack*count))
        console.log(data.length, stack*count)
        if (data.length<stack*count) {buttonShowMore.style.display="none"}
      
    }

    //fetch(`https://jsonplaceholder.typicode.com/todos`)

    const fetchData = () => {
        fetch(`/cross-sell-dbase/dbase.json`)
            .then((resp) => {
                //console.log(resp);
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error(` данные получены с ошибкой`)
                }

            })
            .then((data) => {
                changeData(data)
                //render(data)
                //   console.log(data)
            })
            .catch((err) => console.error(err))
        //.finally(()=> console.log(`finally !!!!`))

    }

}

getData()
