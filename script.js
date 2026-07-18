// ===============================
// TALHA LIBRARY MANAGEMENT SYSTEM
// Part 1
// Login | Signup | Logout
// ===============================

// Login Function
function login() {

    let username = document.getElementById("username");

    let password = document.getElementById("password");

    if (username == null || password == null) {

        window.location.href = "dashboard.html";
        return;

    }

    if (username.value.trim() === "") {

        alert("Please enter Username");
        username.focus();
        return;

    }

    if (password.value.trim() === "") {

        alert("Please enter Password");
        password.focus();
        return;

    }

    alert("Login Successful");

    window.location.href = "dashboard.html";

}

// Logout Function
function logout() {

    let result = confirm("Are you sure you want to logout?");

    if(result){

        alert("Logout Successful");

        window.location.href = "index.html";

    }

}

// Signup Function
function signup(){

    alert("Account Created Successfully");

    window.location.href="login.html";

}

// Check Current Page
window.onload=function(){

    console.log("Talha Library Loaded Successfully");

}
// ===================================
// PART 2 - Books Management
// ===================================

let books = [
    {
        id: 1,
        name: "Java Programming",
        author: "James Gosling",
        status: "Available"
    },
    {
        id: 2,
        name: "Python Programming",
        author: "Guido van Rossum",
        status: "Issued"
    },
    {
        id: 3,
        name: "HTML & CSS",
        author: "John Duckett",
        status: "Available"
    }
];

// Add Book
function addBook() {

    let bookName = document.getElementById("bookName");
    let authorName = document.getElementById("authorName");

    if (!bookName || !authorName) return;

    if (bookName.value.trim() === "" || authorName.value.trim() === "") {
        alert("Please fill all fields.");
        return;
    }

    let newBook = {
        id: books.length + 1,
        name: bookName.value,
        author: authorName.value,
        status: "Available"
    };

    books.push(newBook);

    alert("Book Added Successfully!");

    bookName.value = "";
    authorName.value = "";

    displayBooks();
}

// Display Books
function displayBooks() {

    let tbody = document.querySelector("tbody");

    if (!tbody) return;

    tbody.innerHTML = "";

    books.forEach(function(book) {

        tbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteBook(${book.id})">
                    Delete
                </button>
            </td>
        </tr>`;
    });

}

// Delete Book
function deleteBook(id) {

    books = books.filter(book => book.id !== id);

    displayBooks();

}

window.addEventListener("load", displayBooks);
// ===================================
// PART 3 - Search + Local Storage
// ===================================

// Save Books
function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

// Load Books
function loadBooks() {

    let storedBooks = localStorage.getItem("books");

    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }

    displayBooks();

}

// Add Book (Updated)
function addBook() {

    let bookName = document.getElementById("bookName");
    let authorName = document.getElementById("authorName");

    if (!bookName || !authorName) return;

    if (bookName.value.trim() === "" || authorName.value.trim() === "") {

        alert("Please fill all fields.");
        return;

    }

    let newBook = {

        id: Date.now(),
        name: bookName.value,
        author: authorName.value,
        status: "Available"

    };

    books.push(newBook);

    saveBooks();

    displayBooks();

    bookName.value = "";
    authorName.value = "";

}

// Search Book
function searchBook() {

    let search = document.getElementById("searchBook").value.toLowerCase();

    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(function(row){

        let text = row.innerText.toLowerCase();

        if(text.includes(search)){

            row.style.display="";

        }else{

            row.style.display="none";

        }

    });

}

// Load Data
window.addEventListener("load", loadBooks);
// ===================================
// PART 4 - Dashboard & Members
// ===================================

// Dashboard Count
function updateDashboard(){

    let totalBooks = document.getElementById("totalBooks");

    if(totalBooks){
        totalBooks.innerHTML = books.length;
    }

}

// Update Dashboard on Load
window.addEventListener("load", function(){

    loadBooks();

    updateDashboard();

});

// Delete All Books
function deleteAllBooks(){

    if(confirm("Delete All Books?")){

        books=[];

        saveBooks();

        displayBooks();

        updateDashboard();

    }

}

// Members

let members=[];

function addMember(){

    let memberName=document.getElementById("memberName");
    let memberEmail=document.getElementById("memberEmail");
    let memberPhone=document.getElementById("memberPhone");

    if(!memberName || !memberEmail || !memberPhone){
        return;
    }

    if(memberName.value=="" || memberEmail.value=="" || memberPhone.value==""){

        alert("Please fill all fields");

        return;

    }

    members.push({

        name:memberName.value,

        email:memberEmail.value,

        phone:memberPhone.value

    });

    alert("Member Added Successfully");

    memberName.value="";
    memberEmail.value="";
    memberPhone.value="";

}

console.log("Talha Library Management System Loaded Successfully");