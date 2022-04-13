console.log('funcionando')

const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')

const toast = document.querySelector('.toast')

formulario.addEventListener('submit', e => {
    console.log('se envio')
    e.preventDefault()

    const datos = new FormData(formulario)

    console.log('campo correo', datos.get('correoCampo'))
    console.log('campo contraseña', datos.get('contraseñaCampo'))
    console.log('campo checkbox', datos.get('checkCampo'))

    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')
    
    window.setTimeout(() => {

        btnEnviar.classList.remove('d-none')
        btnCargando.classList.add('d-none')

        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()

    },2000)

    formulario.reset()
})