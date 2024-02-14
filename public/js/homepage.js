const frontSwipeCardEl = document.querySelector('.front-card');
let swipeCardEl = document.querySelectorAll('.waiting-card');

const saveJobBtnEl = document.querySelector('#save-job-btn');
const denyJobBtnEl = document.querySelector('#deny-job-btn');

// front card animate it to the side
// rest of the cards pull them down by whatever margin and change z-index

const saveJobHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();
  frontSwipeCardEl.setAttribute('style: z-index', '1');
  saveJob(frontSwipeCardEl);
};

const denyJobHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();
  frontSwipeCardEl.setAttribute('style: z-index', '1');
  denyJob(frontSwipeCardEl);
};

function setJobCard(cardEl, cardPos) {
  // const moveCard = 
  anime({
    targets: cardEl,
    bottom: `${1.5*cardPos}rem`,
    easing: 'easeInOutExpo',
    keyframes: [
      {opacity: 0, 'z-index': `-${cardPos}`},
      {opacity: 100, 'z-index': `-${cardPos}`}
    ],

    loop: false,
  })

}

function pullJobDown(cardEl, cardPos) {
  anime({
    targets: cardEl,
    keyframes: [
      {translateY: '1rem'},
      {'z-index': `-${cardPos}`},
    ],
    easing: 'easeInOutExpo',

    loop: false,
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

async function init() {
  
  const response = await fetch('/api/job', {
    method: 'GET',
  });

  if (response.ok) {
    console.log('successful pull of data');
  } else {
    alert('Failed to get data from server');
  }
  

  let jobPosition = 0;

  // setup and animate card for each jobEl
  for (let i = 3; i >= 0; i--) {
    setJobCard(swipeCardEl[i], i)
  }
}

init();

saveJobBtnEl.addEventListener('click', saveJobHandler);
denyJobBtnEl.addEventListener('click', denyJobHandler);
// saveJob(frontSwipeCardEl)