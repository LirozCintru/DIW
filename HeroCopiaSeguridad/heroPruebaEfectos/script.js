function changeSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.buttons button');
    const currentSlide = document.querySelector('.slide.active');
    const newSlide = slides[index];

    // Evitar cambios si ya estamos en el slide seleccionado
    if (currentSlide === newSlide) {
        return;
    }

    // Animación de salida: texto e imagen se desplazan y el fondo cambia suavemente
    const currentImage = currentSlide.querySelector('img');
    const newImage = newSlide.querySelector('img');
    const currentText = currentSlide.querySelector('.text');
    const newText = newSlide.querySelector('.text');
    const currentBackground = currentSlide;
    const newBackground = newSlide;

    // Resetear clases previas para asegurar que siempre se ejecuten las animaciones
    currentText.classList.remove('text-enter-top-strong', 'text-exit-left-strong', 'hidden');
    currentImage.classList.remove('image-enter-bottom-strong', 'image-exit-right-strong', 'hidden');
    newText.classList.remove('text-enter-top-strong', 'text-exit-left-strong', 'hidden');
    newImage.classList.remove('image-enter-bottom-strong', 'image-exit-right-strong', 'hidden');

    currentText.classList.add('text-exit-left-strong');
    currentImage.classList.add('image-exit-right-strong');
    currentBackground.classList.add('fade-out-strong');

    // Hacer que el nuevo fondo aparezca mientras el antiguo desaparece
    newBackground.classList.add('fade-in-strong');
    newBackground.style.opacity = "1";
    newBackground.style.zIndex = "2";

    setTimeout(() => {
        // Resetear el estado de la diapositiva actual
        currentSlide.classList.remove('active', 'fade-out-strong');
        currentBackground.style.opacity = "0";
        currentBackground.style.zIndex = "0";

        // Ocultar el texto e imagen completamente antes de la animación de entrada
        currentText.classList.add('hidden');
        currentImage.classList.add('hidden');

        // Resetear la nueva diapositiva a su estado original antes de la animación
        newSlide.classList.remove('fade-in-strong');
        newText.classList.add('hidden');
        newImage.classList.add('hidden');

        // Activar la nueva diapositiva y aplicar la animación de entrada
        newSlide.classList.add('active');
        setTimeout(() => {
            newText.classList.remove('hidden');
            newText.classList.add('text-enter-top-strong');
            newImage.classList.remove('hidden');
            newImage.classList.add('image-enter-bottom-strong');

            newBackground.classList.remove('fade-in-strong');
            newBackground.style.zIndex = "1";
        }, 50);
    }, 500);

    // Actualizar botones
    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}
