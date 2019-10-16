const {expect} = require('chai');
const axios = require('axios');

describe('Get list of pro players', function () {

    it('should check that players in list pro players is real pro', async function () {

        const placeOfPlayer = 3;
        const passStatusCode = 200;

        const requestParameters = {
            method: 'GET',
            url: 'https://api.opendota.com/api/proPlayers',
            json: true
        };

        const response = await axios(requestParameters);

        expect(response.status).to.be.equal(passStatusCode);
        expect(response.data[placeOfPlayer].is_pro).to.be.true;
    });
});