
$('#header-carousel').carousel({
  interval: 4000
});

$(".collapse").collapse()
$('#demo-collapse').on('hide.bs.collapse', function () {
  // do something…
  player.stopVideo();
})


$('body').scrollspy({ target: '#main-navbar' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

// AsthmaGram
var feed = new Instafeed({
});
	feed.run();	


$(function() {
    //caches a jQuery object containing the header element
    var header = $(".clearHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass('clearHeader').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('clearHeader');
        }
    });
});
