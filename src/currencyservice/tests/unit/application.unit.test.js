const { _carry } = require("../../server")

describe('Unit test for _carry', () => {

    test('Addition', () => { 
        const amount = {
            nanos : 10,
            units : 20,
        }

        const x = _carry(amount);

        expect(x).toEqual({
            nanos: 10,
            units: 20
        });
    })
})
