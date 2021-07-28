window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
       setTimeout(function() {
          location.href = "/portfoilio.html";
       }, 10)
    }
  };