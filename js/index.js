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
        // if (selectedSeat.length && user.phoneNumber) {
        //     successBooking();
        //   }
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
function handleContinue(){
    console.log(selectedSeat);
    selectedSeat = [];
    console.log(selectedSeat);
}