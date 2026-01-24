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
 clearGallery()
hideLoader();
    iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
})
 clearGallery()
hideLoader();
}else if(query){
showLoader();
getImagesByQuery(query).then(response => {
if(response.data.hits.length === 0){
 clearGallery()
hideLoader();
 iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
})

}
  clearGallery()
 hideLoader();
createGallery(response.data.hits)})
.catch(error => (error));
input.value = '';
}})


