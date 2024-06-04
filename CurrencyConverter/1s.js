const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const currency = document.querySelectorAll(".currency select");

const button = document.querySelector("button");
const fromCurr = document.querySelector(".from .select");
const toCurr = document.querySelector(".to .select");
const msg=document.querySelector(".msg");

for (let select of currency) {
  for (let code in countryList) {
    newoption = document.createElement("option");
    newoption.innerText = code;
    newoption.value = code;
    select.append(newoption);
  }
  select.addEventListener("change", (evt) => {
    undateFlag(evt.target);
  });
}
const undateFlag = (element) => {
  let currCode = element.value;
  let countrycode = countryList[currCode];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};
button.addEventListener("click",async(evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `https://v6.exchangerate-api.com/v6/ba0d1e274cbd6ca244817961/latest/${fromCurr.value}`;
  let response=await fetch(URL);
  let data=await response.json();
  let rate=data.conversion_rates[toCurr.value];
  let finalAmount=amtVal*rate;
  msg.innerText=`${amtVal}${fromCurr.value}=${finalAmount}${toCurr.value}`
});
