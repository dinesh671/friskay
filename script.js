const menu = document.querySelector('nav>ul');
const menuBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');

menuBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Fetching form data
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            packs: document.getElementById('packs').value,
            reason: document.getElementById('reason').value
        };

        // Logging form data to the console
        console.log(formData);
    });
