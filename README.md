# 🌸☀️ Invitación Real de Fer

¡Bienvenidos al repositorio de la **Invitación Web de Fernanda**! Este es un proyecto de una página web (Single Page Application) diseñado exclusivamente con un tema festivo, mágico y luminoso, inspirado en el mundo de Rapunzel (Enredados).

## 🚀 Características Principales

- **Diseño Temático "Rapunzel"**: Colores basados en el vestido de la princesa (morados, violetas) y su magia (dorados y amarillos brillantes).
- **Metaetiquetas Open Graph (SEO y Redes)**: Configuradas para generar una elegante tarjeta de visualización al compartir el enlace en aplicaciones como WhatsApp o Facebook.
- **Animaciones CSS Avanzadas**:
  - Pantalla de carga (Splash Screen).
  - Linternas mágicas flotando hacia el cielo.
  - Hojas y confeti cayendo suavemente.
  - Fotografía principal de hero con partículas destellantes (brillos de diamante).
  - Destellos de diamante en la galería de fotos.
  - Bordes giratorios mágicos en las tarjetas de información (`conic-gradient`).
  - Lámpara con efecto de fuego parpadeante y luces de luciérnaga.
  - Fuegos artificiales hiperrealistas (con múltiples sombras escalonadas en CSS) para la explosión final de Despedida.
  - Personajes interactivos (Pascal saltando).
- **Navegación Dinámica**: Botones flotantes (arriba/abajo) para mover al usuario suavemente a través de las distintas secciones.
- **Cuenta Regresiva**: Un contador en vivo (JavaScript Vanilla) configurado para la fecha del gran evento (23 de Mayo de 2026).
- **Totalmente Responsivo**: Adaptable a pantallas de dispositivos móviles, tabletas y computadoras de escritorio mediante *Media Queries*.

## 🛠️ Tecnologías Utilizadas

Este proyecto se desarrolló desde cero, de forma pura y sin utilizar librerías o frameworks pesados externos:
- **HTML5**: Estructura semántica.
- **CSS3**: Variables (Custom Properties), Flexbox, Grid, Animaciones (`@keyframes`), seudoelementos (`::before`, `::after`), filtros (`drop-shadow`).
- **JavaScript (Vanilla)**: Lógica para la cuenta regresiva, la manipulación de la pantalla de bienvenida y el control suave del scroll entre secciones.

## 📂 Estructura del Proyecto

```text
Invitación Fer/
│
├── index.html          # Archivo principal de la estructura web.
├── README.md           # Documentación del proyecto.
│
├── css/
│   └── styles.css      # Todo el diseño visual, variables y animaciones.
│
├── js/
│   └── script.js       # Lógica de la barra de navegación, cuenta regresiva y scroll.
│
└── resources/          # Carpeta destinada (local) a los activos del proyecto.
    ├── hero.jpg
    ├── hero2.png
    ├── bottom.jpg
    ├── fer1.jpeg
    ├── fer2.jpeg
    ├── fer3.jpeg
    ├── party-icon.ico
    ├── pascal.png
    ├── sol-rapunzel.png
    └── ... (y demás imágenes/gráficos)
```

## ⚙️ Cómo Ejecutar el Proyecto

1. **Clonar o descargar** este directorio en tu computadora.
2. Asegúrate de tener todas las imágenes mencionadas en tu carpeta `resources/` para que los fondos y gráficos se visualicen correctamente.
3. Para una correcta ejecución y carga de todos los archivos locales (especialmente si en el futuro agregas *fetch* / módulos JS), puedes usar una simple extensión como **Live Server** en Visual Studio Code.
4. Si no usas un servidor local, basta con arrastrar y soltar el archivo `index.html` en tu navegador moderno preferido (Chrome, Firefox, Edge, Safari).

## ✨ Detalles Adicionales

- **Fuentes**: Utiliza Google Fonts (`Dancing Script` para títulos elegantes y `Quicksand` para textos muy legibles).
- **Separación Neón**: Las secciones cuentan con un hermoso haz de luz neón difuminado en color amarillo, simulando el sol de Corona, dibujado enteramente a través de degradados CSS y sobras drop-shadow.

---
*Creado con mucha magia para el día especial de Fernanda por Jesus Arellano Flores (jarellanof.soporte@gmail.com)*
