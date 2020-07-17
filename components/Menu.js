/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const menuMaker = (menuItems) => {
    const menu = document.createElement('div')
    const list = document.createElement('ul')
    const menuBtn = document.querySelector('.menu-button')
    const listItem = document.createElement('li')

    menuItems.forEach((arr) => { // *SHOULD* add an li for each entry in the array and append to the ul
      for (let i = 0; i <= arr.length; i++) {
        list.appendChild(listItem)
        listItem.textContent = arr[i]
      }      
      return listItem
  })
  console.log(listItem)

    //HTML Structure
    menu.appendChild(list)
    // list.appendChild(listItem)

    // Classes
    menu.classList.add('menu')

    // Content
    // listItem.textContent = menuItems[item]

    // Events
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--open')
    })

    return menu;
}

const newMenu = menuMaker(menuItems)
const header = document.querySelector(".header")
// console.log(header)
header.appendChild(newMenu)