'use strict';
const audio = document.querySelector('#rock');
const party = document.querySelector('.party');

audio.load();

party.addEventListener('mouseover', () => {
  audio.play();
});

party.addEventListener('click', () => {
  
	party.classList.remove('party--interaction-required');
});

party.addEventListener('mouseout', () => {
  audio.pause();
});