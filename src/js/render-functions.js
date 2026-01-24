import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('ul');

export function createGallery(images){
    
    const img = images.map((image) => {
    return `<li><a href ="${image.largeImageURL}"><img class = "img-div" src ="${image.webformatURL}" alt ="${image.tags}">
    <div class = "elements-div"><div class = "el-div"><b>likes</b><p>${image.likes}</p></div><div class = "el-div"><b>Views</b><p>${image.views}</p></div>
    <div class = "el-div"><b>Comments</b><p>${image.comments}</p></div><div>
    <b>Downloads</b><p>${image.downloads}</p></div></div>
    </a>
    </li>`;
    }).join("");
    
list.insertAdjacentHTML("beforeend", img);
    gallery.refresh();
};

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom'
});

export function clearGallery(){
   list.innerHTML = '';
}

export function showLoader(){
    const loader = document.createElement('span');
    loader.classList.add('loader');
    const input = document.querySelector('input');
  input.insertAdjacentElement('afterend' ,loader);
}

export function hideLoader(){
    const loaderEl = document.querySelector('.loader');
    if( loaderEl ){
loaderEl.remove();
}
}

