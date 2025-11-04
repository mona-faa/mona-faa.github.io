
let searchIcon = document.getElementById("search-icon");
let searchBox = document.getElementById("search-box");
let closeBtn = document.getElementById("close-btn");

searchIcon.addEventListener("click", function () {
  searchBox.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  searchBox.classList.remove("active");
});
//جستجو
let searchIcond = document.getElementById("search-ic");
let searchBoxd = document.getElementById("search-box");
let closeBtnd = document.getElementById("close-btn");

searchIcond.addEventListener("click", function () {
  searchBoxd.classList.add("active");
});

closeBtnd.addEventListener("click", function () {
  searchBoxd.classList.remove("active");
});
//اسلاید ص بزرگ
let left = document.getElementsByClassName("im")[0];
let right = document.getElementsByClassName("im")[1];
let img = document.getElementById("imges");
let conter = 0;
let totals = 5;
right.addEventListener("click", function () {
  conter++;
  if (conter >= 5) {
    conter = 0;
  }
  let cw = img.clientWidth;
  img.style.marginLeft = `-${cw * conter}px`;
});
left.addEventListener("click", function () {
  conter--;
  if (conter < 0) {
    conter = 4;
  }
  let cw = img.clientWidth;
  img.style.marginLeft = `-${cw * conter}px`;
});
setInterval(function () {
  conter++;
  if (conter >= 5) {
    conter = 0;
  }
  let cw = img.clientWidth;
  img.style.marginLeft = `-${cw * conter}px`;
}, 3000);
//نوار که ورق میخوره
let sliderm = document.getElementById("iconSlider");
let slidesm = document.querySelectorAll(".slidem-item");
let next = document.querySelector(".right-n");
let prev = document.querySelector(".left-m");

let indexm = 0;

let totalI = slidesm.length;

next.addEventListener("click", function () {
  indexm += 2;
  if (indexm >= totalI) {
    indexm = 0;
    sliderm.style.transform = `translateX(-${(indexm * 100) / 2}%)`;
  }
  next.style.display = "none";
  prev.style.display = "block";
});

prev.addEventListener("click", function () {
  indexm -= 2;
  if (indexm < 0) {
    indexm = totalI - 2;
    sliderm.style.transform = `translateX(-${(indexm * 100) / 2}%)`;
  }
  prev.style.display = "none";
  next.style.display = "block";
});
//////اسلاید وسط ص
let slidesb = document.querySelector(".slidesb");
let slideItems = document.querySelectorAll(".slideb");
let indexb = 0;
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let dot4 = document.getElementById("dot4");
let dot5 = document.getElementById("dot5");
let dot6 = document.getElementById("dot6");
let dot7 = document.getElementById("dot7");
function goToSlide(n) {
  indexb = n;
  let width = slideItems[0].clientWidth;
  slidesb.style.transform = `translateX(-${width * indexb}px)`;
  updateDots();
}
function updateDots() {
  dot1.classList.remove("active");
  dot2.classList.remove("active");
  dot3.classList.remove("active");
  dot4.classList.remove("active");
  dot5.classList.remove("active");
  dot6.classList.remove("active");
  dot7.classList.remove("active");
  if (indexb === 0) dot1.classList.add("active");
  if (indexb === 1) dot2.classList.add("active");
  if (indexb === 2) dot3.classList.add("active");
  if (indexb === 3) dot4.classList.add("active");
  if (indexb === 4) dot5.classList.add("active");
  if (indexb === 5) dot6.classList.add("active");
  if (indexb === 6) dot7.classList.add("active");
}
dot1.onclick = function () {
  goToSlide(0);
};
dot2.onclick = function () {
  goToSlide(1);
};
dot3.onclick = function () {
  goToSlide(2);
};
dot4.onclick = function () {
  goToSlide(3);
};
dot5.onclick = function () {
  goToSlide(4);
};
dot6.onclick = function () {
  goToSlide(5);
};
dot7.onclick = function () {
  goToSlide(6);
};
setInterval(function () {
  indexb++;
  if (indexb >= slideItems.length) indexb = 0;
  goToSlide(indexb);
}, 2000);
updateDots();
//اسلایدر
let sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  let slides = slider.querySelector(".slides");
  let dots = slider.querySelectorAll(".dots button");
  let total = dots.length;
  let content = 0;
  let time = 3000; // هر ۳ ثانیه اسلاید عوض میشه
  function showSlide(i) {
    if (i >= total) {
      content = 0;
    } else if (i < 0) {
      content = total - 1;
    } else {
      content = i;
    }
    slides.style.transform = `translateX(-${content * 100}%)`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === content);
    });
  }
  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      showSlide(i);
      restartAuto();
    });
  });
  function autoSlide() {
    showSlide(content + 1);
  }
  let slideTimer = setInterval(autoSlide, time);
  function restartAuto() {
    clearInterval(slideTimer);
    slideTimer = setInterval(autoSlide, time);
  }
  showSlide(0);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let down1 = document.getElementById("down1");
