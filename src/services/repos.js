import { baseUrl, maxItems } from "../config.js";

const getRepositories = async (userName) => {
  const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${maxItems}`);
  return response.json();
};

export { getRepositories };