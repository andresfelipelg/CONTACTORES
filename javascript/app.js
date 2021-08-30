const formulario = document.querySelector('#formulario');
const btn = document.querySelector('#btn');
const btnBorrar = document.querySelector('#btn-borrar');
const resultado = document.querySelector('#resultado');
const resultado2 = document.querySelector('#resultado2');


const filtrar = ()=>{
resultado.innerHTML = '';
const texto = formulario.value.toUpperCase();
for (const contactor of contactores) {
    let codigo = contactor.codigo .toUpperCase();
    if (codigo.indexOf(texto) !== -1) {
        resultado.innerHTML += `
         <tr>
         <td>${contactor.codigo}</td>
         <td>${contactor.referencia}</td>
         <td>${contactor.voltaje}</td>
         <td>${contactor.bobina}</td>
         <td>${contactor.refeBobina}</td>
         <td>${contactor.alternativa1}</td>
         <td>${contactor.referencia1}</td>
         <td>${contactor.alternativa2}</td>
         <td>${contactor.referencia2}</td>
         </tr>`
    }
}

    if (resultado.innerHTML ==='') {
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'El codigo no existe!!!',
})
    }
}

btn.addEventListener('click',filtrar);
formulario.addEventListener('keyup',(e)=>{
    if (e.keyCode===13) {
        
        filtrar();
    }
});

btnBorrar.addEventListener('click',()=>{
    resultado.innerHTML = '';
    formulario.value.innerHTML ='';
});
