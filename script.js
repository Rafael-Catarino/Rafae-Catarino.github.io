const portfolio = [
  "projetos/jokenpo/index.html",
  "projetos/forca/index.html",
  "projetos/todo-list/index.html"
];

const img = [
  'projetos/jokenpo/fotos/foto-projeto-jokenpo.png',
  'projetos/forca/fotos/foto-projeto-forca.png',
  'projetos/todo-list/fotos/projeto-todo-list-0.png'
];

const divContainerPortfolio = document.querySelector('.div-container-portfolio');
const headerButton = document.querySelector("#header-button");
const ulLinkHeader = document.querySelector("#ul-link-header");

headerButton.addEventListener('click', () => {
  const navHeader = document.querySelector('#nav-header');
  if (navHeader.classList == 'nav-header-disappear') {
    navHeader.classList.remove('nav-header-disappear');
    ulLinkHeader.addEventListener('click', () => {
      navHeader.classList = 'nav-header-disappear';
    });
  } else {
    navHeader.classList = 'nav-header-disappear';
  }
});

const createDivPortfolio = () => {
  const divPortfolio = document.createElement('div');
  divPortfolio.classList = 'div-portfolio';
  return divPortfolio;
}

const createAPortfolio = (i) => {
  const aDivPortfolio = document.createElement('a');
  aDivPortfolio.href = portfolio[i];
  aDivPortfolio.target = '_blank';
  return aDivPortfolio;
}

const createImgDivPortfolio = (i) => {
  const imgDivPortfolio = document.createElement('img');
  imgDivPortfolio.src = img[i];
  return imgDivPortfolio;
}

const createPPortfolio = () => {
  const pPortfolio = document.createElement('p');
  pPortfolio.classList = 'p-portfolio';
  pPortfolio.innerText = 'Feito com HTML, CSS e JavaScript puro';
  return pPortfolio;
}

const constructDivPortfolio = () => {
  for (let i = 0; i < portfolio.length; i++) {
    const divPortfolio = createDivPortfolio();
    const aPortfolio = createAPortfolio(i);
    const imgDivPortfolio = createImgDivPortfolio(i);
    const PPortfolio = createPPortfolio();
    aPortfolio.appendChild(imgDivPortfolio);
    aPortfolio.appendChild(PPortfolio);
    divPortfolio.appendChild(aPortfolio);
    divContainerPortfolio.appendChild(divPortfolio);
  }
}

constructDivPortfolio();