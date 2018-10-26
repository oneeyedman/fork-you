'use strict';
const audio = document.querySelector('#rock');
const tuerto = document.querySelector('.party');

audio.load();

tuerto.addEventListener('mouseover', () => {
  audio.play();
});

tuerto.addEventListener('mouseout', () => {
  audio.pause();
});