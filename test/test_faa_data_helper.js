'use strict';

	var chai = require('chai');
	var chaiAsPromised = require('chai-as-promised');
	chai.use(chaiAsPromised);
	var expect = chai.expect;
	var FAADataHelper = require('../faa_data_helper');
	chai.config.includeStack = true;

describe('FAADataHelper', function() {
  var subject = new FAADataHelper();
  var airportCode;
    describe('#getAirportStatus', function(){
      it('returns matching airpot code', function () {
        airportCode = 'SFO';

        var value = subject.requestAirportStatus(airportCode).then(function(object) {
          return object.IATA;
        });

        expect(value).to.eventually.eq(airportCode)
      })
    })
});
