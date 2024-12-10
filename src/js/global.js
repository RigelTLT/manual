//Отключение от копирования
function prohibit() {
  return false; //предотвращает все эти события
}

export function globalDisableСopying() {
  document.ondragstart = prohibit; //запрещаем перетаскивание
  document.onselectstart = prohibit; //запрещаем выделение
  document.oncontextmenu = prohibit; //запрещаем клик правой кнопкой
  console.log("Отключение копирования.");
  document.addEventListener("keydown", function (event) {
    // Проверяем, нажаты ли Ctrl и S
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault(); // Отключаем стандартное поведение (сохранение страницы)
      console.log("Сохранение отключено.");
    }

    // Проверяем, нажаты ли Ctrl и P
    if (event.ctrlKey && event.key === "p") {
      event.preventDefault(); // Отключаем стандартное поведение (печать страницы)
      console.log("Печать отключена.");
    }
  });
}

export async function loadHeader() {
  const response = await fetch("./components/header/header.html");
  const headerHTML = await response.text();

  const headerElement = document.querySelector(".header");
  if (headerElement) {
    // Проверьте, что элемент найден
    headerElement.innerHTML = headerHTML;
  } else {
    console.error("Элемент с классом 'header' не найден");
  }
}
export async function loadFooter() {
  const response = await fetch("./components/footer/footer.html");
  const headerHTML = await response.text();

  const headerElement = document.querySelector(".footer");
  if (headerElement) {
    // Проверьте, что элемент найден
    headerElement.innerHTML = headerHTML;
  } else {
    console.error("Элемент с классом 'footer' не найден");
  }
}
