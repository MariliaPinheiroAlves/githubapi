import { baseUrl } from "../config.js";
import { screen } from "../objects/screen.js";

const getUser = async (userName) => {
  const response = await fetch(`${baseUrl}/${userName}`);

  if(response.status === 404) return screen.renderNotFound();

  return response.json();
};

export { getUser };