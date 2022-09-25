import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let instance;
const navGalaryEl = document.querySelector('.gallery');

navGalaryEl.addEventListener('click', onClickGalleryElement);

function makeGallery(galleryItems) {
  const galleryItemsMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img  
                    class="gallery__image"
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"/>
                </a>
              </div>`;
    })
    .join('');
  return navGalaryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}

makeGallery(galleryItems);

function onClickGalleryElement(event) {
  event.preventDefault();

  const onClickImg = event.target.nodeName === 'IMG';
  if (!onClickImg) return;

  const { alt } = event.target;
  const source = event.target.dataset.source;

  instance = basicLightbox.create(`<img src="${source}" alt="${alt}" width="800" height="600" />`);
  instance.show();

  navGalaryEl.addEventListener('keydown', onKeyPress);
}

function onKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    instance.close();
    navGalaryEl.removeEventListener('keydown', onKeyPress);
  }
}
