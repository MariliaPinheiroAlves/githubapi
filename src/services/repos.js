import { baseUrl } from "../config.js";

const getRepositories = async (userName) => {
  const response = await fetch(`${baseUrl}/${userName}/repos`);
  return response.json();
};

export { getRepositories };