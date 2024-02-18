window.onload = function() {
    let productNameEdit = document.querySelector('.input-box #productNameEdit');
    let formulario = document.querySelector('#formulario');
    const form = document.querySelector('#formulario form');

    form.productNameEdit.focus();
    const required = {
        productNameEdit:true,
        descriptionEdit: true,
        priceEdit: true,
        categoryEdit: true,
        in_saleEdit: true        
    };
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        for (const key in required){
            const err = document.getElementById(`err-${key}`);
            if (required[key] && !form[key]?.value) {
                form[key].classList.add('is-invalid');
                err.classList.add('alert-warning');
                err.innerText = 'El campo es requerido';
                isValid = false;
            } else {
                form[key].classList.remove('is-invalid');
                err.classList.remove('alert-warning');
                err.innerText = '';
            }
        }

        if(isValid){
            form.submit();
        }
    })
}