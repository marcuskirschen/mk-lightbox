# MK Lightbox
A very simple pure javascript lightbox script for images and videos.

Demo: <https://mkirschen.de/mk-scripts/mk-lightbox/>

## Lightbox for images
To open an image in the lightbox, simply add the class `mklbItem`.
```html
<img class="mklbItem" src="image.jpg" />
```

If a small thumbnail is to be displayed first and a higher-resolution photo is to be loaded into the lightbox, the `data-src` attribute is added.
```html
<img class="mklbItem" src="thumbnail.jpg" data-src="image.jpg" />
```

## Lightbox width image slider
In order to switch between the images in the lightbox, the `data-gallery` attribute must be added with a unique value.
```html
<img class="mklbItem" src="image.jpg" data-gallery="gallery1" />
<img class="mklbItem" src="image2.jpg" data-gallery="gallery1" />
<img class="mklbItem" src="thumbnail3.jpg" data-src="image3.jpg" data-gallery="gallery1" />
```

## Lightbox for mp4 videos
MP4 videos can also be played in the lightbox by adding the `data-video-src` attribute in addition to the `mklbItem` class.
```html
<img class="mklbItem" src="thumbnail.jpg" data-video-src="movie.mp4" />
```
