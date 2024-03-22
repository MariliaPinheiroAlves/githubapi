const screen = {
  userProfile: '',
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
      `;
  },
  renderNotFound(){
    document.querySelector('.profile-container').innerHTML = 
      `<div class="not-found">
        <span>404</span>
        <p>Hmm, looks like that page doesn't exist.</p>
      </div>`
  }
};

export { screen };