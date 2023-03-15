function debounce(func, delay) {
    var timer = null;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
}

window.addEventListener('scroll', debounce(function() {
    var introHeight = document.getElementById('intro').offsetHeight - 50;
    var circle = document.getElementById('circle');
    var name = document.getElementById('name');
    var navPortfolio = document.getElementById('nav-portfolio');
    var navWorks = document.getElementById('nav-works');
    var navAbout = document.getElementById('nav-about');
    if (window.pageYOffset >= introHeight) {
      name.style.color = '#2b00ff';
      circle.style.backgroundColor = '#2b00ff';
      navWorks.style.color = '#2b00ff';
      navPortfolio.style.color = '#2b00ff';
      navAbout.style.color = '#2b00ff';
      
    } else {
        name.style.color = 'white';
        circle.style.backgroundColor = 'white';
        navWorks.style.color = 'white';
        navPortfolio.style.color = 'white';
        navAbout.style.color = 'white';
    }
  }, 0));