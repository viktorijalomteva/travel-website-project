// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



//*********** WEATHER ***********//
var APPID = '35f6e49e075cdbc26d2c4d0f10755014';
var temp, loc, img, weather;

function updateByZip(zip) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?' + 
        'zip=' + zip + 
        '&APPID=' + APPID;
    sendRequest(url);
};

function updateByGeo(lat, lon) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?' + 
        'lat=' + lat +
        '&lon=' + lon +
        '&APPID=' + APPID;
    sendRequest(url);
};

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.img = data.weather[0].id;
            weather.loc = data.name;
            weather.temp = K2C(data.main.temp);
            update(weather);
        }
    };
    
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
};


function K2C(k) {
    return Math.round(k - 273.15);
};

function K2F(k) {
    return Math.round(k*(9/5)-459.67);
};


function update(weather) {
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
    img.src = 'imgs/codes/' + weather.img + '.png';
};


function showPosition(position) {
    updateByGeo(position.coords.latitude, position.coords.longitude);
};



window.onload = function() {
    temp = document.getElementById('temperature');
    loc = document.getElementById('location');
    img = document.getElementById('weather_img');
    
    
    if(navigator.geolocation){
	   var showPosition = function(position){
           updateByGeo(position.coords.latitude, position.coords.longitude);
	   }
	   navigator.geolocation.getCurrentPosition(showPosition);
    } else {
	   var zip = window.prompt('Could not discover your location. What is your zip code?');
	   updateByZip(zip);
    }

};



//*********** CALCULATOR ***********//
function addItem(){
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("input_add");
  var li = document.createElement("li");
  li.setAttribute('id', candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function removeItem(){
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("input_add");
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}

function showhide() {
    const div = document.getElementById("show_email_after");
    
    if (div.style.display !== "none") {
        div.style.display = "none"
    } else {
        div.style.display = "block";
    }
}


function sumbitText() {
    if (document.getElementById("required_input").value !== "") {
        document.getElementById("submit_thank").textContent = "Thank you! Our administrators will process your options and will contact you as soon as posible!";
    } else {
        return false;
    }
};

function sumbitMessage() {
    if (document.getElementById("sumbit-message").value !== "") {
        document.getElementById("submit_result").textContent = "Thank you! Your message was successfully sent";
    } else {
        return false;
    }
};



// Add new option after user selected "Other"
function check(elem) {
    if (elem.selectedIndex == 5) {
        document.getElementById("other_div").style.display = 'block';
    } else {
         document.getElementById("other_div").style.display = 'none';
    }    
};
 
function check2(elem) {
    if (elem.selectedIndex == 5) {
        document.getElementById("other_div2").style.display = 'block';
    } else {
         document.getElementById("other_div2").style.display = 'none';
    }    
};

function check3(elem) {
    if (elem.selectedIndex == 5) {
        document.getElementById("other_div3").style.display = 'block';
    } else {
         document.getElementById("other_div3").style.display = 'none';
    }    
};