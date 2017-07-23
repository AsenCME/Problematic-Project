$('.login-toggle').on('click', function() {
  $('.login-container').stop().addClass('login-active');
});

$('.login-close').on('click', function() {
  $('.login-container').stop().removeClass('login-active');
});
