/**
goQuiz Display
*/
var gqd = {
    frameIds: []
};


gqd.show = function(t) {
    $(t).show();
};

gqd.hide = function(t) {
    $(t).hide();
};

gqd.showAll = function() {
    $('body div.main').show();
};

gqd.hideAll = function() {
    $('body div.main').hide();
};

gqd.genFrameId = function() {
    $('.frame').each(function(n, t) {
        gqd.frameIds[n] = t.id;
    });
};

gqd.isValidFrameId = function(frameId) {
    cl('isValidFrameId : ' + frameid);
    return true;
};
