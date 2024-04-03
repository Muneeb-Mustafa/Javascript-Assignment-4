// Lower Case
function lowerCase() {
  let lowerCasetext = document.getElementById("input").value;
  text = lowerCasetext.toLowerCase();
  if (!text) {
    alert("Please enter your text to convert into LowecCase format.");
    return;
  }
  document.getElementById("result").innerHTML = lowerCasetext;
}

// Upper Case
function upperCase() {
  let upperCasetext = document.getElementById("input").value;
  upperCasetext = upperCasetext.toUpperCase();
  if (!upperCasetext) {
    alert("Please enter your text to convert into Uppercase format.");
    return;
  }
  document.getElementById("result").innerHTML = upperCasetext;
}

// Capitalize Case
function capitalize() {
  let text1 = document.getElementById("input").value;
  // text = text.toUpperCase();
  if (!text1) {
    alert("Please enter your text to convert into Capitalize format.");
    return;
  }
  // document.getElementById("result").style.texttransform = "capitalize";
  let text2 = text1.toLowerCase();
  capitalizetext =
    '<span style = "text-transform: capitalize;">' + text2 + "</span>";
  document.getElementById("result").innerHTML = capitalizetext;
}

// Better Formatting
function betterFormatting() {
  let text1 = document.getElementById("input").value;
  // text = text.toUpperCase();
  if (!text1) {
    alert("Please enter your text to convert into better Format.");
    return;
  }
  // document.getElementById("result").style.texttransform = "capitalize";
  let text2 = text1.toLowerCase();
  formatText =
    '<span style = "text-transform: capitalize;">' + text2 + "</span>";
  document.getElementById("result").innerHTML = formatText;
}

// Print name of cities
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];

  document.getElementById("Print_Cities").onclick = function () {
    document.getElementById('result').innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
      document.getElementById("result").innerHTML += (i + 1) + ') ' + cities[i] + "<br>";
    }
  }

// Add Cities in list

function addCity() {
  let city = document.getElementById("input").value;
  if (!city) {
    alert("Please enter your name first!");
    return;
  }
  // let newIndex = cities.length + 1;
  // cities.push(newIndex + ")" + city);
  cities.push(city);
  document.getElementById("result").innerHTML = '<span style = "color: Red; font-size: 20px">' + city + "</span> has been Successfully added in cities.";
} 

// Check Our City in list

function checkCity(){
  let find = document.getElementById("input").value;
  if(find.trim()===''){
    alert("Please enter your name first!")
    return
  }
  const tolowercase = cities.map(city=>city.toLowerCase());
  const tofind = find.toLowerCase();
  if (tolowercase.includes(tofind)){
    document.getElementById("result").innerHTML = find + "is found in the list"
  }else{
    document.getElementById("result").innerHTML = find + "is not found in the list"
    
  }
}

// Find Our name in list

function findWord() {
  let someText = "My name is Muneeb Mustafa. I am a Web Developer";
  someText = someText.toLowerCase();
  let find = document.getElementById("input").value;
  find = find.toLowerCase();
  let findword = someText.indexOf(find);
  if (findword !== -1) {
    alert("Word find at index : " + findword);
  } else {
    alert("Word is not found in your list");
  }
}

// Replace Word in text





function clearInput() {
  document.getElementById("input").value = "";
}

document.getElementById("clear_input").onclick = function () {
  document.getElementById("input").value = "";
};

function clearOutput() {
  document.getElementById("result").innerHTML = "";
}

document.getElementById("clear_output").onclick = function () {
  document.getElementById("result").innerHTML = "";
};
