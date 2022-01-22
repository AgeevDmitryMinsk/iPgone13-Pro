console.log(`JS подключен`)
function scrolFunc() {


seamless.polyfill();

const links = document.querySelectorAll(`.header-menu__list a`)
const link_characteristics = document.querySelector(`.card-details__link-characteristics`)

const newArray = [...links, link_characteristics]
console.log(newArray)

function smoothyScroll(element) {
    element.addEventListener(`click`, (event)=> {
        console.log(`clicked event`, event)
        event.preventDefault()



        const idHref = element.getAttribute(`href`).substring(1)
        const section = document.getElementById(idHref)
        console.log(`section`, section)


        if (section) {
            console.log(`есть`)
            seamless.elementScrollIntoView( section, {
                behavior: "smooth"
            } )
        }
        else {
            console.log(`нет #`)}
    })

}
newArray.forEach((element) => {
    smoothyScroll(element)
})


}

scrolFunc()



