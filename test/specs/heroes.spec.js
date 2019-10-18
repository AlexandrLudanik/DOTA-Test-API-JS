const {expect} = require('chai');
const testData = require('../testData/heroes');
const axios = require('axios');

describe('DOTA', async () => {

    const passStatusCode = 200;
    let response;

    before(async () => {
        const requestParameters = {
            method: 'GET',
            url: 'https://api.opendota.com/api/heroes',
            json: true
        };

        response = await axios(requestParameters);
    });

    testData.forEach((arr, index) => {
        it(`should check data for heroes`, () => {
            expect(response.status).to.be.equal(passStatusCode);
            expect(response.data[index].name).to.be.equal(arr.name);
            expect(response.data[index].roles).to.be.an('array');
            expect(...response.data[index].roles).to.be.equal(...testData[index].roles);
            expect(response.data[index].attack_type).to.be.equal(arr.attack_type);
            expect(response.data[index].localized_name).to.be.equal(arr.localized_name);
            expect(response.data[index].primary_attr).to.be.equal(arr.primary_attr);
            expect(response.data[index].legs).to.be.equal(arr.legs);
        });
    })
});