let toggle =document.querySelector(".dark-mode");
let toggleBtn=document.querySelector(".toggle-btn");
let categoryList=document.querySelector("#categories");
let showBook=document.querySelector("#main-view");
const anchor=document.querySelectorAll('.lists');
let uniqueSet =new Set();


//------for Dark-Mode--------
window.addEventListener('load', function () {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('addDarkMode');
        toggleBtn.classList.add('active');
    } else {
        document.body.classList.remove('addDarkMode');
        toggleBtn.classList.remove('active');
    }
});

toggle.addEventListener('click', function () {
    document.body.classList.toggle('addDarkMode');

    if (document.body.classList.contains('addDarkMode')) {
        toggleBtn.classList.add('active');
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        toggleBtn.classList.remove('active');
        localStorage.setItem('theme', 'light'); // Save preference
    }
});

let getCategory = async ()=>{
    let response =await fetch('https://books-backend.p.goit.global/books/category-list');
    let data =await response.json();
    
    

    let response1=await fetch('https://books-backend.p.goit.global/books/top-books');
    let data1=await response1.json();

    renderData(data,data1);
    renderData1(data1);

}
getCategory();

categoryList.innerHTML="";
let renderData =(data,data1)=>{
    data.forEach(item =>{
        const list =document.createElement('a');
        list.classList.add('lists');
        list.textContent=item.list_name;
        // console.log(list.textContent);
        categoryList.appendChild(list);

        list.addEventListener("click", () => {
            const selectedCategory = item.list_name;

            // Filter the books using data1
            const filteredBooks = data1.find((book) => book.list_name === selectedCategory);
           
            console.log(filteredBooks);
            if (filteredBooks) {
                showBook.innerHTML = ""; // Clear previous books
                renderData1([filteredBooks]); // Pass the filtered books
            }
        });
    });
    
}


let renderData1 =((items)=>{
    items.forEach((book)=>{
        uniqueSet.add(book.list_name)
        
        book.books.forEach(item =>{
            let bookItem=document.createElement("div");
            bookItem.classList.add('book-detail');
            const img =document.createElement('img');
            img.src=item.book_image;
            const title=document.createElement('h3');
            title.textContent=item.title;
            const author =document.createElement("h4");
            author.textContent=item.author;

            
            bookItem.appendChild(img);
            bookItem.appendChild(title);
            bookItem.appendChild(author);
            
            showBook.appendChild(bookItem);

            bookItem.addEventListener("click",()=>{
                const displayPurchase=document.createElement('div');
                displayPurchase.classList.add('pop-up');
                const photo=document.createElement('img');
                photo.src=item.book_image;
                const heading=document.createElement('h3');
                heading.textContent=item.title;
                const description=document.createElement('p');
                description.innerHTML=`Updated on:- ${item.updated_date}`;
                displayPurchase.appendChild(photo);
                displayPurchase.appendChild(heading);
                displayPurchase.appendChild(description);
                document.body.appendChild(displayPurchase);
                document.body.classList.add('body-blur');

            })
        })
    })
})







//add filter ..1.listname as heading
//add anchor tag value relate it with listname and show filterd book accordingly