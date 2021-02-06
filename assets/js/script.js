window.addEventListener('load', function() {
  document.querySelector('.help').addEventListener('click', function() {
    document.querySelector('.help-overlay').classList.toggle('help-active');
    document.getElementsByTagName('body')[0].classList.toggle('no-scroll');
  });
});