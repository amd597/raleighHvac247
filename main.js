

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';

        }else{

            link.style.animation = `navLinkFade 0.5s ease ${index / 5 + .5}s forwards `;

        }
           
        });
        
    burger.classList.toggle('toggle');    
    });    

   
}     
  
navSlide();

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
mybutton.style.display = "none"
window.onscroll = function() {scrollFunction()};
  // console.log(window.onscroll);

function scrollFunction() {
  if (document.body.scrollTop > 500|| document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// var sec = new Date();
// var s = sec.getSeconds;
// console.log(s);

// var logo = document.getElementById("open");

// function myTimer() {

  // if ( s % 2 == 0){
  //   logo.setAttribute("style", "color:white");
  // }else{
  //   logo.setAttribute("style", "color:black");

//   }
   
// }
var logo = document.getElementById("open");
var myVar = setInterval(myFunc, 100);


function myFunc(){
  var d = new Date();
  var sec = d.getSeconds();
 
  if ( sec % 2 == 0){
    
    logo.setAttribute("style", "color:white");
  } else{
    logo.setAttribute("style", "color:black");

  }
}
