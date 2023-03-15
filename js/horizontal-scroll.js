function scrollH(id,pace){
    document.getElementById(id).scrollBy({top:0,left:window.screen.width*pace,behavior: 'smooth'});
    console.log(window.screen.width*pace);
}

//按钮控制

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

let leftTimer;
let rightTimer;
setTimeout(() => {
    leftButton.style.opacity = 0;
}, 800);
setTimeout(() => {
    rightButton.style.opacity = 0;
}, 800);

leftButton.addEventListener('mouseover', () => {
    leftButton.style.opacity = 1;
  });
  
leftButton.addEventListener('mouseout', () => {
    leftButton.style.opacity = 0;
});

rightButton.addEventListener('mouseover', () => {
    rightButton.style.opacity = 1;
  });
  
rightButton.addEventListener('mouseout', () => {
    rightButton.style.opacity = 0;
});