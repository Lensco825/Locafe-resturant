var html = document.querySelector('html');
 var pageSize = html.getBoundingClientRect().width;
 var home = document.querySelector('.home');
 var courses = document.querySelector('.courses');
 var love = document.querySelector('.valentines');
 var button = document.querySelector('button');

 console.log(pageSize);

 var darkToggle = document.querySelector('.darkMode');

 darkToggle.addEventListener('click', function() {
  home.classList.toggle('dark');
  courses.classList.toggle('dark');
  cursor.classList.toggle('cursor_dark');
  cursor.classList.toggle('text-cursor_dark');
  button.classList.toggle('darkness');
  love.classList.toggle('love_dark');
 })

 var cursor = document.querySelector('.cursor_1');
 var cursor_two = document.querySelector('.cursor_2');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  cursor_two.style.left = `${x}px`;
  cursor_two.style.top = `${y}px`;
}

var text = document.querySelectorAll('p');
var listItems = document.querySelectorAll('li');

text.forEach(text => {
  text.addEventListener('mousemove', function () {
    cursor.classList.add('text-cursor');
    cursor_two.classList.add('text-cursor_2');
  })
  text.addEventListener('mouseleave', function () {
    cursor.classList.remove('text-cursor');
    cursor_two.classList.remove('text-cursor_2');
  })
})


listItems.forEach(listItems => {
  listItems.addEventListener('mousemove', function () {
    cursor.classList.add('text-cursor');
    cursor_two.classList.add('text-cursor_2');
  })
  listItems.addEventListener('mouseleave', function () {
    cursor.classList.remove('text-cursor');
    cursor_two.classList.remove('text-cursor_2');
  })
})