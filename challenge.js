const form = document.querySelector("form");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const heart = document.getElementById("<3");
const counter = document.getElementById("counter");
const likes = document.querySelector(".likes");
const pause = document.getElementById("pause");
let store = {};
let isPaused = true;

const updateLike = function(id) {
  const li = document.getElementById(id);
  li.innerText = id + " has been liked " + store[id] + " times";
};

form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  console.log("made");
  const newLi = document.createElement("li");
  newLi.innerText = this[0].value;
  document.querySelector("h3").appendChild(newLi);
  this.reset();
});

plus.addEventListener("click", function() {
  counter.innerText = parseInt(counter.innerText) + 1;
});

minus.addEventListener("click", function() {
  if (parseInt(counter.innerText) > 0) {
    counter.innerText = parseInt(counter.innerText) - 1;
  }
});

heart.addEventListener("click", function() {
  const newLi = document.createElement("li");
  newLi.id = counter.innerText;
  if (store[counter.innerText]) {
    store[counter.innerText] += 1;
  } else {
    store[counter.innerText] = 1;
    likes.appendChild(newLi);
    sortList();
  }
  // debugger;

  updateLike(counter.innerText);
});

const sortList = function() {
  const list = Array.from(document.querySelectorAll("ul.likes li"));

  // remove all of ul children
  likes.innerHTML = "";

  const sorted = list.sort(function(a, b) {
    return parseInt(a.id) - parseInt(b.id);
  });
  // append back all the sorted items into ul as children
  sorted.forEach(item => {
    likes.appendChild(item);
  });
};

function increment() {
  if (isPaused) {
    counter.innerText = parseInt(counter.innerText) + 1;
  }
}

const interval = () => {
  setInterval(increment, 1000);
};
document.addEventListener("DOMContentLoaded", interval);

pause.addEventListener("click", function() {
  if (isPaused) {
    minus.setAttribute("disabled", "");
    plus.setAttribute("disabled", "");
    heart.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");
    // form.setAttribute("disabled", "");
    pause.innerText = "resume";
    minus.style.opacity = "0.5";
    plus.style.opacity = "0.5";
    heart.style.opacity = "0.5";
    submit.style.opacity = "0.5";
    isPaused = false;
  } else {
    minus.removeAttribute("disabled");
    plus.removeAttribute("disabled");
    heart.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    pause.innerText = "pause";
    minus.style.opacity = "1.0";
    plus.style.opacity = "1.0";
    heart.style.opacity = "1.0";
    submit.style.opacity = "1.0";
    isPaused = true;
  }
});
