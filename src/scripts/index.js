import { getUser } from '../services/user.js';
import { getRepositories } from '../services/repos.js';
import { getEvents } from '../services/events.js';
import { getInputElementValue, handleInputKeyUp } from '../dom.js';
import { user } from '../objects/user.js';
import { screen } from '../objects/screen.js';

const btn = document.getElementById('btn-search');
const input = document.getElementById('input-search');

btn.addEventListener('click', () => getInputElementValue());
input.addEventListener('keyup', handleInputKeyUp);

const getUserData = async (userName) => {
  const userData = await getUser(userName);
  const reposData = await getRepositories(userName);
  const eventsData = await getEvents(userName);

  user.setInfo(userData);
  user.setRepos(reposData);
  user.setEvents(eventsData);

  screen.renderUser(user);
};

export { getUserData };