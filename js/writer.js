document.addEventListener('DOMContentLoaded', function() {
    const text = 'Quiero invitarte por ser tan especial en mi vida, a celebrar conmigo y junto a mi familia mis quince años de vida.';
    const invitationWriter = document.getElementById('invitation-writer');
    let index = 0;

    function writer() {
        if (index < text.length) {
            invitationWriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(writer, 80); // Ajusta el tiempo para la velocidad de escritura
        }
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkAndStartAnimation() {
        if (isInViewport(invitationWriter)) {
            writer();
            window.removeEventListener('scroll', checkAndStartAnimation);
            window.removeEventListener('resize', checkAndStartAnimation);
            window.removeEventListener('touchstart', checkAndStartAnimation);
        }
    }

    window.addEventListener('scroll', checkAndStartAnimation);
    window.addEventListener('resize', checkAndStartAnimation);
    window.addEventListener('touchstart', checkAndStartAnimation);
    checkAndStartAnimation(); // Check immediately in case the element is already in view
});