'use strict';

const allCats = [];
const catform = document.getElementById('catform');
const catlist = document.getElementById('catlist');

function Cat(name){
  this.name = name;
  Cat.allCats.push(this);
}

Cat.allCats = [];

Cat.prototype.render = function(){
  const listItem = document.createElement('li');
  listItem.textContent = this.name;
  catlist.appendChild(listItem);
};

function handleCatSubmit(e){
  e.preventDefault();
  const newCat = new Cat(e.target.kitteh.value);
  catform.reset();
  newCat.render();
  localStorage.cats = JSON.stringify(Cat.allCats);
  console.log('this is what is in local storage', localStorage.cats);
}
