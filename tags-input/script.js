const ul = document.querySelector("ul");
input = ul.querySelector("input");
count = document.querySelector(".details span")

let maxTags = 10
let tags = [];
countTag()

console.log(count.innerText);

function countTag(){

   console.log(maxTags,tags);
   count.innerText = maxTags-tags.length
   // console.log(count);
}

function createTag() {
//   console.log(tags);
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = ` <li>${tag} <img onclick="remove(this,'${tag}')" src="assets/x.svg" alt=""></li>`;
      ul.insertAdjacentHTML("afterbegin", liTag); // inserting or addding li inside ul tag
    });
    countTag()
}

function remove(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
   element.parentElement.remove()
   countTag()
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (tag.length >= 1 && !tags.includes(tag)) {
     if(tags.length < 10 ){
      tag.split(",").forEach((tag) => {
         tags.push(tag);
         createTag();
         //   tags =[]
       });
     }
      e.target.value = "";
    }
  }
}

input.addEventListener("keyup", addTag);



const removeButton = document.querySelector("button")
removeButton.addEventListener("click",()=>{
      tags.length = 0
   ul.querySelectorAll("li").forEach((li) => li.remove());
})