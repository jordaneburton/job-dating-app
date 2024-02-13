const frontSwipeCardEl = document.querySelector('.front-card');
const swipeCardEl = document.querySelectorAll('.swipe-card');

// front card animate it to the side
// rest of the cards pull them down by whatever margin and change z-index

function setJobCards(cardEl, cardPos) {
  // should take in four cards
  anime({
    targets: cardEl,
    bottom: `${cardPos}rem`,
    'z-index': `-${cardPos}`,
    easing: 'easeInOutExpo',
    keyframes: [
      {opacity: 0},
      {opacity: 100}
    ],

    loop: true,
  })

}

function pullJobDown(cardEl) {
  anime({
    targets: cardEl,
    keyframes: [
      {translateY: '1rem'},
      {'z-index': 3},
      {translateY: '-1rem'},
      {'z-index': -3},
    ],
    easing: 'easeInOutExpo',

    loop: true,
  })
}

// animates and removes job from card queue
function denyJob(cardEl) {
  anime({
    targets: cardEl,
    translateX: '-20rem',
    easing: 'easeInOutExpo',
    opacity: '0',
    background: 'rgb(255,0,0)',

    loop: false,
  })

  // remove card from queue
};

// animates and saves a job to our 'favorite' table
function saveJob(cardEl) {
  anime({
    targets: cardEl,
    translateX: '20rem',
    easing: 'easeInOutExpo',
    opacity: '0',
    background: 'rgb(0,255,0)',
    
    loop: false,
  })

  // save job info to favorite table

  // remove card from queue
};

setJobCards(frontSwipeCardEl, 3)