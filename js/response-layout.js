window.addEventListener('load', function() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var singleWorks = document.querySelectorAll('.single-work');
    var containers = document.querySelectorAll('.response-container');
    if (width < height) {
      for (var i = 0; i < singleWorks.length; i++) {
        singleWorks[i].style.width = '48vw';
        singleWorks[i].style.height = '60vw';
      }
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.padding = "0 2vw";
      }

    } else {
      for (var i = 0; i < singleWorks.length; i++) {
        singleWorks[i].style.width = '20vw';
        singleWorks[i].style.height = '24vw';
      }
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.padding = "0 10vw";
      }
    }
  })

  window.addEventListener('resize', function() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var singleWorks = document.querySelectorAll('.single-work');
    var containers = document.querySelectorAll('.response-container');
    if (width < height) {
        for (var i = 0; i < singleWorks.length; i++) {
            singleWorks[i].style.width = '48vw';
            singleWorks[i].style.height = '60vw';
          }
          for (var i = 0; i < containers.length; i++) {
            containers[i].style.padding = "0 2vw";
          }
    } else {
      for (var i = 0; i < singleWorks.length; i++) {
        singleWorks[i].style.width = '20vw';
        singleWorks[i].style.height = '24vw';
      }
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.padding = "0 10vw";
      }
    }
  })