document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navlinks = document.querySelector('.nav-links');


    // hamburger.addEventListener('click', () => {
        // navbar.classList.toggle('nav-links--open')
        // hamburger.classList.toggle('hamburger--open');
            // if (navbar.style.display === "none") {
            //   navbar.style.display = "none";
            // } else {
            //   navbar.style.display = "flex";
            // }

     hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('nav-links--active');

  })

  hamburger.addEventListener('click', () => {
    const navlinks = document.querySelector('.nav-links');
        if (navlinks.style.display === "block") {
          navlinks.style.display = "none";
        } else {
          navlinks.style.display = "block";
        }
    })
      
});
