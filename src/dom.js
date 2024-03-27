import { getUserData } from "./scripts/index.js";

const validateEmptyInput = (userName) => {
  if (userName.length === 0) {
    alert('Preencha o campo com o nome do usuário do GitHub');
    return true
  }
}

const handleInputKeyUp = (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
  }
};

const getInputElementValue = () => {
  const userName = document.getElementById('input-search').value;

  if(validateEmptyInput(userName)) return;

  return getUserData(userName);
};

export { getInputElementValue, handleInputKeyUp }