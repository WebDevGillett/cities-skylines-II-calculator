let finalPrice = 0;
function calculateZoning(inputClass, buildingSize, buildingPrice) {
  let percentValue = document.querySelector(inputClass).value || 0;
  finalPrice += Math.ceil((((percentValue / 100) * (document.querySelector('.map-tile-amount').value * 360000)) / buildingSize) * buildingPrice)
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
  finalPrice += tempPrice;
  document.querySelector('.final-amount').innerHTML = `${finalPrice} City Credits`;
}

const specialBuildings = [
  {name: 'Rock Musician Mansion', area: 'US', zoning: 'Residential', price: 40000, image: 'rock-musician-mansion', color: 'black', background: '#0cff08'},
  {name: 'Film Actor Mansion', area: 'US', zoning: 'Residential', price: 60000, image: 'film-actor-mansion', color: 'black', background: '#0cff08'},
  {name: 'Painter Mansion', area: 'US', zoning: 'Residential', price: 50000, image: 'painter-mansion', color: 'black', background: '#0cff08'},
  {name: 'Polaris Suites', area: 'US', zoning: 'Residential', price: 380000, image: 'polaris-suites', color: 'black', background: '#1ea303'},
  {name: 'Rubique Apartments', area: 'US', zoning: 'Residential', price: 200000, image: 'rubique-apartments', color: 'black', background: '#1ea303'},
  {name: 'Gatehouse Residences', area: 'US', zoning: 'Residential', price: 230000, image: 'gatehouse-residence', color: 'black', background: '#1ea303'},
  {name: 'Baltar Pines', area: 'US', zoning: 'Residential', price: 30000, image: 'baltar-pines', color: 'black', background: '#0eba0b'},
  {name: 'Vista Building', area: 'US', zoning: 'Residential', price: 50000, image: 'vista-building', color: 'black', background: '#0eba0b'},
  {name: 'CO10 Condos', area: 'US', zoning: 'Residential', price: 120000, image: 'co10-condos', color: 'black', background: '#238006'},
  {name: 'Watanabe Tower', area: 'US', zoning: 'Residential', price: 1350000, image: 'watanabe-tower', color: 'white', background: '#185703'},
  {name: 'Century Castle', area: 'US', zoning: 'Residential', price: 9000000, image: 'century-castle', color: 'white', background: '#185703'},
  {name: 'Colossal Tower', area: 'US', zoning: 'Residential', price: 7500000, image: 'colossal-tower', color: 'white', background: '#185703'},
  {name: 'Real Estate Agents Mansion', area: 'US', zoning: 'Residential', price: 40000, image: 'real-estate-agents-mansion', color: 'black', background: '#96f20c'},
  {name: 'Architects Mansion', area: 'US', zoning: 'Residential', price: 65000, image: 'architects-mansion', color: 'black', background: '#96f20c'},
  {name: 'Industry Moguls Mansion', area: 'US', zoning: 'Residential', price: 90000, image: 'industry-moguls-mansion', color: 'black', background: '#96f20c'},
  {name: 'Ironpress Building', area: 'US', zoning: 'Mixed', price: 140000, image: 'ironpress-building', color: 'black', background: '#0af2cf'},
  {name: 'Ember Suites', area: 'US', zoning: 'Mixed', price: 800000, image: 'ember-suites', color: 'black', background: '#0af2cf'},
  {name: 'Cane Residences', area: 'US', zoning: 'Mixed', price: 250000, image: 'cane-residences', color: 'black', background: '#0af2cf'},
  {name: 'Streamline Diner', area: 'US', zoning: 'Commerical', price: 15000, image: 'streamline-diner', color: 'black', background: '#0ad3f2'},
  {name: 'Food Station', area: 'US', zoning: 'Commerical', price: 100000, image: 'food-station', color: 'black', background: '#0ad3f2'},
  {name: 'One Stop Station', area: 'US', zoning: 'Commerical', price: 50000, image: 'one-stop-station', color: 'black', background: '#0ad3f2'},
  {name: 'Square Center', area: 'US', zoning: 'Commerical', price: 230000, image: 'square-center', color: 'black', background: '#099cb3'},
  {name: 'The Marvelous Marble', area: 'US', zoning: 'Commerical', price: 300000, image: 'the-marvelous-marble', color: 'black', background: '#099cb3'},
  {name: 'The Capacitor Building', area: 'US', zoning: 'Commerical', price: 400000, image: 'the-capacitor-building', color: 'black', background: '#099cb3'},
  {name: 'Pop Musician Mansion', area: 'EU', zoning: 'Residential', price: 70000, image: 'pop-musician-mansion', color: 'black', background: '#0cff08'},
  {name: 'Theater Actor Mansion', area: 'EU', zoning: 'Residential', price: 70000, image: 'theater-actor-mansion', color: 'black', background: '#0cff08'},
  {name: 'Sculptor Mansion', area: 'EU', zoning: 'Residential', price: 80000, image: 'pop-musician-mansion', color: 'black', background: '#0cff08'},
  {name: 'Corundum Condos', area: 'EU', zoning: 'Residential', price: 800000, image: 'corundom-condos', color: 'black', background: '#1ea303'},
  {name: 'Old Factory Condos', area: 'EU', zoning: 'Residential', price: 1000000, image: 'old-factory-condos', color: 'black', background: '#238006'},
  {name: 'Deuclidia Apartments', area: 'EU', zoning: 'Residential', price: 2500000, image: 'deuclidia-apartments', color: 'white', background: '#185703'},
  {name: 'Vertigo Square', area: 'EU', zoning: 'Residential', price: 80000, image: 'vertigo-square', color: 'black', background: '#0eba0b'},
  {name: 'Constellation Apartments', area: 'EU', zoning: 'Residential', price: 90000, image: 'constellation-apartments', color: 'black', background: '#0eba0b'},
  {name: 'Mollari Palace', area: 'EU', zoning: 'Residential', price: 150000, image: 'mollari-place', color: 'black', background: '#0eba0b'},
  {name: 'Waveform Tower', area: 'EU', zoning: 'Residential', price: 17000000, image: 'waveform-tower', color: 'white', background: '#185703'},
  {name: 'Halo Heights', area: 'EU', zoning: 'Residential', price: 15000000, image: 'halo-heights', color: 'white', background: '#185703'},
  {name: 'The Grass Crown', area: 'EU', zoning: 'Residential', price: 4500000, image: 'the-grass-crown', color: 'white', background: '#185703'},
  {name: 'Extreme Athletes Villa', area: 'EU', zoning: 'Residential', price: 40000, image: 'extreme-athletes-villa', color: 'black', background: '#96f20c'},
  {name: 'Golfers Villa', area: 'EU', zoning: 'Residential', price: 200000, image: 'golfers-villa', color: 'black', background: '#96f20c'},
  {name: 'Royal Villa', area: 'EU', zoning: 'Residential', price: 40000, image: 'royal-villa', color: 'black', background: '#96f20c'},
  {name: 'Epicurean Gardens', area: 'EU', zoning: 'Mixed', price: 500000, image: 'epicurean-gardens', color: 'black', background: '#0af2cf'},
  {name: 'Figura Building', area: 'EU', zoning: 'Mixed', price: 650000, image: 'figura-building', color: 'black', background: '#0af2cf'},
  {name: 'Ludo Square', area: 'EU', zoning: 'Mixed', price: 175000, image: 'ludo-square', color: 'black', background: '#0af2cf'},
  {name: 'Villa City', area: 'EU', zoning: 'Commerical', price: 50000, image: 'villa-city', color: 'black', background: '#0ad3f2'},
  {name: 'Muscle Car Garage', area: 'EU', zoning: 'Commerical', price: 125000, image: 'muscle-car-garage', color: 'black', background: '#0ad3f2'},
  {name: 'Auto Center', area: 'EU', zoning: 'Commerical', price: 250000, image: 'auto-center', color: 'black', background: '#0ad3f2'},
  {name: 'Market Place', area: 'EU', zoning: 'Commerical', price: 100000, image: 'marketplace', color: 'black', background: '#0ad3f2'},
  {name: 'Fashion Square', area: 'EU', zoning: 'Commerical', price: 140000, image: 'fashion-square', color: 'black', background: '#099cb3'},
  {name: 'Activity Plaza', area: 'EU', zoning: 'Commerical', price: 200000, image: 'activity-plaza', color: 'black', background: '#099cb3'},
  {name: 'The Emerald Building', area: 'EU', zoning: 'Commerical', price: 500000, image: 'the-emerald-building', color: 'black', background: '#099cb3'},
  {name: 'Vehicle Factory', area: 'USEU', zoning: 'Industrial', price: 1200000, image: 'vehicle-factory', color: 'black', background: '#ebba1a'},
  {name: 'Ground Earth', area: 'USEU', zoning: 'Industrial', price: 200000, image: 'ground-earth', color: 'black', background: '#ebba1a'},
  {name: 'Dairy House', area: 'USEU', zoning: 'Industrial', price: 90000, image: 'dairy-house', color: 'black', background: '#ebba1a'},
  {name: 'Paper Factory', area: 'USEU', zoning: 'Industrial', price: 800000, image: 'paper-factory', color: 'black', background: '#ebba1a'},
  {name: 'Chemical Plant', area: 'USEU', zoning: 'Industrial', price: 625000, image: 'chemical-plant', color: 'black', background: '#ebba1a'},
  {name: 'Fuel Plant', area: 'USEU', zoning: 'Industrial', price: 500000, image: 'fuel-plant', color: 'black', background: '#ebba1a'},
  {name: 'Switchcon', area: 'USEU', zoning: 'Industrial', price: 1240000, image: 'switchcon', color: 'black', background: '#ebba1a'},
  {name: 'Pharma', area: 'USEU', zoning: 'Industrial', price: 950000, image: 'pharma', color: 'black', background: '#ebba1a'},
  {name: 'Oil Refinery', area: 'USEU', zoning: 'Industrial', price: 1400000, image: 'oil-refinery', color: 'black', background: '#ebba1a'},
  {name: 'Principilis', area: 'USEU', zoning: 'Office', price: 180000, image: 'principilis', color: 'black', background: '#a81aeb'},
  {name: 'Coder Park', area: 'USEU', zoning: 'Office', price: 400000, image: 'coder-park', color: 'black', background: '#a81aeb'},
  {name: 'Incaserium', area: 'USEU', zoning: 'Office', price: 2000000, image: 'incaserium', color: 'black', background: '#a81aeb'},
  {name: 'Multistory Multimedia', area: 'USEU', zoning: 'Office', price: 4000000, image: 'multistory-multimedia', color: 'black', background: '#70119c'},
  {name: 'Waterfall Array', area: 'USEU', zoning: 'Office', price: 7500000, image: 'waterfall-array', color: 'black', background: '#70119c'},
  {name: 'Stylus Tower', area: 'USEU', zoning: 'Office', price: 7000000, image: 'stylus-tower', color: 'black', background: '#70119c'},
];

