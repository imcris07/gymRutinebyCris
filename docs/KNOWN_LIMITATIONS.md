# Limitaciones conocidas y puntos por validar

La reorganización separa el HTML, CSS y JavaScript sin cambiar intencionalmente la lógica funcional del archivo original. Antes de publicar una versión definitiva conviene revisar los siguientes puntos:

## 1. Ruta base de SmartWorkout

La URL se construye actualmente con esta base para todos los ejercicios:

```javascript
https://smartworkout.app/es/biblioteca-ejercicios/pecho/
```

Esto significa que los ejercicios de pierna, espalda, brazos y abdomen también utilizan la categoría `pecho`. Se conservó el comportamiento original porque el archivo no incluye la categoría correcta para cada ejercicio. Conviene validar las URL y añadir un campo `categoria` a cada registro.

## 2. Notas de progreso

La nota escrita se almacena al marcar un ejercicio como completado, pero la interfaz original no vuelve a mostrarla después de reconstruir la tarjeta. El dato permanece en `localStorage`, dentro del objeto correspondiente al ejercicio.

## 3. Alcance de la búsqueda

La búsqueda revisa únicamente los ejercicios del día seleccionado. No realiza una búsqueda global en los cinco días.

## 4. Dependencia externa

La aplicación principal puede funcionar con archivos locales, pero el botón para consultar imágenes y videos abre SmartWorkout y requiere conexión a internet.

## 5. Persistencia por navegador

El progreso no se sincroniza entre dispositivos, navegadores o dominios. Al pasar de una ejecución local a GitHub Pages, el navegador considera que se trata de un origen diferente y empieza con otro almacenamiento local.
