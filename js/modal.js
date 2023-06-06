(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', backdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    // window.addEventListener('keydown', handle);
  }

  // function handle(e) {
  //   if (e.code === "Escape") {
  //     refs.modal.classList.toggle('is-hidden');
  //     window.removeEventListener('keydown', handle);
  //   }
  // }

  function backdropClick(e) {
    if (e.target !== e.currentTarget) return;
    refs.modal.classList.toggle('is-hidden');
  }

})();