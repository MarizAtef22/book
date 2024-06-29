




document.querySelector("button").addEventListener("click", function(){
    addNewBook()
})

var bookName=document.getElementById("bookName");
var bookURL=document.getElementById("bookURL");
var bookarr=[];

if (localStorage.getItem("bookarr" )!=null) {
    bookarr=JSON.parse(localStorage.getItem("bookarr"))
    displayProducts();
    
}





    function addNewBook() {


        var vald=valdition();
        
if (vald==true) {



        var book={
            name:bookName.value
        }
    
        bookarr.push(book);
        
        displayProducts() ;
        clearData();
        localStorage.setItem("bookarr", JSON.stringify(bookarr))
      
        
    
    
    
    
     
        
    
    }


else{
    alert(vald);
}
    
    
}





function displayProducts() {
    var box="";

    for(var i=0;i<bookarr.length;i++){


box+=` <tbody id="table_body">

<tr>
    <td>${i}</td>
    <td>${bookarr[i].name}</td>
    <td><button type="button" class="btn btn-outline-success td_btn">vist</button></td>
    <td><button onclick="deleteData(${i})" type="button" class="btn btn-outline-danger">Delete</button>
    </td>
    <td></td>
</tr>
</tbody>`



    }
    document.getElementById("table_body").innerHTML=box;



    
}

function clearData(){
    bookName.value=" ";
    bookURL.value=" ";

}

function deleteData(idx) {

    for(var i=0;i<bookarr.length;i++){

bookarr.splice(idx,1);
displayProducts();

    }
    
}

function valdition(){
  var  nameRejex=/^[a-z]{3,7}$/;
   if(  nameRejex.test(bookName.value)==false){
    return("you should enter between 3-7 chars");
   }


   return true;

   
}