function loadSpecialBuildings() {
  document.querySelector('.special-buildings-grid').innerHTML = '';
  let grid = '';
  for (i = 0; i < specialBuildings.length; i++) {
    let name = specialBuildings[i].name;
    let area = specialBuildings[i].area;
    let image = specialBuildings[i].image;
    let background = specialBuildings[i].background;
    let color = specialBuildings[i].color;
    grid = `
    <div style="background-color: ${background}; color: ${color};" class="special-building special-building-${i}">
            <img class="special-building-image" src="special-building-images/${image}.jpg">
            <div class="special-building-title-container">
              <p class="special-building-title">${name}</p>
              <img class="flag" src="${area}.png">
            </div>
            <button class="add-item building-button-${i}"
              onclick="addItem(${i});"
            >Add Item</button>
          </div>
    `;
    document.querySelector('.special-buildings-grid').innerHTML += grid;
  }
}

function filterItems() {
  for (i = 0; i < specialBuildings.length; i++) {
    if (specialBuildings[i].name.toLowerCase().includes(document.querySelector('.search-bar').value.toLowerCase())) {
      document.querySelector(`.special-building-${i}`).classList.remove('hide');
    } else {
      document.querySelector(`.special-building-${i}`).classList.add('hide');
    }
  }
}

let tempPrice = 0;

function addItem(i) {
  if (document.querySelector(`.building-button-${i}`).innerHTML === 'Add Item') {
    tempPrice += specialBuildings[i].price;
    document.querySelector(`.building-button-${i}`).innerHTML = 'Remove Item';
    document.querySelector(`.building-button-${i}`).classList.add('remove-item');
  } else {
    tempPrice -= specialBuildings[i].price;
    document.querySelector(`.building-button-${i}`).innerHTML = 'Add Item';
    document.querySelector(`.building-button-${i}`).classList.remove('remove-item');
  }
}

function subscribe() {
  if (document.querySelector('.self-promoted-sub').innerHTML === 'Subscribe') {
    document.querySelector('.self-promoted-sub').innerHTML = 'Subscribed';
    document.querySelector('.self-promoted-sub').classList.add('subscribed');
  } else {
    document.querySelector('.self-promoted-sub').innerHTML = 'Subscribe'
    document.querySelector('.self-promoted-sub').classList.remove('subscribed');
  }
}

loadSpecialBuildings();
