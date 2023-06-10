import { galleryItems } from "./gallery-items.js";
// Change code below this line
("use strict");
const gallery = document.querySelector(".gallery");
const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>
  </li>`
  )
  .join("");
gallery.innerHTML = markupGallery;
const galleryLarge = galleryItems.map(() => {
  gallery.addEventListener("click", (event) => {
    event.preventDefault();
    const largeImage = event.target.dataset.source;
    openModalWithImage(largeImage);
  });
});
function openModalWithImage(imageUrl) {
  const instance = basicLightbox.create(`<img src="${imageUrl}">`);
  instance.show();
  instance.close();
}

console.log(galleryItems);
