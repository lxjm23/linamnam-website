const Script = () => {
  const hamburger = document.querySelector('.hamburger');
  const navButtons = document.querySelector('.nav-buttons');

  if (hamburger && navButtons) {
    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      navButtons.classList.toggle('active');
    };

    hamburger.addEventListener('click', toggleMenu);

    // Clean up the event listener on component unmount
    return () => {
      hamburger.removeEventListener('click', toggleMenu);
    };
  }
};

export default Script;