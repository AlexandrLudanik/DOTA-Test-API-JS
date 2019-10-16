const {expect} = require('chai');
const testData = require('../testData/heroes');
const axios = require('axios');

describe('Get hero data', function () {

    it('should check data in list of heroes', async function () {

        const expectedHeroName = testData[0].localized_name;
        const expectedAttackType = testData[34].attack_type;
        const passStatusCode = 200;

        const requestParameters = {
            method: 'GET',
            url: 'https://api.opendota.com/api/heroes',
            json: true
        };

        const response = await axios(requestParameters);

        expect(response.status).to.be.equal(passStatusCode);
        expect(response.data[1].roles).to.be.an('array');
        expect(...response.data[0].roles).to.be.equal(...testData[0].roles);
        expect(response.data[0].localized_name).to.be.equal(expectedHeroName);
        expect(response.data[34].attack_type).to.be.equal(expectedAttackType);
    });
});