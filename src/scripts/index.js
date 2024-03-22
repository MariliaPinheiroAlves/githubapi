const btn = document.getElementById('btn-search');
const input = document.getElementById('input-search');
const list = document.getElementById('list');
const showProfile = document.getElementById('profile-card')

btn.addEventListener('click', () => {
  const userName = document.getElementById('input-search').value;
  return getUserProfile(userName);
});

input.addEventListener('keyup', (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  isEnterKeyPressed ? getUserProfile(userName) : null;
});

const user = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  if (!response.ok) {
    throw new Error
  }

  return response.json();
};

const repos = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}/repos`);
  return response.json();
};

const getUserProfile = async (userName) => {
  const userData = await user(userName);
  showProfile.classList.add('profile-data');
  list.classList.add('btn-on')

  const userInfo =
    `<div class="info">
      <img src="${userData.avatar_url}" alt="Profile photo of ${userData.name}">
      <div class="data">
        <h1>${userData.name ?? 'Usuário sem nome cadastrado'}</h1>
        <p>${userData.bio ?? 'Usuário não possui bio cadastrada'}</p>
        <div class="numbers">
          <div>
            <p class="title">Repositorios</p>
            <p>${userData.public_repos}</p>
          </div>
          <div>
            <p class="title">Seguidores</p>
            <p>${userData.followers}</p>
          </div>
          <div>
            <p class="title">Seguindo</p>
            <p>${userData.following}</p>
          </div>
        </div>
      </div>
  </div>
  `;

  document.querySelector('.profile-data').innerHTML = userInfo

  const listClickHandler = () => {
    getUserRepos(userName);
    list.removeEventListener('click', listClickHandler); // Remove o event listener após a primeira execução
  };

  //list.addEventListener('click', () => console.log('clicou'));

  list.addEventListener('click', listClickHandler);
};

const getUserRepos = async (userName) => {
  const reposData = await repos(userName);
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