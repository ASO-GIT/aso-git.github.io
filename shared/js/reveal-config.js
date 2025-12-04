// Configuración centralizada de Reveal.js para presentaciones UAH
// Universidad de Alcalá - Patrimonio de la Humanidad

Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    center: true,
    touch: true,
    loop: false,
    rtl: false,
    
    // Navegación
    navigationMode: 'default',
    shuffle: false,
    fragments: true,
    fragmentInURL: false,
    embedded: false,
    
    // Presentación
    keyboard: true,
    overview: true,
    disableLayout: false,
    
    // Display
    width: 1280,
    height: 720,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
    
    // Transiciones
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    transitionSpeed: 'default', // default/fast/slow
    backgroundTransition: 'fade',
    
    // Plugins
    plugins: [
        RevealMarkdown,
        RevealHighlight,
        RevealNotes
    ],
    
    // Configuración de Markdown
    markdown: {
        smartypants: true
    },
    
    // Configuración de Highlight
    highlight: {
        highlightOnLoad: true
    },
    
    // Notas del presentador
    showNotes: false // Cambiar a true en modo presentador
});

// Atajos de teclado personalizados
// Nota: La tecla 'S' está reservada para Reveal.js (abre vista del orador)
document.addEventListener('keydown', function(event) {
    // 'F' para pantalla completa
    if (event.key === 'f' || event.key === 'F') {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
});

