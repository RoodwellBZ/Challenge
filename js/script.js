iniciarDeteccionEscritura();

function encriptar() {
    const textArea = document.querySelector('.text-area');
    const mensajeArea = document.querySelector('.mensaje');
    const texto = textArea.value;
    if (!esMinuscula(texto)) {
        alert('Error: Solo se permiten letras minúsculas y sin acentos.');
    }else{
        const palabras = texto.split(' ');
    let resultado = '';
    for (let i = 0; i < palabras.length; i++) {
        resultado += encriptarPalabra(palabras[i]);
        if (i < palabras.length - 1) {
            resultado += ' '; 
        }
    }
    mensajeArea.value = resultado; 
    }
}

function desencriptar() {
    const textArea = document.querySelector('.text-area');
    const mensajeArea = document.querySelector('.mensaje');
    const texto = textArea.value;

    if (!esMinuscula(texto)) {
        alert('Error: Solo se permiten letras minúsculas y sin acentos.');
    }else{
        const palabras = texto.split(' '); 
    let resultado = '';
    for (let i = 0; i < palabras.length; i++) {
        resultado += desencriptarPalabra(palabras[i]);
        if (i < palabras.length - 1) {
            resultado += ' '; 
        }
    }

    mensajeArea.value = resultado; 
    }  
}

function encriptarPalabra(palabra) {
    let encriptada = '';
    
    for (let i = 0; i < palabra.length; i++) {
        switch (palabra[i]) {
            case 'a':
                encriptada += 'ai';
                break;
            case 'e':
                encriptada += 'enter';
                break;
            case 'i':
                encriptada += 'imes';
                break;
            case 'o':
                encriptada += 'ober';
                break;
            case 'u':
                encriptada += 'ufat';
                break;
            default:
                encriptada += palabra[i]; 
                break;
        }
    }
    return encriptada;
}

function desencriptarPalabra(palabra) {
    let desencriptada = '';
    let i = 0;
   
    while (i < palabra.length) {
        
        if (palabra[i] === 'a' && palabra[i + 1] === 'i') {
            desencriptada += 'a';
            i += 2; 
        } else if (palabra[i] === 'e' && palabra.substring(i, i + 5) === 'enter') {
            desencriptada += 'e';
            i += 5; 
        } else if (palabra[i] === 'i' && palabra.substring(i, i + 4) === 'imes') {
            desencriptada += 'i';
            i += 4; 
        } else if (palabra[i] === 'o' && palabra.substring(i, i + 4) === 'ober') {
            desencriptada += 'o';
            i += 4; 
        } else if (palabra[i] === 'u' && palabra.substring(i, i + 4) === 'ufat') {
            desencriptada += 'u';
            i += 4; 
        } else {
            desencriptada += palabra[i];
            i++; 
        }
    }
    return desencriptada;
}

function copiar() {
    const mensajeArea = document.querySelector('.mensaje');
    const textArea = document.querySelector('.text-area');
    textArea.value = mensajeArea.value;
    navigator.clipboard.writeText(mensajeArea.value).then(function() {
        console.log('Contenido copiado al portapapeles');
    }).catch(function(err) {
        console.error('No se pudo copiar al portapapeles', err);
    });
}

function esMinuscula(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== texto[i].toLowerCase()) {
            return false; 
        }
    }
    return true;
}

function iniciarDeteccionEscritura() {
    const textarea = document.querySelector('.text-area');
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const divInicial = document.querySelector('.cont-inicial');
    const mensajeArea = document.querySelector('.mensaje');
    const btnCopiar = document.querySelector('.btn-copiar');

    textarea.addEventListener('input', function() {
        if (textarea.value.trim() !== '') {
            console.log('Se está escribiendo en el textarea.');
            
            btnEncriptar.disabled = false;
            btnDesencriptar.disabled = false;
            divInicial.style.display = 'none';
            mensajeArea.style.display = 'block';
            btnCopiar.style.display = 'block';
        } else {
            console.log('El textarea está vacío.');
            btnEncriptar.disabled = true;
            btnDesencriptar.disabled = true;
            divInicial.style.display = 'flex';
            mensajeArea.style.display = 'none';
            btnCopiar.style.display = 'none';
        }
    });
}


