const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://sheet.best/api/sheets/c7a77b52-1104-4688-b372-122f8e5322c6', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Rfc": formulario.rfc.value,
            "Saldo": formulario.saldo.value,
            "Edad": formulario.edad.value,
            "Sexo": formulario.sexo.value,
            "Telefono": formulario.telefono.value,
            "Empresa": formulario.empresa.value,
            "Institucion": formulario.imss.value
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
