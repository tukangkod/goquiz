var gq = {
    debug: false
};

gq.setup = function() {
    gqd.genFrameId();

    if (this.debug) {
        gqd.show('#debug');
        debug.setup();
    }
};
