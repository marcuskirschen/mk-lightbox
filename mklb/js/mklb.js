/**
 * MK Lightbox
 */

const svgIcons = {
    close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
    next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
    prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
}

let mklbItems = document.getElementsByClassName('mklbItem');
let lightboxContainer;


for (let i=0; i< mklbItems.length; i++) {
    let mklbItem = mklbItems[i];
    mklbItem.addEventListener('click', () => _mklbOpen(mklbItem));
}

function _mklbOpen(mklbItem) {
    lightboxContainer = document.createElement('div');
    lightboxContainer.id = "mkLightboxContainer";

    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    lightboxContainer.appendChild(overlay);

    if('gallery' in mklbItem.dataset) {
        _mklbAddGallery(mklbItem);
    } else if('videoSrc' in mklbItem.dataset) {
        lightboxContainer.appendChild(_mklbAddVideo(mklbItem));
    } else if('youtubeId' in mklbItem.dataset) {
        lightboxContainer.appendChild(_mklbAddYoutubeVideo(mklbItem));
    } else {
        lightboxContainer.appendChild(_mklbAddImage(mklbItem));
    }

    let closeIconContainer = document.createElement('div');
    closeIconContainer.id = "closeIconContainer";
    closeIconContainer.innerHTML = svgIcons.close;
    lightboxContainer.appendChild(closeIconContainer);
    closeIconContainer.addEventListener('click', _closeLightbox)

    document.body.appendChild(lightboxContainer);
    overlay.addEventListener('click', _closeLightbox)
}

function _mklbAddImage(item) {
    let image = document.createElement('img');
    image.id = 'mklbImage';
    image.src = ('src' in item.dataset) ? item.dataset.src : item.src;
    return image;
}

function _mklbAddVideo(item) {
    let video = document.createElement('video');
    video.setAttribute('autoplay', true);
    video.setAttribute('controls', true);
    let source = document.createElement('source');
    source.src = item.dataset.videoSrc;
    source.type = 'video/mp4';
    video.appendChild(source);
    return video;
}

function _mklbAddYoutubeVideo(item) {
    let iframe = document.createElement('iframe');
    iframe.id = "yt-video";
    iframe.setAttribute('frameborder', "0");
    iframe.setAttribute('allow', "autoplay; encrypted-media");
    iframe.setAttribute('allowfullscreen', "");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + item.dataset.youtubeId;
    return iframe;
}

function _mklbAddGallery(currentItem) {
    let gallery = [];
    let index = 0;

    let mklbInner = document.createElement('div');
    mklbInner.id = 'mklbInner';

    for (let i=0; i < mklbItems.length; i++) {
        if('gallery' in mklbItems[i].dataset) {
            gallery.push(mklbItems[i]);
            if(mklbItems[i] === currentItem) {
                index = i;
            }
            let imageContainer = document.createElement('section');
            imageContainer.className = 'imageContainer';
            imageContainer.appendChild(_mklbAddImage(mklbItems[i]));
            mklbInner.appendChild(imageContainer);
        };
    }

    mklbInner.style.marginLeft = (index-1) * (-100) + 'vw';
    lightboxContainer.appendChild(mklbInner);

    let prev = document.createElement('div');
    prev.id = 'prev';
    prev.innerHTML = svgIcons.prev;
    let prevContainer = document.createElement('div');
    prevContainer.id = "prevContainer";
    prevContainer.appendChild(prev);
    lightboxContainer.appendChild(prevContainer);
    prevContainer.addEventListener('click', () => _mklbSlide(true));

    let next = document.createElement('div');
    next.id = 'next';
    next.setAttribute('data-next', (index <= gallery.length) ? index+1 : 1);
    next.innerHTML = svgIcons.next;
    let nextContainer = document.createElement('div');
    nextContainer.id = "nextContainer";
    nextContainer.appendChild(next);
    lightboxContainer.appendChild(nextContainer);
    nextContainer.addEventListener('click', () => _mklbSlide(false));
}

function _closeLightbox() {
    document.getElementById('mkLightboxContainer').remove()
}

function _mklbSlide(slideToPrev) {
    let inner = document.getElementById('mklbInner');
    let elements = document.getElementsByClassName('imageContainer').length;
    let marginLeft = inner.style.marginLeft;
    marginLeft = parseInt(marginLeft.slice(0, marginLeft.length-2));

    if (slideToPrev && marginLeft === 0) {
        inner.style.marginLeft = (elements - 1) * -100+'vw';
    } else if (slideToPrev) {
        inner.style.marginLeft = (marginLeft + 100)+'vw';
    } else if(marginLeft === (elements-1) * -100) {
        inner.style.marginLeft = '0vw';
    } else {
        inner.style.marginLeft = (marginLeft-100)+'vw';
    }
}