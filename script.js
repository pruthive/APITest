var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://localhost:3000/users");

xhttp.onload = function () {
  if (xhttp.readyState === xhttp.DONE) {
    if (xhttp.status === 200) {
      var parsedData = JSON.parse(xhttp.response);

      //console.log(parsedData);
      //console.log(xhttp.responseText);
      for (key in parsedData) {
        if (parsedData.key === 0) {
          console.log(parsedData[key]);
        }
      }
    }
  }
};
xhttp.send(null);
