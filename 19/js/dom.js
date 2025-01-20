// dom.js
// Document Object Model

// let myPicture = {name : "해와달", width: 200px, height : 300px}; => property (속성)
// <img src = "small.jpg" => attribute(속성) 
// .src 면 attribute / {name : " "~~~~} 이면 property

document.addEventListener('DOMContentLoaded', attrChangeFunc);

function attrChangeFunc(e) {
  console.log(e);
  console.log()

  // 대상선택.
  document.querySelectorAll('div#small-pic>img').forEach(function(item){ 
    // img 이벤트 등록.
    item.addEventListener('mouseover', function(e) {
      console.log(e.target.src);
      document.querySelector('#prod-pic > img').src = e.target.src;
    })
  })
};

// document.querySelector('button').forEach(function(item, idx, dry) {
//   document.addEventListener('click', function() {
//     alert('.bluetext + .add');
//   })
// })

document.querySelector('#desc button').addEventListener('click', function () {
  let itemName = document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText;
  let price = document.querySelector('#desc>ul>li:nth-of-type(2)>input').value;
  let logis = document.querySelector('#desc>ul>li:nth-of-type(3)>input').value;
  
  itemName = document.querySelectorAll('#desc>ul>lu')[0].firstElementChild.innerText;
  price = document.querySelectorAll('#desc>ul>li')[1].lastElementChild.value;
  logis = document.querySelectorAll('#desc>ul>li')[2].children[1].value;
  console.log(itemName, price, logis);
  alert(`${itemName}(결제금액: ${parseInt(price) >= 50000 ? parseInt(price) : parseInt(price)+parseInt(logis)})원`);
});

// 요소의 값을 변경.
function domChangeFunc() {

  let heading = document.getElementById('heading');
  heading.onclick = function () {
    heading.innerText = "추천! 오늘의 커피";
    document.getElementById('cup').src = "images/coffee-blue.jpg";
  }
  console.log(heading);

  let detail = document.querySelector('#detail > ul');
  // detail.innerHTML = '<li>사과</li></li>바나나</lt>'
  // console.log(detail.innerText);
  // console.log(detail.innerHTML);
  // console.log(detail.textContent);
}

// DOM 요소의 선택.
function domFunc() {
  let targetItem = document.getElementById('container'); // id값으로 선택.
  targetItem = document.querySelector('#container');

  targetItem = document.getElementsByClassName('small'); // HTMLCollection([배열])
  for(let i = 0; i < targetItem.length; i++) {
    console.log(targetItem[i].src);
  }
  targetItem = document.querySelectorAll('.small'); //Nodelist([배열])
  targetItem.forEach(function(item, idx, dry) {
    item.style.borderColor = 'red';
    item.style.borderWidth = '3px';
    item.style.borderStyle = 'solid';
  });
  targetItem = document.getElementsByTagName('img'); // HTMLCollection([배열])
  targetItem = document.querySelectorAll('img'); // Nodelist
  console.log(targetItem);
} // end of domFunc().