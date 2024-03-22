import { getUserProfile } from "./scripts/index.js";

const handleInputKeyUp = (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    getUserProfile(userName);
  }
};

const getInputElementValue = () => {
  const userName = document.getElementById('input-search').value;
  return getUserProfile(userName);
};

export { getInputElementValue, handleInputKeyUp }