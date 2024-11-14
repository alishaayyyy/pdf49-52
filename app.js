
function submitForm() {
 
  var name = document.getElementById("name").value;
  var className = document.getElementById("class").value;
  var age = document.getElementById("age").value;

  document.write("<h3>Submitted Data:</h3>");
  document.write("<p>Name: " + name + "</p>");
  document.write("<p>Class: " + className + "</p>");
  document.write("<p>Age: " + age + "</p>");

  return false;
}


function expand(){
  var all = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium nostrum optio? Expedita, ullam! Error adipisci alias aliquid expedita optio sint debitis, veniam provident dolores libero magni id, tempora doloremque est voluptate incidunt quaerat quo earum. Quibusdam unde nemo quam.";
  document.getElementById("text").innerHTML= all;
}