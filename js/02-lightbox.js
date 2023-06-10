import { galleryItems } from "./gallery-items.js";
// Change code below this line
("use strict");

console.log(galleryItems);
//Crearea și randarea unui markup pe baza datelor din matricea de date galleryItems și a șablonului de articol furnizat din galerie. Refolosește codul scris din primul exercițiu.
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

//Conectarea scriptului și a stilurilor librăriei folosind CDN service cdnjs. Adaugă link-urile pentru fișierele: simple-lightbox.min.js și simple-lightbox.min.css.
//Inițializarea librăriei după ce elementele galeriei sunt create și adăugate în ul.gallery. Pentru a face acest lucru, citește documentația SimpleLightbox, secțiunile «Usage» și «Markup».
//Caută în documentație secțiunea «Options» și adaugă un text sugestiv imaginei în atributul alt. Textul alternativ va fi poziționat în partea de jos și va apărea la 250 de milisecunde după deschiderea imaginii.
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
