const frontSwipeCardEl = document.querySelector('.front-card');
const swipeCardEl = document.querySelectorAll('.swipe-card');

// front card animate it to the side
// rest of the cards pull them down by whatever margin and change z-index

function frontCardAnim(cardEl) {
  anime({
    targets: cardEl,
  })
};

frontCardAnim(swipeCardEl)