// Hover link image
const link = document.querySelector('.feature__container');
const img = link.querySelector('img');
link.addEventListener('mouseover', () => {
  img.src = 'images/icon-arrow-hover.svg'
});

link.addEventListener('mouseout', () => {
  img.src = 'images/icon-arrow.svg'
});

// Validation Forms 
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="text"]').value;
    const regext = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const span = e.target.querySelector('span');
    const inputText = e.target.querySelector('input[type="text"]')

    // error email
    if (!regext.test(email)) {
      span.classList.add('error');

      console.log(inputText);

      inputText.classList.add('error');
      return;
    }

    span.classList.remove('error');
    inputText.classList.remove('error');
  });
})