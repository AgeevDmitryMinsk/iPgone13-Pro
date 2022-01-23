console.log(`accordeon подключен`)

const accordeon = () => {

    const chItem = document.querySelectorAll(`.characteristics__item`)


    chItem.forEach((elemnt, index) => {

        const chButton = elemnt.querySelector(`.characteristics__title`)

        const changeActiveAccordeon = (elemnt) => {
            const chButton = elemnt.querySelector(`.characteristics__title`)
            const chContent = elemnt.querySelector(`.characteristics__description`)
            if (chContent.classList.contains(`open`)) {
                chContent.style.height = ``

            } else {
                chContent.style.height = chContent.scrollHeight + `px`;
            }

            chContent.classList.toggle(`open`)
            chButton.classList.toggle(`active`)


        }

        chButton.addEventListener(`click`, () => {
            chItem.forEach((closeElement, indexCloseElement) => {
                if ((closeElement.querySelector(`.characteristics__description`).classList.contains(`open`)) && (index !== indexCloseElement)) {
                    changeActiveAccordeon(closeElement)
                }
            })


            changeActiveAccordeon(elemnt)


        })

    })
}

accordeon()