let down2 = document.getElementById("down2");
let btn3 = document.getElementById("btn3");
let down3 = document.getElementById("down3");
let btn4 = document.getElementById("btn4");
let down4 = document.getElementById("down4");
let btn5 = document.getElementById("btn5");
let down5 = document.getElementById("down5");

btn1.addEventListener("click", function () {
  down1.classList.toggle("show");
  btn1.classList.toggle("rotate");
});

btn2.addEventListener("click", function () {
  down2.classList.toggle("show");
  btn2.classList.toggle("rotate");
});

btn3.addEventListener("click", function () {
  down3.classList.toggle("show");
  btn3.classList.toggle("rotate");
});
btn4.addEventListener("click", function () {
  down4.classList.toggle("show");
  btn4.classList.toggle("rotate");
});

btn5.addEventListener("click", function () {
  down5.classList.toggle("show");
  btn5.classList.toggle("rotate");
});

let menuBtns = document.getElementById("menu-btn");
let dropdown = document.getElementById("dropdown");

////////////////////////////////////////////////////////////////////////////////////////////////////////// باز و بسته شدن منوی اصلی
menuBtns.addEventListener("click", function () {
  dropdown.classList.toggle("active");
  menuBtns.classList.toggle("bi-x-lg");
  menuBtns.classList.toggle("bi-list");
});
let add11 = document.querySelector(".add1");
let sub11 = document.querySelector(".sub1");
add11.addEventListener("click", function () {
  sub11.classList.toggle("shows");
});

let add22 = document.querySelector(".add2");
let sub22 = document.querySelector(".sub2");
add22.addEventListener("click", function () {
  sub22.classList.toggle("shows");
});

let add33 = document.querySelector(".add3");
let sub33 = document.querySelector(".sub3");
add33.addEventListener("click", function () {
  sub33.classList.toggle("shows");
});

let add10 = document.querySelector(".add10");
let sub10 = document.querySelector(".sub10");
add10.addEventListener("click", function () {
  sub10.classList.toggle("shows");
});

let ad1 = document.querySelector(".ad1");
let su1 = document.querySelector(".su1");
let ad2 = document.querySelector(".ad2");
let su2 = document.querySelector(".su2");
let ad5 = document.querySelector(".ad5");
let su5 = document.querySelector(".su5");
let ad6 = document.querySelector(".ad6");
let su6 = document.querySelector(".su6");

ad1.addEventListener("click", function () {
  su1.classList.toggle("showss");
  if (su1.classList.contains("showss")) {
    su2.classList.remove("showss");
    su5.classList.remove("showss");
    su6.classList.remove("showss");
  }
});

ad2.addEventListener("click", function () {
  su2.classList.toggle("showss");
  if (su2.classList.contains("showss")) {
    su1.classList.remove("showss");
    su5.classList.remove("showss");
    su6.classList.remove("showss");
  }
});

ad5.addEventListener("click", function () {
  su5.classList.toggle("showss");
  if (su5.classList.contains("showss")) {
    su1.classList.remove("showss");
    su2.classList.remove("showss");
    su6.classList.remove("showss");
  }
});
ad6.addEventListener("click", function () {
  su6.classList.toggle("showss");
  if (su6.classList.contains("showss")) {
    su1.classList.remove("showss");
    su2.classList.remove("showss");
    su5.classList.remove("showss");
  }
});
