let lists = document.getElementsByClassName('list');
let leftBox = document.getElementById('left');
let rightBox = document.getElementById('right');
let selected = null;

for(let list of lists) {
    list.addEventListener("dragstart", function(e) {
        selected = e.target;
    });
}

rightBox.addEventListener("dragover", function(e) {
    e.preventDefault();
});


rightBox.addEventListener("drop", function(e) {
    if (selected !== null) {
        rightBox.appendChild(selected);
        selected = null;
    }
});

// Resetting `selected`: Once you drop an item, you're setting selected to null, but it's still being referenced in the event listeners. This would throw an error.

leftBox.addEventListener("dragover", function(e) {
    e.preventDefault();
});

leftBox.addEventListener("drop", function(e) {
    if (selected !== null) {
        leftBox.appendChild(selected);
        selected = null;
    }
});

