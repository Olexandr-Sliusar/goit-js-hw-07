import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const navGalaryEl = document.querySelector('.gallery');

function makeGallery(galleryItems) {
  const galleryItemsMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
                <img  
                  class="gallery__image"
                  src="${preview}" 
                  alt="${description}"
                   />
              </a></li>`;
    })
    .join('');
  return navGalaryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}

makeGallery(galleryItems);
const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
