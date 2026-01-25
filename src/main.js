import {getImagesByQuery} from './js/pixabay-api'
import {createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit',(event) => {
event.preventDefault();
let query = input.value;

if(query === ''){
 clearGallery();
    iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
})
}else if(query){
 clearGallery()
showLoader();
getImagesByQuery(query).then(images => {
if(images.length === 0){
 iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
})
}
createGallery(images)})
.catch(error => (error))
.finally(( )=>
{ hideLoader();}
)
input.value = '';
}

})


