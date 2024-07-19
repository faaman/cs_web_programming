let counter = 0;

// anonymous function below: 
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
});

function count(){
counter++;
//alert(counter);
document.querySelector('h1').innerHTML = counter;

if(counter % 10 === 0){
    //alert("Count is now " + counter);
    alert(`Count is now ${counter}`);
}

}
