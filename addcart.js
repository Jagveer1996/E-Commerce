var remove =  document.getElementsByClassName("Remove");
console.log(remove);

for(var i = 0; i < remove.length; i++){
    var button = remove[i];
    button.addEventListener('click', function(event){
        // console.log('clicked');
        var buttonClicked = event.target;

        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
    })
} 

