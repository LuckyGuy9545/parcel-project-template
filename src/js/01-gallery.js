import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryList = createGalleryItems(galleryItems);

//==добавляем разметку в галерею
galleryRef.insertAdjacentHTML('beforeend', galleryList);

function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
              <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
        })
        .join('');
}

galleryRef.addEventListener('click', onPictureClick);
function onPictureClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }

}

//== подключение SimpleLightBox галереи
const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250 
    });
