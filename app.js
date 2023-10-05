const mozik = [
    {
        id: 1, 
        nev: 'Cinema City Arena',
        cim: 'Széchenyi utca 62',
    },
    {
        id: 2, 
        nev: 'Cinema City Allee',
        cim: 'Kelenföldi út 23',
    },
]

const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slider-container article');
const interval = 10000;

let curr = 0;
let prev = 0;

function showSlide() {
  if (curr == 0 || curr == slides.length) {
    curr = 0;
    prev = slides.length-1;
  } else {
    prev = curr-1;
  }

  slides[prev].classList.remove('active'); // Előző kép inaktív
  slides[curr].classList.add('active'); // Új kép aktív

  curr++;

}

showSlide();
let startInterval = setInterval(showSlide, interval);

slider.addEventListener('mouseover', () => {
  clearInterval(startInterval);
  
} );

slider.addEventListener('mouseout', ()=> {
  startInterval = setInterval(showSlide, interval);
  
}
);


//  ez kell a plakát lapozóhoz
//document.querySelector(".rec-innercontainer").setAttribute("style", "transform: translate(-480px, 0)"

