const {expect} = require('chai');
const testData = require('../testData/heroesPerfomans');
const axios = require('axios');

describe('Get stats about hero performance ', function () {


    const passStatusCode = 200;
    let response;

    before(async () => {
        const requestParameters = {
            method: 'GET',
            url: 'https://api.opendota.com/api/heroStats',
            json: true
        };

        response = await axios(requestParameters);
    });

    testData.forEach((arr, index) => {
        it('should check data in list of hero performance', async function () {
            expect(response.status).to.be.equal(passStatusCode);
            expect(response.data[index].roles).to.be.an('array');
            expect(...response.data[index].roles).to.be.equal(...testData[index].roles);
            expect(response.data[index].legs).to.be.equal(testData[index].legs);
            expect(response.data[index].base_health).to.be.equal(testData[index].base_health);
        });
    });
});