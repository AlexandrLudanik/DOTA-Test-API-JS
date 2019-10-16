const {expect} = require('chai');
const testData = require('../testData/heroesPerfomans');
const axios = require('axios');

describe('Get stats about hero performance ', function () {

    it('should check data in list of hero performance', async function () {

        const expectedHeroLegs = testData[0].legs;
        const expectedHeroHealth = testData[0].base_health;
        const passStatusCode = 200;

        const requestParameters = {
            method: 'GET',
            url: 'https://api.opendota.com/api/heroStats',
            json: true
        };

        const response = await axios(requestParameters);

        expect(response.status).to.be.equal(passStatusCode);
        expect(response.data[2].roles).to.be.an('array');
        expect(...response.data[0].roles).to.be.equal(...testData[0].roles);
        expect(response.data[0].legs).to.be.equal(expectedHeroLegs);
        expect(response.data[0].base_health).to.be.equal(expectedHeroHealth);
    });
});