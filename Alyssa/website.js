var mobileNav = document.getElementsByClassName('mobile')[0];
var bars = document.getElementById('icon');
var adjust = 0;

function responsive() {   // opens responsive nav bar
  if (adjust == 0) {
    mobileNav.style.animationName = 'left_slide';
    mobileNav.style.display = 'block';

    adjust = 1
  }
  else {
    mobileNav.style.display = 'none';
    adjust = 0
  }
}