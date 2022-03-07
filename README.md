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

**UPDATED**: If the gallery in the lightbox is to run automatically, the `data-auto` attribute must be added to only one element of the gallery with the time in ms between the slides.
```html
<img class="mklbItem" src="thumbnail3.jpg" data-src="image3.jpg" data-gallery="gallery1" data-auto="2000" />
```

## Lightbox for mp4 videos
MP4 videos can also be played in the lightbox by adding the `data-video-src` attribute in addition to the `mklbItem` class.
```html
<img class="mklbItem" src="thumbnail.jpg" data-video-src="movie.mp4" />
```

## Lightbox for YouTube videos
If a YouTube video should be played in the lightbox, the `mklbItem` class and the `data-youtube-id` attribute with the video ID must be inserted.
Example for the Youtube video `https://www.youtube.com/watch?v=wuo13FrNX6g`
```html
<a href="#" class="mklbItem" data-youtube-id="wuo13FrNX6g">Open the Youtube video in the lightbox.</a>
```
I use the Privacy Enhanced Mode, so the domain for the embed URL in the HTML will changed from https://www.youtube.com to https://www.youtube-nocookie.com.


## Lightbox for Vimeo videos
If a Vimeo video should be played in the lightbox, the `mklbItem` class and the `data-vimeo-id` attribute with the video ID must be inserted.
Example for the Vimeo video `https://vimeo.com/226053498`
```html
<a href="#" class="mklbItem" data-vimeo-id="226053498">Open the Vimeo video in the lightbox.</a>
```
I use the 'Do-Not-Track' mode. 
