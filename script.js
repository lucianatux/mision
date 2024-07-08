document.addEventListener('DOMContentLoaded', function() {

    function generarNombreAleatorio() {
        const consonantes = 'bcdfghjklmnpqrstvwxyz';
        const vocales = 'aeiou';
        
        function obtenerLetraAleatoria(letras) {
            return letras.charAt(Math.floor(Math.random() * letras.length));
        }

        return obtenerLetraAleatoria(consonantes) +
               obtenerLetraAleatoria(vocales) +
               obtenerLetraAleatoria(vocales) +
               obtenerLetraAleatoria(consonantes) +
               obtenerLetraAleatoria(vocales) +
               obtenerLetraAleatoria(consonantes) +
               obtenerLetraAleatoria(consonantes) +
               obtenerLetraAleatoria(vocales);
    }

    

    const dialogo1 = document.getElementById('dialogo1');
    const dialogo2 = document.getElementById('dialogo2');
    const nombreAmigo = generarNombreAleatorio().toUpperCase();
    dialogo1.textContent = `Hola, soy ${nombreAmigo}, tu amigo del espacio`;

    setTimeout(function() {
        dialogo1.style.display = 'block';
        setTimeout(function() {
            dialogo1.style.display = 'none';
            setTimeout(function() {
                dialogo2.style.display = 'block';
                setTimeout(function() {
                    dialogo2.style.display = 'none';
                }, 8000); // Mostrar por 6 segundos
            }, 1000); // Esperar 1 segundo antes de mostrar el segundo mensaje
        }, 8000); // Mostrar el primer mensaje por 4 segundos
    }, 5000); // Aparecer el primer mensaje después de 5 segundos
});
