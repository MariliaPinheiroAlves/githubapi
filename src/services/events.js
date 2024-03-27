import { baseUrl, maxItems } from "../config.js";

const getEvents = async (userName) => {
  const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItems}`);
  return response.json();
};

export { getEvents };