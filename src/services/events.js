import { baseUrl, maxItems } from "../config.js";

const getEvents = async (userName) => {
  const url = `${baseUrl}/${userName}/events?per_page=${maxItems}`
  const response = await fetch(url);
  const events = await response.json();

  if (events.message === 'Not Found') return;

  const filteredEvents = events.filter(event => {
    return event.type === 'PushEvent' || event.type === 'CreateEvent'
  })
  
  return filteredEvents.slice(0, maxItems)
};

export { getEvents };