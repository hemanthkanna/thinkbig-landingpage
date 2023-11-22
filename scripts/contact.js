const enquiryFormData = []

const openModalButton = document.querySelector('[data-modal-target]');
const closeModelButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const formSection = document.querySelector('.form-section');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const role = document.getElementById('role');
const firstName_error = document.getElementById('firstname-error');
const lastName_error = document.getElementById('lastname-error');
const email_error = document.getElementById('email-error');
const form = document.querySelector('form');


openModalButton.addEventListener('click' , () => {
    const modal = openModalButton.dataset.modalTarget;
    console.log(modal);
    overlay.style.visibility = "visible";
    overlay.style.opacity = 1;
    openModal(modal);
});

closeModelButton.addEventListener('click', () => {
    const modal = openModalButton.dataset.modalTarget;
    console.log(modal);
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
    closeModal(modal);
})



function openModal(modal) {
    if(modal == null) return
    formSection.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal == null) return
    formSection.classList.remove('active');
    overlay.classList.remove('active');
}


function errorMessage() {
    firstName.addEventListener('input', (event) => {
        if (firstName.validity.patternMismatch) {
            firstName_error.textContent = "Please Enter Valid First Name"
        } else {
            firstName_error.textContent = "";
        }
    })

    lastName.addEventListener('input', (event) => {
        if (lastName.validity.patternMismatch) {
            lastName_error.textContent = "Please Enter Valid Last Name"
        } else {
            lastName_error.textContent = "";
        }
    })

    email.addEventListener('input',(event) => {
        if (email.validity.typeMismatch) {
          email_error.textContent = "please enter a valid email";
        } else {
          email_error.textContent = '';
        }
      }) 
    //  (pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    
}

errorMessage();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const EnquiryformEntries = Object.fromEntries(data.entries());
    console.table(EnquiryformEntries);
    enquiryFormData.push(EnquiryformEntries);
    form.reset();
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
    closeModal(modal);
});