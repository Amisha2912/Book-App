let toggle =document.querySelector(".dark-mode");
let toggleBtn=document.querySelector(".toggle-btn");
let categoryList=document.querySelector("#categories");
let showBook=document.querySelector("#main-view");
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
    renderData(data);
    

    let response1=await fetch('https://books-backend.p.goit.global/books/top-books');
    let data1=await response1.json();
    renderData1(data1);
    // console.log(data1);
    // data1.forEach((book)=>{
    //     book.books.forEach(item =>{
    //         console.log("============");
    //         console.log(item.book_image);
    //         console.log(item.list_name);
    //         console.log(item.author);
    //         console.log(item.contributor);
    //         console.log("=============");
    //     })
    // })
}
getCategory();

categoryList.innerHTML="";
let renderData =(data)=>{
    data.forEach(item =>{
        const list =document.createElement('a');
        list.classList.add('lists');
        list.textContent=item.list_name;
        // console.log(list.textContent);
        categoryList.appendChild(list);
    });
    
}


let renderData1 =((items)=>{
    items.forEach((book)=>{
        uniqueSet.add(book.list_name)
        // console.log(book.list_name);
        // showBook.innerHTML="book.list_name";
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
        })
    })
})


const filterByList =(listName)=>{
   let categoryBook = listName.filter(item =>{
        return item.list_name===uniqueSet;
    })

    renderData(categoryBook);

}