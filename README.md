# Portafolio — Carlos Ariel Hernández Carrillo

Portafolio personal con estilo **neomorphism**, construido con React + Vite,
animado con **GSAP** y scroll suave con **Lenis**.

## Requisitos

- Node.js 18 o superior
- [pnpm](https://pnpm.io/) instalado (`npm i -g pnpm` si no lo tienes)

## Empezar

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:5173` en tu navegador.

## Compilar para producción

```bash
pnpm build
```

Los archivos listos para publicar quedan en la carpeta `dist/`. Puedes
subir esa carpeta a Vercel, Netlify, GitHub Pages o cualquier hosting
estático.

Para previsualizar el build de producción localmente:

```bash
pnpm preview
```

## Personalizar el contenido

Todo el contenido del CV (nombre, experiencia, educación, habilidades,
teléfono y correo) vive en un solo archivo:

```
src/data/cv.js
```

Edítalo para actualizar tu información sin tocar los componentes.

### Mostrar tus repositorios de GitHub

En `src/data/cv.js`, escribe tu usuario de GitHub en el campo
`githubUsername`:

```js
githubUsername: "tu-usuario-github",
```

La sección "Proyectos" traerá automáticamente tus repositorios públicos
más relevantes desde la API de GitHub (sin necesidad de backend ni de
llaves de API). Si lo dejas vacío, se muestra un aviso indicando cómo
activarlo.

### Cambiar tu foto

Reemplaza el archivo `src/assets/img/carlos.jpg` por tu propia imagen
(mantén el mismo nombre, o actualiza el import en `src/components/Hero.jsx`).

## Estructura del proyecto

```
src/
├── assets/img/       # Foto de perfil
├── components/        # Nav, Hero, About, Experience, Education,
│                       # Skills, Projects, Contact, Footer, Reveal
├── context/            # Proveedor de Lenis (scroll suave) + GSAP ScrollTrigger
├── data/cv.js           # Todo el contenido editable del CV
├── hooks/useLenis.js    # Hooks para controlar el scroll suave
├── App.jsx
└── index.css            # Tokens de diseño y utilidades neomórficas
```

## Stack

- React 19 + Vite
- GSAP (animaciones de entrada y scroll) + ScrollTrigger
- Lenis (scroll suave)
- CSS puro con variables (sin frameworks de estilos)
- pnpm como gestor de paquetes
