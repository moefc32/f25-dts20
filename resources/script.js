var mybutton = document.getElementById("to-top");

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.right = "30px";
  } else {
    mybutton.style.right = "-70px";
  }
}

function scrollLanding() {
  document.querySelector('#landing').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollLesson() {
  document.querySelector('#lesson').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollProfile() {
  document.querySelector('#profile').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollPortfolio() {
  document.querySelector('#portfolio').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollOrganizer() {
  document.querySelector('#organizer').scrollIntoView({
    behavior: 'smooth'
  });
}
