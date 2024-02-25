function Hide() {
    var x = document.getElementById("hide");
    var y = document.getElementById("btn");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.textContent = 'hide'
    } else {
      x.style.display = "none";
      y.textContent = 'show'
    } 
}