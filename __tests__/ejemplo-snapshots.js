const cliente = {
    nombre: 'Tony Stark',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Tony Stark', () => {
        expect(cliente).toMatchSnapshot();
    });
});