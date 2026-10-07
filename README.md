# Mi Rutina de Entrenamiento

Aplicación web estática para consultar una rutina semanal de cinco días, buscar ejercicios, abrir referencias externas en SmartWorkout y guardar el progreso en el navegador.

El proyecto no requiere instalación, dependencias de Node.js ni un proceso de compilación. Está preparado para publicarse con GitHub Pages mediante GitHub Actions.

## Funcionalidades

- Rutina organizada por día, de lunes a viernes.
- Vista desplegable con series, repeticiones, descanso y tipo de ejercicio.
- Búsqueda por nombre de ejercicio o músculo dentro del día seleccionado.
- Registro local de ejercicios completados y notas mediante `localStorage`.
- Diseño adaptable a dispositivos móviles.
- Compatibilidad automática con el modo oscuro del sistema.
- Enlaces externos a SmartWorkout para consultar material visual.

## Estructura del repositorio

```text
rutina-entrenamiento-smartworkout/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       └── routine-data.js
├── docs/
│   └── KNOWN_LIMITATIONS.md
├── original/
│   └── Rutina_Entrenamiento_CON_SMARTWORKOUT.html
├── .gitignore
├── .nojekyll
├── index.html
└── README.md
```

## Uso local

### Opción rápida

Abre `index.html` directamente en el navegador.

### Opción recomendada

Desde la carpeta raíz del proyecto, inicia un servidor local:

```bash
python -m http.server 8000
```

Después abre:

```text
http://localhost:8000
```

También puedes usar la extensión **Live Server** de Visual Studio Code.

## Publicación en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube el contenido completo de esta carpeta.
3. Verifica que la rama principal se llame `main`.
4. En GitHub, abre **Settings → Pages**.
5. En **Build and deployment → Source**, selecciona **GitHub Actions**.
6. Haz un `push` a `main` o ejecuta manualmente el workflow desde la pestaña **Actions**.

El workflow `.github/workflows/deploy-pages.yml` prepara únicamente `index.html`, `.nojekyll` y la carpeta `assets/` para la publicación.

La URL tendrá normalmente esta forma:

```text
https://TU_USUARIO.github.io/TU_REPOSITORIO/
```

## Modificar la rutina

Los días y ejercicios están en:

```text
assets/js/routine-data.js
```

Cada ejercicio utiliza esta estructura:

```javascript
{
    nombre: "Press plano con barra",
    series: "4",
    reps: "8-10",
    tipo: "Compuesto",
    musculo: "Pectoral mayor",
    smartworkout: "press-de-banca"
}
```

La presentación y el comportamiento se administran por separado:

- `assets/css/styles.css`: estilos visuales y responsividad.
- `assets/js/app.js`: pestañas, búsqueda, tarjetas y almacenamiento local.

## Almacenamiento del progreso

El progreso se guarda en el navegador bajo la clave:

```text
completados
```

Los datos permanecen en el dispositivo y navegador donde se registraron. No se envían a un servidor. Al limpiar los datos del sitio o abrir la aplicación en otro navegador, el progreso no estará disponible.

## Funcionamiento offline

La interfaz, la rutina y el progreso local no dependen de librerías externas. Una vez disponibles los archivos, la aplicación puede abrirse localmente. Los enlaces que llevan a SmartWorkout sí requieren conexión a internet.

## Código original

El archivo recibido sin separar se conserva en `original/` como respaldo y referencia.
