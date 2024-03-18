// map js
var canadaPin = $(".canada");
var canadaInfo = $(".canadaInfo");

canadaPin.on("mouseover", displayCanada); //flips the hide or not-hide switch when hovered over
canadaPin.on("mouseout", displayCanada); //flips the hide or not-hide switch when stopped hovering over

function displayCanada(event) {
  event.preventDefault(); //just add this in for good measure even though we're not using forms!
  canadaInfo.toggleClass("hidden"); //toggles the class "hidden" ON and OFF
}

var germanyPin = $(".germany");
var germanyInfo = $(".germanyInfo");

germanyPin.on("mouseover", displayGermany);
germanyPin.on("mouseout", displayGermany);

function displayGermany(event) {
  event.preventDefault();
  germanyInfo.toggleClass("hidden"); 
}

var japanPin = $(".japan");
var japanInfo = $(".japanInfo");

japanPin.on("mouseover", displayJapan);
japanPin.on("mouseout", displayJapan);

function displayJapan(event) {
  event.preventDefault();
  japanInfo.toggleClass("hidden"); 
}

var philippinesPin = $(".philippines");
var philippinesInfo = $(".philippinesInfo");

philippinesPin.on("mouseover", displayPhilippines);
philippinesPin.on("mouseout", displayPhilippines);

function displayPhilippines(event) {
  event.preventDefault();
  philippinesInfo.toggleClass("hidden"); 
}

var madagascarPin = $(".madagascar");
var madagascarInfo = $(".madagascarInfo");

madagascarPin.on("mouseover", displayMadagascar);
madagascarPin.on("mouseout", displayMadagascar);

function displayMadagascar(event) {
  event.preventDefault();
  madagascarInfo.toggleClass("hidden"); 
}

var kenyaPin = $(".kenya");
var kenyaInfo = $(".kenyaInfo");

kenyaPin.on("mouseover", displayKenya);
kenyaPin.on("mouseout", displayKenya);

function displayKenya(event) {
  event.preventDefault();
  kenyaInfo.toggleClass("hidden"); 
}

var srilankaPin = $(".srilanka");
var srilankaInfo = $(".srilankaInfo");

srilankaPin.on("mouseover", displaySrilanka);
srilankaPin.on("mouseout", displaySrilanka);

function displaySrilanka(event) {
  event.preventDefault();
  srilankaInfo.toggleClass("hidden"); 
}

var indiaPin = $(".india");
var indiaInfo = $(".indiaInfo");

indiaPin.on("mouseover", displayIndia);
indiaPin.on("mouseout", displayIndia);

function displayIndia(event) {
  event.preventDefault();
  indiaInfo.toggleClass("hidden"); 
}

var haitiPin = $(".haiti");
var haitiInfo = $(".haitiInfo");

haitiPin.on("mouseover", displayHaiti);
haitiPin.on("mouseout", displayHaiti);

function displayHaiti(event) {
  event.preventDefault();
  haitiInfo.toggleClass("hidden"); 
}
// countdown
const countdown = () => {
  // Specify the date and time we are counting down to.
  const countDate = new Date("Jul 22, 2029 12:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  const textYear = Math.floor(remainingTime /year);
  const textDay = Math.floor((remainingTime % year) / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  document.querySelector(".year").innerText = textYear > 0 ? textYear : 0;
  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};
// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);

/* HOME PAGE POSITIVE NEWS GENERATOR */

// accessing elements from HTML
var button = $('.posNews-btn');
var factContainer = $('.fact-container');

// event listener
button.on("click", positiveFact);

// event handler
function positiveFact(){
  // declare array
  var factList = ["Researchers and startups are moving forward with plans for windows that generate electricity", "Eco-friendly cleaning company Blueland is launching a Twitter service to help users recycle any beauty product—even from its competitors.", "A bill working its way through the Massachusetts state legislature would allow residents to contribute to a UN fund for climate-vulnerable countries when filing their tax returns.", "Mayo Clinic has pledged to reduce its greenhouse gas emissions by 50% within 10 years, a commitment one local environmental activist applauds.", "By focusing on reciprocity and the common good—both for the community and the environment—sea gardening created bountiful food without putting populations at risk of collapse.", "The massive worldwide pouring of concrete as developers densify cities could be transformed, eliminating heat-trapping pollution into the atmosphere, by switching to a new kind of cement created in Colorado — cement that is “grown” by harnessing tiny sea organisms.", "The sites, once a source of greenhouse gases, have a useful feature: They’re wired to the electricity grid. For new ventures like solar farms, that can save a lot of time and money.", "Once mutually wary, farmers and scientists are working jointly to save a key ecosystem -- and an endangered salamander."];

  // stops page from refreshing
  event.preventDefault(); 

  // create a random number
  var random = Math.random()*factList.length;
  console.log(random);

  // makes a random number an integer
  index = Math.floor(random);
  console.log(index);

  // appends the fact to the screen
  factContainer.text(`${factList[index]}`);
}
