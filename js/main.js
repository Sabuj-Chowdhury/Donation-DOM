//Top two Button Of the Document
const donationBtn = document.getElementById("donation-menu-btn");
const historyBtn = document.getElementById("history-menu-btn");

// donation buttons
const cartOneBtn = document.getElementById("cart-one-btn");
const cartTwoBtn = document.getElementById("cart-two-btn");
const cartThreeBtn = document.getElementById("cart-three-btn");

// sections
const donationSec = document.getElementById("donation-section");
const historySec = document.getElementById("history-section");

// cart-1 donation

cartOneBtn.addEventListener("click", function () {
  const availableBalance = getBalance("available-balance");
  const cartOneInput = getInputValue("cart-one-input");
  const cartOneBalance = getBalance("cart-one-balance");
  const cartOneTitle = document.getElementById("cart-one-title").innerText;

  calculate(
    availableBalance,
    cartOneInput,
    cartOneBalance,
    cartOneTitle,
    "cart-one-balance"
  );
  document.getElementById("cart-one-input").value = "";
});

// cart-2 donation
cartTwoBtn.addEventListener("click", function () {
  const availableBalance = getBalance("available-balance");
  const cartTwoInput = getInputValue("cart-two-input");
  const cartTwoBalance = getBalance("cart-two-balance");
  const cartTwoTitle = document.getElementById("cart-two-title").innerText;

  calculate(
    availableBalance,
    cartTwoInput,
    cartTwoBalance,
    cartTwoTitle,
    "cart-two-balance"
  );
  document.getElementById("cart-two-input").value = "";
});

// cart-3 donation
cartThreeBtn.addEventListener("click", function () {
  const availableBalance = getBalance("available-balance");
  const cartThreeInput = getInputValue("cart-three-input");
  const cartThreeBalance = getBalance("cart-three-balance");
  const cartThreeTitle = document.getElementById("cart-three-title").innerText;

  calculate(
    availableBalance,
    cartThreeInput,
    cartThreeBalance,
    cartThreeTitle,
    "cart-three-balance"
  );
  document.getElementById("cart-three-input").value = "";
});

// button controls for color
historyBtn.addEventListener("click", function () {
  donationSec.classList.add("hidden");
  historySec.classList.remove("hidden");

  historyBtn.classList.add("bg-primary_btn_bg", "text-black");
  historyBtn.classList.remove(
    "border-2",
    "border-text_primary",
    "text-text_primary"
  );

  donationBtn.classList.remove("bg-primary_btn_bg", "text-black");
  donationBtn.classList.add(
    "border-2",
    "border-text_primary",
    "text-text_primary"
  );
});

donationBtn.addEventListener("click", function () {
  donationSec.classList.remove("hidden");
  historySec.classList.add("hidden");

  donationBtn.classList.add("bg-primary_btn_bg", "text-black");
  donationBtn.classList.remove(
    "border-2",
    "border-text_primary",
    "text-text_primary"
  );

  historyBtn.classList.remove("bg-primary_btn_bg", "text-black");
  historyBtn.classList.add(
    "border-2",
    "border-text_primary",
    "text-text_primary"
  );
});

// blog

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../blog.html";
});
