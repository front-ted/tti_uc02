document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(function (popoverTriggerEl) {
        new bootstrap.Popover(popoverTriggerEl, {
            sanitize: false, // Permite o uso de HTML
            html: true      // Ativa HTML no conteúdo do popover
        });
    });
});


