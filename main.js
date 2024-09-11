function plus() {
    document.querySelector('div').classList.add('font-plus');
    document.querySelector('div').classList.remove('font-minus');
}
function minus() {
    document.querySelector('div').classList.add('font-minus');
    document.querySelector('div').classList.remove('font-plus');
}
document.querySelector('.plus').onclick = plus;
document.querySelector('.minus').onclick = minus;