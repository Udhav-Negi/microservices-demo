// const grpc = require('grpc');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');



describe('Integration test for CurrencyService', () => {

    let client;
    beforeAll(() => {
        const PORT = 7000;
        const PROTO_PATH = path.join(__dirname, '../../proto/demo.proto');
        const packageDefinition = protoLoader.loadSync(
            PROTO_PATH,
            {
              keepCase: true,
              longs: String,
              enums: String,
              defaults: true,
              oneofs: true
            }
          );

        shopProto = grpc.loadPackageDefinition(packageDefinition);
        client = new shopProto.hipstershop.CurrencyService(
            `localhost:${PORT}`,
            grpc.credentials.createInsecure()
        );

    });

    test('Test case for GetSupportedCurrencies', (done) => {
       client.getSupportedCurrencies({}, (err, response) => {
            if (err) {
                console.log("error:", err);
                done();
            } else {
                expect(response.currency_codes).toEqual(
                    [
                        "EUR", "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "ISK", "NOK", "HRK", "RUB", "TRY", "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR"
                    ]
                );
                done();
            }
        }); 
    });


})