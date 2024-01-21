
function submitForm() {
  const params = new URLSearchParams(new FormData(document.getElementById('book1')));
  const firstname = params.get("firstname");
  const lastname = params.get("lastname");
  const Pnumber = params.get("Pnumber");
  const email = params.get("email");
  const address = params.get("adr");
  const countryDropdown = document.getElementById('country-dropdown');
  const selectedCountry = countryDropdown.value;
  const city = params.get("city");
  const state = params.get("state");
  const zip = params.get("zip");
  const adults = params.get("pax");
  const children = params.get("pax1");
  const arrivalDate = params.get("date");
  const departureDate = params.get("date1");
  const cardname = params.get("cname");
  const cardnumber = params.get("ccnum");
  const expmonth = params.get("expmonth");
  const expyear = params.get("expyear");
  const cvv = params.get("cvv");
  const req = params.get("req");



  console.log("First Name: " + firstname);
  console.log("Last Name: " + lastname);
  console.log("Phone number: " + Pnumber);
  console.log("Email address: " + email);
  console.log("Address: " + address);
  console.log("Country: " + selectedCountry);
  console.log("City: " + city);
  console.log("State: " + state);
  console.log("Zip: " + zip);
  console.log("Total Pax: " + (parseInt(adults) + parseInt(children)));
  console.log("Arrival Date: " + arrivalDate);
  console.log("Departure Date: " + departureDate);
  console.log("Card Name: " + cardname);
  console.log("Card Number: " + cardnumber);
  console.log("Expiry Month: " + expmonth);
  console.log("Expiry Year: " + expyear);
  console.log("CVV: " + cvv);
  console.log("req: " + req);


  const url = `trial.html?firstname=${firstname}&lastname=${lastname}&Pnumber=${Pnumber}&email=${email}&address=${address}&country=${selectedCountry}&city=${city}&state=${state}&zip=${zip}&adults=${adults}&children=${children}&arrivalDate=${arrivalDate}&departureDate=${departureDate}&cardname=${cardname}&cardnumber=${cardnumber}&expmonth=${expmonth}&expyear=${expyear}&cvv=${cvv}&req=${req}`;

  window.location.href = url;


}




