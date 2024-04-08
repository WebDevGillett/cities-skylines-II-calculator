let finalPrice = 0;
function calculateZoning(inputClass, buildingSize, buildingPrice) {
  let percentValue = document.querySelector(inputClass).value || 0;
  finalPrice += (((percentValue / 100) * (document.querySelector('.map-tile-amount').value * 360000)) / buildingSize) * buildingPrice
}
function finalCalculation() {
  finalPrice = 0;
  calculateZoning('.low-density-percent', 1152, 15000);
  calculateZoning('.beach-property-percent', 1152, 18000);
  calculateZoning('.row-homes-percent', 384, 18000);
  calculateZoning('.medium-density-apartments-percent', 2304, 100000);
  calculateZoning('.low-rent-housing-percent', 2304, 220000);
  calculateZoning('.high-density-residential-percent', 2304, 400000);
  calculateZoning('.mixed-zoning-percent', 2304, 150000);
  calculateZoning('.low-density-commercial-percent', 2304, 22000);
  calculateZoning('.high-density-commercial-percent', 2304, 500000);
  calculateZoning('.industrial-percent', 2304, 50000);
  calculateZoning('.low-density-office-percent', 2304, 40000);
  calculateZoning('.high-density-office-percent', 2304, 700000);
  document.querySelector('.final-amount').innerHTML = `${finalPrice} City Credits`;
}