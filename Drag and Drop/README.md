# Drag and Drop Example

This is a simple example of implementing drag and drop functionality using HTML, CSS, and JavaScript.

## Features

- Drag items from the left box to the right box.
- Drag items from the right box to the left box.
- Basic styling to visualize the drag and drop areas.

## Usage

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.

## Structure

- `index.html`: Contains the HTML structure for the drag and drop interface.
- `style.css`: Defines the styles for the interface.
- `script.js`: Contains the JavaScript code to implement the drag and drop functionality.

## How It Works

- The items in the left box have the `draggable="true"` attribute, making them draggable.
- When an item is dragged (`dragstart` event), it's stored in the `selected` variable.
- When dropped into the right box (`drop` event), the selected item is appended to the right box.
- Similarly, when dropped into the left box, the selected item is appended to the left box.

