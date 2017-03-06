const hello = 'hello-world';

console.log(hello);

const button = document.getElementsByClassName('o-btn--test')[0];
const openModalBtn = document.getElementsByClassName('o-btn--open')[0];
const closeModalBtn = document.getElementsByClassName('o-btn--close')[0];

const textBlock = document.getElementsByClassName('text-block')[0];
const modal = document.getElementsByClassName('o-modal--test')[0];


button.addEventListener('click', () => {
	textBlock.innerHTML = 'working';
})

openModalBtn.addEventListener('click', () => {
	modal.classList.remove('o-modal--hidden');
})

closeModalBtn.addEventListener('click', () => {
	modal.classList.add('o-modal--hidden');
})
