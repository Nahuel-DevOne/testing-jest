import Citas from '../js/classes/Citas';


describe('Probar la clase de Citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Dog',
            telefono: '1166669999',
            fecha: '13-12-2022',
            hora:'10:30',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();

    });


    test('actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Tilo',
            propietario: 'Nahuel',
            telefono: '19030913',
            fecha: '13-12-2022',
            hora:'10:30',
            sintomas: 'Solo juega y pide cariño'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });

});