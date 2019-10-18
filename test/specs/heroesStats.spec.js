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
            expect(response.data[index].attack_type).to.be.equal(arr.attack_type);
            expect(response.data[index].localized_name).to.be.equal(arr.localized_name);
            expect(response.data[index].primary_attr).to.be.equal(arr.primary_attr);
            expect(response.data[index].base_health_regen).to.be.equal(arr.base_health_regen);
            expect(response.data[index].base_mana).to.be.equal(arr.base_mana);
            expect(response.data[index].base_mana_regen).to.be.equal(arr.base_mana_regen);
            expect(response.data[index].base_armor).to.be.equal(arr.base_armor);
            expect(response.data[index].base_mr).to.be.equal(arr.base_mr);
            expect(response.data[index].base_attack_min).to.be.equal(arr.base_attack_min);
            expect(response.data[index].base_attack_max).to.be.equal(arr.base_attack_max);
            expect(response.data[index].base_str).to.be.equal(arr.base_str);
            expect(response.data[index].base_agi).to.be.equal(arr.base_agi);
            expect(response.data[index].base_int).to.be.equal(arr.base_int);
            expect(response.data[index].str_gain).to.be.equal(arr.str_gain);
            expect(response.data[index].agi_gain).to.be.equal(arr.agi_gain);
            expect(response.data[index].int_gain).to.be.equal(arr.int_gain);
            expect(response.data[index].attack_range).to.be.equal(arr.attack_range);
            expect(response.data[index].projectile_speed).to.be.equal(arr.projectile_speed);
            expect(response.data[index].attack_rate).to.be.equal(arr.attack_rate);
            expect(response.data[index].move_speed).to.be.equal(arr.move_speed);
            expect(response.data[index].turn_rate).to.be.equal(arr.turn_rate);
        });
    });
});