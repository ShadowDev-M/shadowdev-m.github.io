import PhotoSwipeLightBox from '../vendor/photoswipe/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightBox({
   gallery: '.pswp-gallery',
   children: 'a.pswp-link',
   pswpModule: () => import('../vendor/photoswipe/photoswipe.esm.min.js')
});

lightbox.init();