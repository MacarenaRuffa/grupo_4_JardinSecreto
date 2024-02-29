window.onload = function() {
    const form = document.querySelector('#formulario form');

    form.querySelector('#name').focus();

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // se evita que el formulario se envie automaticamente

        let isValid = true;

        const fields = {
            name: 'Nombre del producto',
            description: 'Descripción',
            price: 'Precio',
            categories_id: 'Categoría',
            image: 'Imagen',
            in_sale: 'Estado de oferta'
        };

        // se verifica si los campos estan vacios
        for (const key in fields) {
            const field = form.elements[key];
            const err = document.getElementById(`err-${key}`);

            if (field && err) {
                if (!field.value) {
                    field.classList.add('is-invalid'); // agrega clase de error a los campos vacios
                    err.classList.add('alert-warning');
                    err.innerText = `El campo "${fields[key]}" es requerido`;
                    isValid = false;
                } else {
                    field.classList.remove('is-invalid'); // elimina clase de error si el campo tiene valor
                    err.classList.remove('alert-warning');
                    err.innerText = '';
                }
            } else {
                console.error(`Element with key ${key} not found.`);
            }
        }

        // envia el formulario si todos los campos estan completos
        if (isValid) {
            form.submit();
        }
    });
};