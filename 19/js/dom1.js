// element(tag) vs node
document.addEventListener('DOMContentLoaded', function () {
  let container = document.querySelector('#container');
  console.dir(container);

  document.querySelector('button').addEventListener('click', function () {
    // 상세설명이 보이도록.
    container.childNodes[7].style.display = 'block'
    // container.children[3].style.backgroundColor = 'red';
    // document.querySelector('#detail>ul').innerHTML += '<li>가공법 : 위시드</li>';
    let item = document.createElement('li'); // Element 생성.
    let txt = document.createTextNode('가공법 : 위시드'); // TextNode 생성.
    item.appendChild(txt); // 부모.appendChild(자식)
    console.log(item);
    document.querySelector('#detail>ul').appendChild(item);
  })
})
