function getInputValue(id) {
  return parseFloat(document.getElementById(id).value);
}

function getBalance(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function calculate(availableBalance, inputAmount, cartBalance, cartTitle, id) {
  if (
    inputAmount < 1 ||
    isNaN(inputAmount) ||
    typeof inputAmount === "string"
  ) {
    alert("Invalid Amount!");
  } else if (availableBalance < inputAmount) {
    alert("Not Enough Balance!");
  } else {
    custom_modal.showModal();
    document.getElementById(id).innerText = cartBalance + inputAmount;
    document.getElementById("available-balance").innerText = (
      availableBalance - inputAmount
    ).toFixed(2);
    history(inputAmount, cartTitle);
  }
}

// history()
function history(inputAmount, cartTitle) {
  const div = document.createElement("div");
  const now = new Date();
  const dateTime = now.toString();
  div.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "md:p-8",
    "p-4",
    "border",

    "rounded-xl"
  );
  div.innerHTML = `
        <h3 class="md:text-xl font-extrabold text-black">
            ${inputAmount} Taka donated to: ${cartTitle}
        </h3>
        <p class="text-text_primary bg-nav_backGround rounded-lg px-4 py-2">Date : 
            ${dateTime}
        </p>   
    `;
  document.getElementById("history-div").appendChild(div);
}
