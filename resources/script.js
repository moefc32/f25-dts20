window.onscroll = function scrollFunction() {
  var mybutton = document.getElementById('to-top');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.right = '30px';
  } else {
    mybutton.style.right = '-70px';
  }
}

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return [curtop];
  }
}

const scrollLink = (id)=> {
  var a = document.getElementById(id);
  window.scroll(0, findPos(a) - 120);
  var elm = document.getElementById('menu-toggle');
  if (elm.checked = true) {elm.click();}
}
