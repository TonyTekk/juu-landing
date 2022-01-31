// Player
$(document).ready(function() {
    var audio = document.getElementById('audio');

    $('#btn_play').on('click', function(event) {
        event.preventDefault();
        $('#btn_pause').css('display', 'block');
        $('#btn_play').css('display', 'none');
        audio.play();
    });

    $('#btn_pause').on('click', function(event) {
        event.preventDefault();
        $('#btn_play').css('display', 'block');
        $('#btn_pause').css('display', 'none');
        audio.pause();
    });
});

// Header menu animation
$(document).ready(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 50;
    var headerHeight = $('header').outerHeight();
    var header = $('header');

    window.addEventListener('scroll', function() { didScroll = true; });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > headerHeight) {
            header.css({ 'top': '-80px', 'background-color':'rgba(0, 0, 0, 0)' });
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                header.css({ 'top': '0', 'background-color':'rgba(0, 0, 0, 0.9)' });
            }
        }

        lastScrollTop = st;
    }
});

// Footer menu animation
$(document).ready(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 50;
    var headerHeight = $('footer').outerHeight();
    var header = $('footer');

    window.addEventListener('scroll', function() { didScroll = true; });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > headerHeight){
            header.css({ 'bottom': '-80px' });
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                header.css({ 'bottom': '0' });
            }
        }

        lastScrollTop = st;
    }
});

// Effects
$(document).ready(function() {

    $(window).scroll( function(){
        $('.__fadeIn').each( function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element - 300){
                $(this).animate({'opacity': '1'}, 1000);
            }
        });
    });


    function reveal() {
        var reveals = document.querySelectorAll('.__reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
});
