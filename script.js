document.addEventListener('DOMContentLoaded', function () {
    const addImageBtn = document.getElementById('add-image-btn');
    const gallery = document.getElementById('gallery');
    const imageUrlInput = document.getElementById('image-url');
    const imageTitleInput = document.getElementById('image-title');
    const imageDescriptionInput = document.getElementById('image-description');

    //Función para agregar una nueva imagen a la galería
    function addImage() {
        const imageUrl = imageUrlInput.value; //Agregar imagen
        const imageTitle = imageTitleInput.value; //Agregar titulo
        const imageDescription = imageDescriptionInput.value; //Agregar descripción

        if (imageUrl && imageTitle && imageDescription) {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            galleryItem.innerHTML = `
                <img src="${imageUrl}" alt="${imageTitle}">
                <h3>${imageTitle}</h3>
                <button class="delete-btn">Eliminar</button>
                <button class="details-btn">Ver detalles</button>
            `;

            gallery.appendChild(galleryItem);

            setTimeout(() => {
                galleryItem.classList.add('show');
            }, 10);

            // Limpiar campos de input despues de agregar una imagen
            imageUrlInput.value = '';
            imageTitleInput.value = '';
            imageDescriptionInput.value = '';

            galleryItem.querySelector('.delete-btn').addEventListener('click', () => deleteImage(galleryItem));
            galleryItem.querySelector('.details-btn').addEventListener('click', () => showDetails(imageUrl, imageTitle, imageDescription));
        } else {
            alert("Por favor, completa todos los campos.");
        }
    }

    // Función para eliminar una imagen
    function deleteImage(galleryItem) {
        galleryItem.style.opacity = 0;
        setTimeout(() => {
            gallery.removeChild(galleryItem);
        }, 300);
    }

    // Función para mostrar detalles de la imagen
    function showDetails(imageUrl, imageTitle, imageDescription) {
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        const modalCaption = document.getElementById('modal-caption');

        modal.style.display = "block"; // Muestra el modal
        setTimeout(() => {
            modal.classList.add('show'); // Activa la animación después de un retraso
        }, 10);

        modalImage.src = imageUrl;
        modalCaption.innerHTML = `<strong>${imageTitle}</strong><br><p>${imageDescription}</p>`;
    }

    // Cerrar el modal
    const closeModal = document.getElementById('close-modal');
    closeModal.addEventListener('click', function () {
        const modal = document.getElementById('image-modal');
        modal.classList.remove('show'); // Remueve la clase para la animación de cierre
        setTimeout(() => {
            modal.style.display = "none"; // Esconde el modal después de la animación
        }, 300); // El timing puesto coincide con la duración de la transición en CSS
    });
    
    addImageBtn.addEventListener('click', addImage);
});
