//function addingEventListener() {
//}

/*const input = document.querySelector('input');
function addEventListener() {
    
input.addEventListener('click' ); {
alert('I was clicked');
}
}*/
const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
alert('I was clicked')
  });
}