console.log("Welcome to my coding protfolio, I hope you enjoy! Visit Trilby4.com for my design portfolio and see the differences.");
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }