'use strict';

describe('Service: constant', function () {

    // load the service's module
    //beforeEach(module('ekinoffyApp'));

    

    // load the service's module
    beforeEach(module('ekinoffyTemplate'));

    //instantiate service
    var conf;
    beforeEach(inject(function (_conf_) {
        conf = _conf_;
    }));


    xit('should expose constant values', function () {
        expect(conf.ENV).not.toBeNull();
        expect(conf.VERSION).not.toBeNull();
    });

    xit('should expose api constant values', function () {
        expect(conf.api).not.toBeNull();
        expect(conf.api.BASEURL).not.toBeNull();
    });
});
