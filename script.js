let str = prompt("Введите строку");

function lotOfLetters() {
  if (!isNaN(str)) {
    alert("Это не строка!");
  } else if (str.length > 30) {
    console.log(str.trim().slice(0, 30) + "...");
  } else if (str.length < 30) {
    console.log(str.trim());
  }
}

lotOfLetters();
