function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}


//likes
let pTags = document.getElementsByClassName("like")
let count = []
for (let i = 0; i < pTags.length; i++) {
    count.push(0)
}

function lajkovi(index) {
    count[index] += 1
    pTags[index].innerHTML = count[index]
}