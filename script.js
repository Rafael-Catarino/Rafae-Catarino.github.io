const headerButton = document.querySelector("#header-button");

headerButton.addEventListener('click', () => {
  const navHeader = document.querySelector('#nav-header');
  if (navHeader.classList == 'nav-header-disappear') {
    navHeader.classList.remove('nav-header-disappear');
  } else {
    navHeader.classList = 'nav-header-disappear';
  }
});