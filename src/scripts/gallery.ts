import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

const lightbox = new PhotoSwipeLightbox({
    gallery: '.pswp-gallery',
    children: 'a',
    bgOpacity: 0.2,
    pswpModule: PhotoSwipe,
});
lightbox.init();