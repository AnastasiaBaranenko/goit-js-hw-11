import {getImagesByQuery} from './js/pixabay-api'
import {createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',(event) => {
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
getImagesByQuery(query).then(response => {
 hideLoader();
if(response.data.hits.length === 0){
 iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
})
}
 hideLoader();
createGallery(response.data.hits)})
.catch(error => (error))
input.value = '';
}
})


