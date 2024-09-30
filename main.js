// let hamMenu=document.querySelector('.ham-menu');
// let offScreenMenu=document.querySelector('.off-screen-menu');

// hamMenu.addEventListener('click',()=>{
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// })




// // let shop =document.querySelectorAll('li button');


// // shop.forEach(el =>{
// //     el.addEventListener('click',(event)=>{

// //         event.target.style.color='green'
// //     })
// // })


// // document.addEventListener('keyup', (event) => {
// //     console.log(event.key);

// //   });



// //   Window.addEventListener('keyup',(event)=>{
// //     if(event.key=="Enter"){
// // //         console.log('Enter');
// // //     }
// // //   })

// // document.addEventListener('click',(event)=>{
// //     let width=document.getElementById('Weight').value;
// //     let height=document.getElementById('Height').value;
// //     let color=document.getElementById('color').value;

// //     let div=document.createElement('div');
// //     div.style.width=width+'px';
// //     div.style.height=height+'px';
// //     div.style.backgroundColor= `${color}`;
// //     div.style.left=event.pageX+'px';
// //     div.style.top=event.pageY+'px';
// //     div.style.position='absolute'
// //     document.body.appendChild(div);


// // })



// // const yeniIcon = document.createElement("i");
// // yeniIcon.classList.add("fas", "fa-coffee");
// // const container = document.getElementById("icon-container");
// container.appendChild(yeniIcon);
// //         search.value=''



// let search = document.getElementById('search');
// let add = document.getElementById('add');
// let icon = document.getElementsByClassName('fa-solid fa-mobile')


// let tel = ['apple', 'oppo', 'samsung'];
// let komp = ['apple', 'asus', 'lenovo'];



// add.addEventListener('click', () => {
//     const text = search.value;
//     const div1 = document.getElementById('divleft');
//     const div2 = document.getElementById('divright');


//     const newdiv = document.createElement('div')
//     newdiv.style.color = 'red'
//     newdiv.style.width = '100px'
//     newdiv.style.height = '100px'
//     newdiv.style.backgroundImage = "url(https://i.pinimg.com/564x/6d/ce/a9/6dcea93b2d1f6c2929ecd0ede58276b0.jpg)"
//     newdiv.style.display='flex'
//     newdiv.style.flexDirection='column-reverse'
//     newdiv.style.backgroundSize = "cover";
//     newdiv.style.backgroundPosition = "center";
//     newdiv.textContent = text

//     const newdiv2 = document.createElement('div')
//     newdiv2.style.color = 'red'
//     newdiv2.style.width = '100px'
//     newdiv2.style.height = '100px'
//     newdiv2.style.backgroundImage = "url(https://i.pinimg.com/564x/20/ca/a3/20caa341782a8c576064f4c9ce6fd61a.jpg)"
//     newdiv2.style.display='flex'
//     newdiv2.style.flexDirection='column-reverse'
//     newdiv2.style.backgroundSize = "cover";
//     newdiv2.style.backgroundPosition = "center";
//     newdiv2.textContent = text
//     if (tel.includes(text) && komp.includes(text)) {
//         div1.appendChild(newdiv)
//         div2.appendChild(newdiv2.cloneNode(true))

//         search.value = '';
//     }
//     else if (tel.includes(text)) {
//         div1.appendChild(newdiv)
//         search.value = '';

//     }
//     else {
//         div2.appendChild(newdiv2)
//         search.value = '';
//     }


// })
// const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
// const objData=JSON.parse(data);
// objData.id=157;
// console.log(JSON.stringify(objData));




// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//         fetch('https://api.chucknorris.io/jokes/random')
//         .then(res=>
//             res.json()
//         )
//         .then(data=> document.body.innerHTML+=data.value)
//     })

// let box = document.querySelector('div')



// fetch('https://acb-api.algoritmika.org/api/transaction?from=samir&to=nadir')
//     .then(res => res.json())
//     .then(data => data.forEach(el => {
//         box.innerHTML += `${el.from}  ${el.to} ${el.amount} <br>`
//             console.log(el);
//     }))


// let box =document.querySelector('div')
// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(data=>data.forEach(el => {
//     document.body.innerHTML+=`<div>
//     <image class='image' src='${el.image}'/>
//     <h2>${el.title}</h2>
//     <span>${el.price}</span>
//     <p>${el.category}</p>
//     <button id=${el.id} onclick=""></button>
//     </div>`;
// }));
// let arr=[]
// button.addEventListener('click',()=>{
//     arr.push(id)
// })
// fetch('https://acb-api.algoritmika.org/api/transaction/19520' ,{
// method:'DELETE'

// });


// let value ='Mike'



// let token ="73e7a3de-3249-4f81-b325-db9cc873f834";
// let url='https://content.guardianapis.com/search';

// document.querySelector('.search').addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') { 
//       const query = document.querySelector('.search').value;
//     fetch(`${url}?q=${query}&api-key=${token}`)
//     .then(res => res.json())
//     .then(data => data.response.results.forEach(el  => {
//         document.body.innerHTML+=el.webTitle
       
//      }));
//     })

// let time = 0;
// let box =document.querySelector('.box')
// const id = setInterval(() => {
//   time+=1
//   box.innerHTML=time

// }, 1000);

const inputDiv=document.querySelector('.inputDiv');
const button =document.getElementById('button');
const contentDiv=document.querySelector('.contentDiv');
var calculate =0;
const input =document.getElementById('input');

button.addEventListener('click',()=>{
    if(input.value.trim()!== ""){
        calculate++;
    var paragraf=document.createElement('p');
    paragraf.innerText= calculate + ")"+ input.value;
    const deleteBtn= document.createElement('button');
    const finshBtn=document.createElement('button');
    finshBtn.classList.add ('finshBtn')
    deleteBtn.classList.add('deleteBtn');
    contentDiv.appendChild(paragraf);
    paragraf.appendChild(deleteBtn);
    paragraf.appendChild(finshBtn);
    input.value=" ";
    
    deleteBtn.addEventListener('click',()=>{
        calculate--;
        contentDiv.removeChild(paragraf)
    })
    finshBtn.addEventListener('click',()=>{
        paragraf.classList.toggle('comp');
    })
    }})
 

