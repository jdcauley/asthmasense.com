
$('#header-carousel').carousel({
  interval: 4000
});

$('body').scrollspy({ target: '#main-navbar' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

$('.feeds').feeds({
    feeds: {
        feed1: 'http://instagr.am/tags/beatasthma/feed/recent.rss',
    },
     entryTemplate: function(entry) {
        return '<img class="col-xs-3" src="' + entry.link + '">';
    },
     max: 4
     
});

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