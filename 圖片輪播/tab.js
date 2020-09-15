function tabCarousel(p_owl, p_id, p_left, p_right) {
    $(p_id + " div.cloned a").attr("tabIndex", "-1");
    $(p_id + " button.owl-dot").attr("tabIndex", "-1");
    $(p_id + ' .owl-item:not(.cloned)').each(function (index) {
        $(this).find('a').focus(function () {
            if (index == 0) {
                p_owl.trigger('stop.owl.autoplay');
                p_owl.trigger('to.owl.carousel', [0]);
            }
        });
    });
    $(p_id + ' .owl-prev').focus(function () {
        p_owl.trigger('stop.owl.autoplay');
    });
    $(p_id + " .owl-next").blur(function () {
        p_owl.trigger('play.owl.autoplay');
    });
    $(p_id + " .carouselPre").attr('aria-label', p_left);
    $(p_id + " .carouselNext").attr('aria-label', p_right);
}