var cl = function(args) { return console.log(args); };

var debug = {};

debug.setup = function() {
    debug.genDebugButton();
    debug.enableClickEvent();
}

debug.clicks = function(t) {
    var frameId = t.data('frameId');
    cl(frameId);
    switch(frameId) {
        case "showall":
            gqd.showAll();
        break;
        case "hideall":
            gqd.hideAll();
        break;
        default:
            if (gqd.isValidFrameId(frameId)) {
                gqd.hideAll();
                gqd.show(frameId);
            }
        break;
    }
};

debug.genDebugButton = function() {
    var d = $('#debugAction'),
        allBtn;

    allBtn = '<input type="button" class="dbtn" data-frame-id="showall" value="Show All" />' +
        '<input type="button" class="dbtn" data-frame-id="hideall" value="Hide All" />';

    d.append('<label for="x">All</label><span id="x">' + allBtn + '</span>');

    if (gqd.frameIds.length > 0) {
        $.each(gqd.frameIds, function(n, id) {
            console.log(n, id);
        })
    } else console.log('empty');
}

debug.enableClickEvent = function() {
    $('#debug input.dbtn').click(function(e) {
        var t = $(this);
        debug.clicks(t);
    });
};
