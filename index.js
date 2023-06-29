// Get the filter input element
const filterInput = document.querySelector('#filter');

// Add an event listener to the filter input
filterInput.addEventListener('input', function () {
  // Get the filter value (search string) and convert it to lowercase
  const filterValue = this.value.toLowerCase();

  // Get all the list items
  const items = document.querySelectorAll('#items li');

  // Loop through each list item
  items.forEach(function (item) {
    const itemName = item.querySelector('.item-name').textContent.toLowerCase();
    const itemDescription = item.querySelector('.item-description').textContent.toLowerCase();

    // Check if the item name or description contains the filter value
    if (itemName.includes(filterValue) || itemDescription.includes(filterValue)) {
      // If it does, display the item
      item.style.display = 'block';
    } else {
      // If it doesn't, hide the item
      item.style.display = 'none';
    }
  });
});
