import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryImages = galleryItems
  .map(
    image =>
      `<li class = "gallery__item">
    <a class = "gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt = "${image.description}" title="${image.description}">
    </a>
    </li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryImages);

const lightbox = new SimpleLightbox('.gallery a', { animationSpeed: 250 });

console.log(galleryItems);
