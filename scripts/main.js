let form = document.getElementById("form");
let titleInput = document.getElementById("title");
let encodedTitle = encodeURI(titleInput);
let overlayColor = document.getElementById("overlay");
let image = document.getElementById("image");
let baseURL = image.src;

form.onkeyup = function(e) {
  const newURL = `${baseURL}&txt=${encodeURI(titleInput.value)}&blend=${
    overlayColor.value
  }`;
  document.getElementById("url-result").value = newURL;
  image.src = newURL;
};

function resetChanges() {
  image.src = `${baseURL}`;
}

function applyChanges() {
  let image = document.getElementById("image").src;
  let originalURL =
    "https://assets.imgix.net/examples/butterfly.jpg?txtclr=fff&txtalign=center%2Cmiddle&txtsize=48";
  let imageURL = document.getElementById("url-result").value;
  document.getElementById("image").src = imageURL;
  if (imageURL == "") {
    window.open(originalURL);
  } else {
    window.open(imageURL);
  }
}

function copyText() {
  let copyText = document.getElementById("url-result");
  copyText.select();
  document.execCommand("copy");
}

let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
