const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user) {
    this.userProfile.innerHTML =
      `<div class="info">
        <img src="${user.avatarUrl}" alt="Profile photo of ${user.name}">
        <div class="data">
          <h1>${user.name ?? 'Usuário sem nome cadastrado'}</h1>
          <p>${user.bio ?? 'Usuário não possui bio cadastrada'}</p>
          <div class="numbers">
            <div>
              <p class="title">Repositorios</p>
              <p>${user.publicRepos}</p>
            </div>
            <div>
              <p class="title">Seguidores</p>
              <p>${user.followers}</p>
            </div>
            <div>
              <p class="title">Seguindo</p>
              <p>${user.following}</p>
            </div>
          </div>
        </div>
      </div>
      `
    let reposItens = '';
    user.repositories.forEach(repo => {
      reposItens +=
        `<ul class='repo'>
          <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
          <ul class='repos-info'>
            <li>🍴 ${repo.forks}</li>
            <li>⭐ ${repo.watchers}</li>
            <li>👀 ${repo.stargazers_count}</li>  
            <li>💻 ${repo.language ?? ''}</li>
          </ul>
        </ul>`
    });

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML +=
        `<div class="repositories section">
          <h2>Repositórios</h2>
          <div class='repos-container'>${reposItens}</div>
        </div>`
    };

    let events = '';

    user.events.forEach(event => {
      if (event.payload.commits) {
        events +=
          `<ul>
            <li><a href="https://github.com/${event.repo.name}" target="_blank">${event.repo.name}</a></li>
            <li>- ${event.payload.commits[0].message}</li>
          </ul>`
      } else {
        events +=
          `<ul>
            <li><a href="https://github.com/${event.repo.name}" target="_blank">${event.repo.name}</a></li>
            <li>- type of event: ${event.type}</li>
          </ul>`
      }
    });

    if (user.events.length > 0) {
      this.userProfile.innerHTML +=
        `<div class="events section">
          <h2>Eventos</h2>
          ${events}
        </div>`
    };
  },
  renderNotFound() {
    this.userProfile.innerHTML =
      `<div class="not-found">
        <span>404</span>
        <p>Hmm, looks like that page doesn't exist.</p>
      </div>`
  },
};

export { screen };