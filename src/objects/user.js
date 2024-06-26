const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  publicRepos: '',
  followers: '',
  following: '',
  repositories: [],
  events: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.userName = gitHubUser.login;
    this.publicRepos = gitHubUser.public_repos;
    this.followers = gitHubUser.followers;
    this.following = gitHubUser.following;
  },
  setRepos(repositories) {
    this.repositories = repositories;
  },
  setEvents(events){
    this.events = events
  }
};

export { user };