let counter = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;

    setInterval(count, 1000);
});

function count(){
    counter++;
    document.querySelector('h1').innerHTML = counter;
}