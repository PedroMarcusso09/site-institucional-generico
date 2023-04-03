function handleModal() {
    const headerButton = document.querySelector("#header__button");
    const faqBtn = document.querySelector(".faq__btn");
    const modal = document.querySelector('#modal__container');

    headerButton.addEventListener('click', () => {
        modal.showModal();
        closeModal();
    });

    faqBtn.addEventListener('click', () => {
        modal.showModal();
        closeModal();
    });

    function closeModal() {
        const closeButton = document.querySelector('#close__modal');

        closeButton.addEventListener('click', () => {
            modal.close();
        });
    }
}

handleModal();


