var xhttp = new XMLHttpRequest();

var listContainer = document.getElementById("listContainer");
var listItems = document.getElementById("listItems");

var Uname = document.getElementById("name");

var button = document.getElementById("submit");

button.addEventListener("click", checkInput);

function checkInput(e) {
  if (Uname.value != "") {
    xhttp.open("GET", "http://localhost:3000/users?name=" + Uname.value);

    xhttp.onload = function () {
      if (xhttp.readyState === xhttp.DONE) {
        if (xhttp.status === 200) {
          var parsedData = JSON.parse(xhttp.response);
          for (key in parsedData) {
            console.log(
              parsedData[key].name +
                " - " +
                parsedData[key].email +
                " - " +
                parsedData[key].phone +
                " - " +
                parsedData[key].address.street
            );

            createElements(
              parsedData[key].name,
              parsedData[key].email,
              parsedData[key].phone,
              parsedData[key].address.street,
              parsedData[key].address.suite,
              parsedData[key].address.city,
              parsedData[key].address.zipcode,
              parsedData[key].website,
              parsedData[key].company.name
            );
          }
        }
      }
    };

    xhttp.send();
    listContainer.style.display = "block";
    Uname.value = "";
  } else {
    console.log("Empty Input");
  }
  e.preventDefault();
}

function createElements(
  name,
  email,
  phone,
  address,
  suite,
  city,
  zipcode,
  website,
  company
) {
  var Uname = document.getElementById("username");
  var Uemail = document.getElementById("email");
  var Uphone = document.getElementById("phone");
  var Uaddress = document.getElementById("address");
  var Uwebsite = document.getElementById("website");
  var Ucompany = document.getElementById("company");

  Uname.innerText = name;
  Uemail.innerText = email;
  Uphone.innerText = phone;
  Uaddress.innerText = address + " " + suite + " " + city + " " + zipcode;
  Uwebsite.innerText = website;
  Ucompany.innerText = company;
}
