'use strict';



(function ($) {
    var timer = 1000;
    $('.section h2').click(function () {
        var $this = $(this);
        var $parent = $this.parent();

        if ($parent.hasClass('show')) {
            $this.next().slideUp(timer);
        } else {

            var $section = $parent.parent().find('.show');
            $section.toggleClass('show');
            $section.children('.info').slideUp(timer);
            $this.next().slideDown(timer);
        }
        $this.parent().toggleClass('show');
    })
})(jQuery);

(function ($) {
    $('.main_button').click(function open() {
        $('.dialog').fadeIn('fast');
    });

    $('.close').click(function close() {
        $('.dialog').fadeOut('slow');
    });

    $('.buttons').click(function cancel() {
        $('.dialog').fadeOut('slow');
        console.log('You chose CANCEL or Ok.');
    });
})(jQuery)