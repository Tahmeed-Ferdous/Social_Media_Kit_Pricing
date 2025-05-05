    // grab all select buttons
    const buttons = document.querySelectorAll('.select-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.add('show');
      });
    });

    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // close if clicking outside content
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });