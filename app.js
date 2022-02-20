const title =document.querySelector("#title");
const author =document.querySelector("#author");
const year =document.querySelector("#year");
const btn =document.querySelector(".btn");
const bookList =document.querySelector("#book-list");
const warning =document.querySelector(".warning");

//  if(message.value===""){
//        feedback.style.display="block";
//      setTimeout(()=>{
//          feedback.style.display="none";

//      },3000)
       
//    }
btn.addEventListener("click",(e)=>{
   e.preventDefault()
   
   if(title.value==="" || author.value==="" || year.value===""){
     warning.textContent=" *PLEASE FILL UP ALL THE INPUTS *"
     setTimeout(()=>{
       warning.style.display="none";
     },2000)
   }

   else{
      // message_content.textContent=message.value;
      //  message.value='';
    //  bookList.textContent=title.value

        const newRow=document.createElement('tr');
        const newTitle=document.createElement('td');
        newTitle.innerHTML=title.value;
        newRow.appendChild(newTitle);
        title.value='';

        const newAuthor=document.createElement('td');
        newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor);
        author.value='';


        const newYear=document.createElement('td');
        newYear.innerHTML=year.value;
        newRow.appendChild(newYear);
        year.value='';
         
        bookList.appendChild(newRow)

        // newTd.textContent=title.value
        // console.log(newTd)
   }
})