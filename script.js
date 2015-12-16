document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " W3Schools. All rights reserved.</p>";

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='customers.html'>Data</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"</ul>";

//document.getElementById('textarea').onkeyup = function () {
//  document.getElementById("text_num").innerHTML = this.value.length;
//};

function test(item) {
  document.getElementById("text_num").innerHTML = item.value.length;
};

