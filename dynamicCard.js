document.title= "Dynamic Card using Java script";
let tit= document.querySelector('#title');
let boxes= document.querySelector('.container');
let box= document.querySelector('.box');
let createCard= (title,cName, views , months, duration, thumbnail)=>{
    let viewStr;
    if((views<1000)){
        viewStr= views;
    }else if(views>1000000){
        viewStr= views/100000 + "M";
    }else{
        viewStr= views/1000 + "K";
    }
    let html= 
    `<div class="container">
        <div class="box">
            <div class="image">
                <img src=${thumbnail} alt="Thumbnail">
                <div id="duration">${duration}</div>
            </div>
            <div class="text">
                <p>${title}</p>
                <p>${cName} . ${viewStr}views . ${months} months ago</p>
            </div>
        </div>
    </div>`;
    boxes.innerHTML += html;
    // boxes.appendChild(box);
}

let btn= document.querySelector('.button button');
console.log(btn);
btn.onclick=()=>{
    createCard("Introduction to Backend | Sigma Web Development Course", "CodeWithHarry", "28000000", "5", "39:20","harry_image.webp");
}
// createCard("Introduction to Backend | Sigma Web Development Course", "CodeWithHarry", "28000", "6", "34:20","harry_image.webp");
// createCard("Introduction to Backend | Sigma Web Development Course", "CodeWithHarry", "280", "3", "39:20","harry_image.webp");
// createCard("Introduction to Backend | Sigma Web Development Course", "CodeWithHarry", "280", "5", "39:20","harry_image.webp");
// createCard("Introduction to Backend | Sigma Web Development Course", "CodeWithHarry", "2", "5", "39:20","harry_image.webp");



    
