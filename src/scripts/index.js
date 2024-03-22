import { getUser } from '../services/user.js';
import { getRepositories } from '../services/repos.js';
import { getInputElementValue, handleInputKeyUp } from '../dom.js';
import { user } from '../objects/user.js';
import { screen } from '../objects/screen.js';

const btn = document.getElementById('btn-search');
const input = document.getElementById('input-search');
const list = document.getElementById('list');
const showProfile = document.getElementById('profile-card');

btn.addEventListener('click', () => getInputElementValue());
input.addEventListener('keyup', handleInputKeyUp); //AQUI NÃO CHAMA COMO FUNÇÃO PORQUE SE NÃO TODA VEZ QUE DIGITAR ELA VAI SER CHAMADA

const getUserProfile = async (userName) => {
  const userData = await getUser(userName);

  showProfile.classList.add('profile-data'); //adiciona a classe na div
  list.classList.add('btn-on'); //exibe o botão

  user.setInfo(userData); //passando a informação que chegar de userData para povoar o objeto user

  screen.userProfile = document.querySelector('.profile-data'); //adiciona o seletor para o objeto do arquivo screen
  screen.renderUser(user); //chama a função que contem o html

  const listClickHandler = () => {
    getUserRepos(userName);
    list.removeEventListener('click', listClickHandler); // Remove o event listener após a primeira execução
  };

  list.addEventListener('click', listClickHandler);
};

const getUserRepos = async (userName) => {
  const reposData = await getRepositories(userName);
  let reposItens = [];

  reposData.forEach(repo => {
    reposItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
  });

  document.querySelector('.profile-data').innerHTML +=
    `<div class="repositories section">
    <h2>Repositórios</h2>
    <ul>${reposItens}</ul>
  </div>`
};

export { getUserProfile };