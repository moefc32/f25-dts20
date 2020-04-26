window.onscroll = function scrollFunction() {
  var mybutton = document.getElementById('to-top');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.right = '30px';
  } else {
    mybutton.style.right = '-70px';
  }
}

const scrollLink = (id)=> {
  var a = document.getElementById(id);
  a.scrollIntoView({behavior: 'smooth'});
}
