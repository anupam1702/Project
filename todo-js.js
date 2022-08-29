var list=document.getElementById('todo-list');
var inputBox=document.getElementById('todo-input');
var btnAdd=document.getElementById('add-item');
var btnUpdate=document.getElementById('update-item');
var btnRemove=document.getElementById('delete-item');



var currentInputvalue='';
inputBox.addEventListener('input',function(e){
    currentInputvalue=e.target.value;

});


inputBox.addEventListener('keyup',function(e){
    if(e.keyCode===13){
        addListItem();
        
    }
})


function createNew(){
    var newListElement=document.createElement('li');
    
    var textNode=document.createTextNode(currentInputvalue);
    newListElement.appendChild(textNode);
    

    return newListElement;
}


function addListItem(){
    if(currentInputvalue!==undefined && currentInputvalue!==null && currentInputvalue!==''){
    

        var newListElement=createNew();
    

    list.appendChild(newListElement);

    inputBox.value='';
    currentInputvalue='';
    }
    else{
        alert('please enter a valid item ');
    }
   
}



//add button
btnAdd.addEventListener('click',addListItem)

//update
btnUpdate.addEventListener('click',function(){
    var firstElement=list.firstElementChild;
    var newListElement=createNew();

    list.replaceChild(newListElement,firstElement);

})


//remove button
btnRemove.addEventListener('click',function(){
    var firstElement=list.firstElementChild;

    list.removeChild(firstElement);
    
})


    