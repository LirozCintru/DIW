function changeSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.buttons button');
    const currentSlide = document.querySelector('.slide.active');
    const newSlide = slides[index];

    if (currentSlide === newSlide) return;

    // Animar imágenes flotantes de salida
    const currentImages = currentSlide.querySelectorAll('.floating');
    currentImages.forEach(img => {
        img.classList.add('exit');
    });

    setTimeout(() => {
        currentSlide.classList.remove('active');
        newSlide.classList.add('active');

        // Animar imágenes flotantes de entrada con un pequeño delay para que se note más
        setTimeout(() => {
            const newImages = newSlide.querySelectorAll('.floating');
            newImages.forEach(img => {
                img.classList.add('enter');
                setTimeout(() => img.classList.remove('enter'), 1200);
            });
        }, 200); // Retraso de 200ms antes de que las nuevas imágenes aparezcan

    }, 1000); // Se alarga el tiempo de la animación de salida
}
