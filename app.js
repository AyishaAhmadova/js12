const rowButton = document.querySelector(".btn");
const tbody = document.querySelector("#tbody");

rowButton.addEventListener("click", () => {
  const row = document.createElement("tr");
  const idTd = document.createElement("td");
  idTd.textContent = tbody.children.length + 1;
  const adTd = createInputTd("text", "Ad...");
  const soyadTd = createInputTd("text", "Soyad...");
  const yasTd = createInputTd("number", "Yaş...");
  const buttonTd = document.createElement("td");
  const saxlaButton = createButton("Yadda saxla", "saxlaBtn", () => {
    adTd.textContent = adTd.querySelector("input").value;
    soyadTd.textContent = soyadTd.querySelector("input").value;
    yasTd.textContent = yasTd.querySelector("input").value;
    replaceButton(
      saxlaButton,
      createButton("Düzəliş et", "duzelisBtn", () => {
        adTd.innerHTML = "";
        soyadTd.innerHTML = "";
        yasTd.innerHTML = "";
        adTd.append(adTd.querySelector("input"));
        soyadTd.append(soyadTd.querySelector("input"));
        yasTd.append(yasTd.querySelector("input"));
        replaceButton(buttonTd, saxlaButton);
      })
    );
  });
  const silButton = createButton("Ləğv et", "silBtn", () => {
    row.remove();
    updateRowIds();
  });

  buttonTd.append(saxlaButton, silButton);
  row.append(idTd, adTd, soyadTd, yasTd, buttonTd);
  tbody.append(row);
});

function createInputTd(type, placeholder) {
  const td = document.createElement("td");
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  td.append(input);
  return td;
}

function createButton(text, className, clickHandler) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = text;
  button.addEventListener("click", clickHandler);
  return button;
}

function replaceButton(oldButton, newButton) {
  oldButton.replaceWith(newButton);
}

function updateRowIds() {
  Array.from(tbody.querySelectorAll("tr")).forEach((row, index) => {
    row.children[0].textContent = index + 1;
  });
}
