import '../styles/loading.css';

const loading = () => {
  const loadingDiv = document.createElement('div');
  loadingDiv.classList.add('loading')

  const loadingElm = document.createElement('div');
  loadingElm.classList.add('loader');

  loadingDiv.appendChild(loadingElm);

  return loadingDiv;
};

export default loading;