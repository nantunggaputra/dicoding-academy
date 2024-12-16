const bookForm = document.getElementById("bookForm");
const bookFormSubmit = document.getElementById("bookFormSubmit");
const completeStatusSpan = document.getElementById("completeStatus");
const isCompleteCheckbox = document.getElementById("bookFormIsComplete");
const searchForm = document.getElementById("searchBook");
const incompleteBookList = document.getElementById("incompleteBookList");
const completeBookList = document.getElementById("completeBookList");
const STORAGE_KEY = "BOOKSHELF_APP";
let books = [];

function isStorageExist() {
  if (typeof Storage === "undefined") {
    alert("Browser tidak mendukung local storage");
    return false;
  }
  return true;
}

function saveData() {
  if (isStorageExist()) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }
}

function loadData() {
  if (isStorageExist()) {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      books = JSON.parse(data);
      renderBooks();
    }
  }
}

function validateFormInputs() {
  const title = document.getElementById("bookFormTitle").value.trim();
  const author = document.getElementById("bookFormAuthor").value.trim();
  const year = document.getElementById("bookFormYear").value.trim();
  const yearWarning = document.getElementById("yearWarning");
  const bookFormSubmit = document.getElementById("bookFormSubmit");

  const isTitleValid = title.length > 0;
  const isAuthorValid = author.length > 0;

  const yearRegex = /^[0-9]+$/;
  const isYearValid = yearRegex.test(year);

  if (!isYearValid && year !== "") {
    yearWarning.style = "";
  }

  if (isYearValid && year >= 0) {
    yearWarning.style = "display: none";
  }

  bookFormSubmit.disabled = !(isTitleValid && isAuthorValid && isYearValid);
}

document
  .getElementById("bookFormTitle")
  .addEventListener("input", validateFormInputs);
document
  .getElementById("bookFormAuthor")
  .addEventListener("input", validateFormInputs);
document
  .getElementById("bookFormYear")
  .addEventListener("input", validateFormInputs);

isCompleteCheckbox.addEventListener("change", () => {
  if (isCompleteCheckbox.checked) {
    completeStatusSpan.textContent = "Selesai dibaca";
  } else {
    completeStatusSpan.textContent = "Belum selesai dibaca";
  }
});

function createBookElement(book) {
  const bookElement = document.createElement("div");
  bookElement.setAttribute("data-bookid", book.id);
  bookElement.setAttribute("data-testid", "bookItem");

  const bookTitle = document.createElement("h3");
  bookTitle.setAttribute("data-testid", "bookItemTitle");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.setAttribute("data-testid", "bookItemAuthor");
  bookAuthor.textContent = `Penulis: ${book.author}`;

  const bookYear = document.createElement("p");
  bookYear.setAttribute("data-testid", "bookItemYear");
  bookYear.textContent = `Tahun: ${book.year}`;

  const buttonContainer = document.createElement("div");

  const toggleButton = document.createElement("button");
  toggleButton.setAttribute("data-testid", "bookItemIsCompleteButton");
  toggleButton.textContent = book.isComplete
    ? "Belum selesai dibaca"
    : "Selesai dibaca";
  toggleButton.addEventListener("click", () => toggleBookCompletion(book.id));

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
  deleteButton.textContent = "Hapus Buku";
  deleteButton.addEventListener("click", () => deleteBook(book.id));

  const editButton = document.createElement("button");
  editButton.setAttribute("data-testid", "bookItemEditButton");
  editButton.textContent = "Edit Buku";
  editButton.addEventListener("click", () => editBook(book.id));

  buttonContainer.append(toggleButton, deleteButton, editButton);

  bookElement.append(bookTitle, bookAuthor, bookYear, buttonContainer);
  return bookElement;
}

function renderBooks() {
  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  books.forEach((book) => {
    const bookElement = createBookElement(book);
    if (book.isComplete) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });
}

function addBook(title, author, year, isComplete) {
  const newBook = {
    id: +new Date(),
    title,
    author,
    year: Number(year),
    isComplete,
  };

  books.push(newBook);
  saveData();
  renderBooks();
}

function toggleBookCompletion(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (book) {
    book.isComplete = !book.isComplete;
    saveData();
    renderBooks();
  }
}

function deleteBook(bookId) {
  books = books.filter((b) => b.id !== bookId);
  saveData();
  renderBooks();
}

function editBook(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (book) {
    const newTitle = prompt("Masukkan judul baru:", book.title);
    const newAuthor = prompt("Masukkan penulis baru:", book.author);
    const newYear = prompt("Masukkan tahun baru:", book.year);

    if (newTitle && newAuthor && newYear) {
      book.title = newTitle;
      book.author = newAuthor;
      book.year = Number(newYear);
      saveData();
      renderBooks();
    }
  }
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = document.getElementById("bookFormYear").value;
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  addBook(title, author, year, isComplete);
  bookForm.reset();
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = document
    .getElementById("searchBookTitle")
    .value.toLowerCase();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery)
  );

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  filteredBooks.forEach((book) => {
    const bookElement = createBookElement(book);
    if (book.isComplete) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});
