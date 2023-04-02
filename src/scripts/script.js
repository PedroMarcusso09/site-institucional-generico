function handleModal(){
    const button = document.querySelector("#header__button");
    const modal = document.querySelector('#modal__container')

    button.addEventListener('click', () => {
        
        modal.showModal()
        closeModal()
        
    })

    
}

function closeModal(){
    const button = document.querySelector('#close__modal')
    const modal = document.querySelector('#modal__container')

    button.addEventListener('click', () => {
        modal.close()
    })
}
handleModal()

