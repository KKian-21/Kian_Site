// ScrollAnimation at the beginning
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal(`.uberContent, 
        .webAngebot,
        .printAngebot`,
{
    origin: 'left',
})

sr.reveal(`.logoAngebot
        `,{
    origin: 'right',
    interval: 100,

})

// Neon Animation

var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 2000],
    duration: anime.random(1000, 3000),
    delay: anime.random(1000, 100),
    loop: 3,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}

var letterEls = document.querySelectorAll('.letter');
for (var i = 0; i < letterEls.length; i++) {
  var letterEl = letterEls[i];
  var offset = anime.setDashoffset(letterEl);
  letterEl.setAttribute('stroke-dashoffset', offset);
   anime({
    targets: letterEl,
    duration: anime.random(0, 1000),
    delay: anime.random(0, 300),
    opacity: [
      { value: 0, duration: anime.random(0, 300) },
    ],
    // loop: true
  });
}

var elemets = document.querySelector('svg').children;





