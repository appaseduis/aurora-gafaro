# Aurora Inés Gáfaro Rojas — Sitio web

Sitio estático (HTML5, CSS3 y JavaScript Vanilla) con la trayectoria académica, profesional e investigativa de Aurora Inés Gáfaro Rojas y su Propuesta de Gestión Rectoral 2026-2030 para la Universidad de Pamplona.

## Estructura

```
index.html            Página principal
404.html              Página de error (Vercel la usa automáticamente)
pages/                trayectoria, formacion, investigacion, propuesta
css/                  variables · styles · components · pages · animations · responsive
js/data.js            TODO el contenido (trayectoria, formación, publicaciones, propuesta)
js/main.js            Renderizado de contenido, pestañas, filtros, contadores, footer
js/navigation.js      Menú responsive y página activa
js/proposal.js        Página de propuesta: pilares, acordeones, índice, barra de lectura
js/animations.js      Aparición al hacer scroll (IntersectionObserver)
assets/               imágenes
```

## Editar contenido

Todo el texto de listas está en `js/data.js`. Al cambiar un dato se actualiza en todas las páginas que lo usan.
Los colores y medidas están centralizados en `css/variables.css`.

## Desarrollo local

```bash
npm install
npm run dev      # o: npm run local  →  http://127.0.0.1:5500
```

## Despliegue en Vercel

1. Subir el repositorio a GitHub (sin `node_modules`).
2. En Vercel: **Add New → Project** e importar el repositorio.
3. Configuración: Framework Preset **Other** · Build Command **vacío** · Output Directory **vacío (raíz)** · Install Command **vacío**.
4. Al tener la URL definitiva, reemplazar `https://aurora-gafaro.vercel.app` en `sitemap.xml`, `robots.txt` y en las etiquetas `canonical`/`og:` de cada HTML.

## Pendientes

- Fotografía en mayor resolución (la actual es de 300 × 300 px).
- Versión pública de la hoja de vida en PDF (sin datos personales).
- Nivel de idiomas (inglés y portugués).
- Datos de contacto autorizados.
