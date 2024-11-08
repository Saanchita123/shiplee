const cardTitles = document.querySelectorAll('.card-title');

cardTitles.forEach((title) => {
  title.addEventListener('click', () => {
    title.parentElement.classList.toggle('expanded');
  });
});





function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active'); 
    hamburger.classList.toggle('active'); 
}



    window.onscroll = function() {
        const moveToTopButton = document.getElementById("moveToTop");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            moveToTopButton.style.display = "flex";
        } else {
            moveToTopButton.style.display = "none"; 
        }
    };

    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
