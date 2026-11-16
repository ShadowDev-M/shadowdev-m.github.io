import PhotoSwipeLightBox from '../vendor/photoswipe/photoswipe-lightbox.esm.min.js';
import PhotoSwipeDynamicCaption from '../vendor/photoswipe/photoswipe-dynamic-caption-plugin.esm.min.js';

const lightbox = new PhotoSwipeLightBox({
   gallery: '.pswp-gallery',
   children: 'a.pswp-link',
   pswpModule: () => import('../vendor/photoswipe/photoswipe.esm.min.js')
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
   type: 'auto',
});

lightbox.init();