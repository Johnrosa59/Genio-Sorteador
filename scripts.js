const selectedButton = document.getElementsByTagName("button");
const inputOne = document.querySelector("#input-one").value;
const inputTwo = document.querySelector("#input-two").value;

function generateARandomNumber() {
  const inputOne = Math.ceil(document.querySelector("#input-one").value);
  const inputTwo = Math.floor(document.querySelector("#input-two").value);

  if (inputOne == "" || inputTwo == "") {
    alert("Preencha os dois campos");
  } else {
    if (inputTwo <= inputOne) {
      alert("O valor no primeiro campo tem que ser menor que o segundo campo");
    } else {
      const result = Math.floor(
        Math.random() * (inputTwo - inputOne + 1) + inputOne
      );

      alert(result);
    }
  }
}

selectedButton[0].addEventListener("click", generateARandomNumber);
