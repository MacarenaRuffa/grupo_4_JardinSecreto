window.onload = function() {
    let name = document.querySelector('.input-box #name');
    let formulario = document.querySelector('#formulario');
    const form = document.querySelector('#formulario form');
   
    if (form) {
        form.name.focus();
        const required = {
            name: true,
            email: true,
            password: true,
            pass_confirm: true,
            gender: true
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            for (const key in required) {
                const field = form.querySelector(`[name="${key}"]`);
                const err = document.getElementById(`err-${key}`);
                
                if (required[key] && !field?.value) {
                    field.classList.add('is-invalid');
                    err.classList.add('alert-warning');
                    err.innerText = 'El campo es requerido';
                    isValid = false;
                } else {
                    field.classList.remove('is-invalid');
                    err.classList.remove('alert-warning');
                    err.innerText = '';
                }
            }

            if (isValid) {
                form.submit();
            }
        });
    }
};