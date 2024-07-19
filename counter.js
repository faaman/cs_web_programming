if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
});

function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);

}