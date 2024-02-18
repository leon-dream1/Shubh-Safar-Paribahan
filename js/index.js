const allSeats = document.getElementsByClassName("seat");

let selectedSeat = [];
const user = {};

for (const seat of allSeats) {
  seat.addEventListener("click", function (e) {
    const seat = e.target;
    const seatNumber = e.target.innerText;
    if (selectedSeat.includes(seatNumber)) {
      alert("Already Booked");
    } else {
      if (selectedSeat.length < 4) {
        seat.style.backgroundColor = "#1DD100";
        selectedSeat.push(seatNumber);
        setInnerText("totalSeatNumber", -1);
        setInnerText("totalSelectedSeat", 1);
        showAllSelectedSeat(seatNumber);
        updateTotalOrGrandPrice();
        if (selectedSeat.length >= 4) {
          removeDisabledAttribute();
        }
      } else {
        alert("You have Already Booked 4 ticket. Try again later!!!!!!!");
      }
    }
  });
}

function getInnerText(id) {
  return parseInt(document.getElementById(id).innerText);
}
function setInnerText(id, value) {
  const innerTextValue = getInnerText(id);
  document.getElementById(id).innerText = innerTextValue + value;
}

function showAllSelectedSeat(seatNumber) {
  const allSelectedSeatListDiv = document.getElementById("allSelectedSeatList");

  const div = document.createElement("div");
  div.innerHTML = `<div class='flex justify-between'>
    <p>${seatNumber}</p>
    <p>Economy</p>
    <p>550</p>
   </div>
   `;

  allSelectedSeatListDiv.appendChild(div);
}

function updateTotalOrGrandPrice() {
  const totalPrice = getInnerText("total-price");
  setInnerText("total-price", 550);
  setInnerText("grand-total", 550);
}

function updateGrandTotal() {
  const grandTotal = getInnerText("grand-total");
}

function removeDisabledAttribute() {
  document.getElementById("apply-button").removeAttribute("disabled");
  document.getElementById("apply-button").classList.remove("bg-gray-200");
  document.getElementById("apply-button").classList.add("bg-[#1DD100]");
}

document.getElementById("number").addEventListener("change", function (e) {
  user.phoneNumber = e.target.value;
  document.getElementById("number").value = "";
  if (selectedSeat.length) {
    successBooking();
  }
});

function successBooking() {
  document.getElementById("next-button").removeAttribute("disabled");
}
function handleContinue() {
  console.log(selectedSeat);
  selectedSeat = [];
  console.log(selectedSeat);
}

document.getElementById("apply-button").addEventListener("click", function (e) {
  const userTypedCouponCode = document.getElementById("coupon-code").value;
  console.log(userTypedCouponCode);
  if (userTypedCouponCode === "NEW15") {
    handleDiscount("total-price", 0.15,  "discount-price", "grand-total");
  } else if (userTypedCouponCode === "Couple 20") {
    handleDiscount("total-price", 0.2, "discount-price", "grand-total");
  }
  else{
    alert('Invalid Coupon ): Please!!!!Provide a Valid Coupon......................')
    document.getElementById("coupon-code").value = '';
  }
});

function handleDiscount(totalPriceId, discount, discountDivId, grandTotalID) {
  const totalPrice = getInnerText(totalPriceId);
  const discountPrice = totalPrice * discount;
  const discountPriceDiv = document.getElementById(discountDivId);
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="flex justify-between">
  <p class="text-[16px] font-inter font-medium text-[#030712]">
    Discount Price
  </p>
  <p>
    BDT
    <span
      class="text-[16px] font-inter font-medium text-[#030712]"
      >${discountPrice}</span
    >
  </p>
</div>`;
  discountPriceDiv.appendChild(div);
  setInnerText(grandTotalID, -discountPrice);
  document.getElementById('coupon-section').classList.add("hidden");
}
