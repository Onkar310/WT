// Sample array of elements
var elements = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    { id: 4, name: 'Orange', category: 'Fruit' },
    { id: 5, name: 'Broccoli', category: 'Vegetable' }
];

// Sample array of integers
var integers = [5, 2, 8, 1, 3];

// Function to display elements in the table
function displayElements(elements) {
    var elementBody = $('#elementBody');
    elementBody.empty();

    elements.forEach(function (element) {
        var row = $('<tr>');
        row.append('<td>' + element.id + '</td>');
        row.append('<td>' + element.name + '</td>');
        row.append('<td>' + element.category + '</td>');
        var deleteButton = $('<button class="btn btn-danger" onclick="deleteElement(' + element.id + ')">Delete</button>');
        var cell = $('<td>').append(deleteButton);
        row.append(cell);
        elementBody.append(row);
    });
}


// Function to display integers in the table
function displayIntegers(integers) {
    var integerBody = $('#integerBody');
    integerBody.empty();

    integers.forEach(function (integer) {
        var row = $('<tr>');
        row.append('<td>' + integer + '</td>');
        var deleteButton = $('<button class="btn btn-danger" onclick="deleteInteger(' + integer + ')">Delete</button>');
        var cell = $('<td>').append(deleteButton);
        row.append(cell);
        integerBody.append(row);
    });
}

// Function to show the elements section
function showElementsSection() {
    $('#elementsSection').show();
    $('#integersSection').hide();
}

// Function to show the integers section
function showIntegersSection() {
    $('#elementsSection').hide();
    $('#integersSection').show();
}

// Function to perform search based on user input for elements
function performSearch() {
    var searchTerm = $('#searchInput').val().toLowerCase();
    var searchResults = elements.filter(function (element) {
        return element.name.toLowerCase().includes(searchTerm) || element.category.toLowerCase().includes(searchTerm);
    });
    displayElements(searchResults);
}

// Function to perform sort for elements
function performSort() {
    elements.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    displayElements(elements);
}

// Function to clear search results and display original elements for elements
function clearResults() {
    $('#searchInput').val(''); // Clear the search input field
    $('#elementBody').empty(); // Empty the element table body
}


// Function to add a new element to the list
function addElement() {
    var name = $('#nameInput').val();
    var category = $('#categoryInput').val();

    // Generate a new ID based on the last ID in the list
    var newId = elements.length > 0 ? elements[elements.length - 1].id + 1 : 1;

    var newElement = {
        id: newId,
        name: name,
        category: category
    };

    elements.push(newElement);
    displayElements(elements);

    // Clear the form fields
    $('#nameInput').val('');
    $('#categoryInput').val('');
}


// Function to delete an element from the list for elements
function deleteElement(id) {
    elements = elements.filter(function (element) {
        return element.id !== id;
    });
    displayElements(elements);
}

// Function to search for an integer
function searchInteger() {
    var searchValue = parseInt($('#integerSearchInput').val(), 10);
    var searchResults = integers.filter(function (integer) {
        return integer === searchValue;
    });
    displayIntegers(searchResults);
}

// Function to sort integers
function sortIntegers() {
    integers.sort(function (a, b) {
        return a - b;
    });
    displayIntegers(integers);
}

// Function to clear integers
function clearIntegers() {
    $('#integerSearchInput').val(''); // Clear the integer search input field
    displayIntegers(integers); // Display all integers
}

// Function to add a new integer
function addInteger() {
    var newInteger = parseInt($('#integerInput').val(), 10);
    integers.push(newInteger);
    displayIntegers(integers);

    // Clear the integer input field
    $('#integerInput').val('');
}

// Function to delete an integer
function deleteInteger(integer) {
    integers = integers.filter(function (value) {
        return value !== integer;
    });
    displayIntegers(integers);
}

// Display elements initially
displayElements(elements);
