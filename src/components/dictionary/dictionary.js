import "../../scss/styles.scss";
import "../../scss/dictionary.scss";

import { globalDisableСopying, loadHeader, loadFooter } from "../../js/global";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
});
globalDisableСopying();

function getHashFromUrl(url) {
  // Создаем объект URL, чтобы упростить работу с URL
  const parsedUrl = new URL(url);

  // Извлекаем хэш из URL
  const hash = parsedUrl.hash;

  // Проверяем, найден ли хэш и возвращаем его или пустую строку
  return hash ? hash : "";
}
function goBackWithHash(hash) {
  // Если вы хотите установить хеш перед возвратом
  location.hash = hash; // Установите нужный хеш
  // Теперь вернемся назад
  history.back();
}

const btnBack = document.querySelector(".btm-back");
const result = getHashFromUrl(window.location.href);

btnBack.addEventListener("click", function () {
  goBackWithHash(result);
});
