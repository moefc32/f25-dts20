window.onscroll = function scrollFunction() {
  var mybutton = document.getElementById('to-top');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.right = '30px';
  } else {
    mybutton.style.right = '-70px';
  }
}

function findPos(item) {
  var curtop = 0;
  if (item.offsetParent) {
    do {
      curtop += item.offsetTop;
    }
    while (item = item.offsetParent);
    return [curtop];
  }
}

const scrollLink = (id)=> {
  var a = document.getElementById(id);
  window.scroll(0, findPos(a) - 120);
  var elm = document.getElementById('menu-toggle');
  if (elm.checked = true) {elm.click();}
}
