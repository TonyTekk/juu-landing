
$(document).ready(function () {
    console.log('Start');
/*
    var didScroll;
    var lastScrollTop = 0;
    var delta = 50;
    var headerHeight = $('header').outerHeight();
    var header = $('header');

    window.addEventListener('scroll', function() {
        didScroll = true;
    });

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

            header.css({ 'top': '-80px' });
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                header.css({
                    'top': '0' ,
                //    'background-color':'rgba(0, 0, 0, 0.8)'
                });
            }
        }

        lastScrollTop = st;
    }
    */
});

