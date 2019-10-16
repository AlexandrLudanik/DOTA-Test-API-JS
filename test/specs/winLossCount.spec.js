const {expect} = require('chai');
const testData = require('../testData/heroes');
const axios = require('axios');

describe('Get hero data', function () {

    it('should check data in list of heroes', async function () {

        const steamID = 76561198184675822;
        const win = 0;
        const lose = 0;
        const passStatusCode = 200;

        const requestParameters = {
            method: 'GET',
            url: `https://api.opendota.com/api/players/${steamID}/wl`,
            json: true
        };

        const response = await axios(requestParameters);

        expect(response.status).to.be.equal(passStatusCode);
        expect(response.data.win).to.be.equal(win);
        expect(response.data.lose).to.be.equal(lose);
    });
});