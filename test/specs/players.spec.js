const {expect} = require('chai');
const axios = require('axios');

describe('Get players who have played this hero', function () {

    it('should check data in list of players who have played this hero', async function () {

        const firstPlayer = 0;
        const secondPlayer = 1;
        const passStatusCode = 200;

        const requestParameters = {
            method: 'GET',
            url: 'https://api.opendota.com/api/heroes/1/players',
            json: true
        };

        const response = await axios(requestParameters);

        expect(response.status).to.be.equal(passStatusCode);
        expect(response.data[firstPlayer].games_played).to.be.above(response.data[secondPlayer].games_played);
    });
});