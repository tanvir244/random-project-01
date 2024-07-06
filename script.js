document.querySelector('#toggle_list').addEventListener('click', () => {
    const element = document.querySelector('#navbar_right');
    element.classList.add('hidden');

    const hideElement = document.querySelector('#hidden_toggle');
    hideElement.classList.remove('hidden');
    hideElement.classList.add('block');
})

document.querySelector('#cross_icon').addEventListener('click', () => {
    const hideElement = document.querySelector('#hidden_toggle');
    hideElement.classList.add('hidden');

    const element = document.querySelector('#navbar_right');
    element.classList.remove('hidden');
    element.classList.add('block');
})