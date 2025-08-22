// let bar=document.getElementById("bar")
// let nav=document.getElementById("navbar")
// let close=document.getElementById("close")
// if(bar){
//     bar.addEventListener("click",()=>{
//         nav.classList.add("active")
//     })
// }
// if(close){
//     close.addEventListener("click",()=>{
//         nav.classList.remove("active")
//     })
// }

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const button = document.getElementById("search")
var search = document.getElementById("glass")
var searchbox = document.getElementById("searchbox")
const over = document.getElementById("results")


function appear(){
    if(searchbox.style.display==='none' || search.style.display==='none'){
        searchbox.style.display='inline-block'
        search.style.display='inline-block'
        button.style.display='none'
        console.log("button click");
    }
    else{
        searchbox.style.display='none'    
    }
}
function disappear(){
    searchbox.style.display='none'
    search.style.display='none'
    button.style.display='inline-block'
    console.log("double click");
    searchbox.value=''
    over.style.display='none' 
}
// searchbox.addEventListener('input',()=>{
//     over.style.display='inline-block'
// })
function searchy(){
    const query=document.getElementById("searchbox").value.toLowerCase()
    console.log(query);
    
    const out = document.getElementById("results")
    out.style.display='none'
    out.innerHTML=''

    const divs = document.querySelectorAll("#catalog")
    
    divs.forEach(divs=>{
        const names = divs.querySelector("h5").textContent.toLowerCase();

        if (names.includes(query) && query!==''){
            const resultitem = document.createElement('div');
            const alink = divs.querySelector('a').href
            console.log(alink);
            
            const redirect = document.createElement('a')
            redirect.setAttribute("href",`${alink}`)
            redirect.setAttribute("target","_blank")
            redirect.setAttribute("height","150px")
            redirect.setAttribute("width","150px")

            const img = divs.querySelector('img')
            const imgpath = img.attributes[0].nodeValue;
            
            img.setAttribute("src",`${imgpath}`)
            img.setAttribute("height","150px")
            img.setAttribute("width","150px")
            redirect.append(img)
            resultitem.textContent=names;
            out.append(resultitem,redirect)
            out.style.display='inline-block'
        }
    })
}
// searchbox.addEventListener('input',searchy())

let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart.length);
console.log(cart);
let countval=window.localStorage.getItem('countval');
var count = document.querySelector('#count')
count.innerText=`${countval}`
let cartbtn = document.querySelectorAll('.cart')
cartbtn.forEach(btn=>{
    
    btn.addEventListener('click',()=>{
        console.log(btn);
        countval++
        window.localStorage.setItem("countval",`${countval}`)
        count.innerText=`${countval}`
    })
})
// function counter(){
//     console.log("cart clicked");
//     countval++;
//     console.log(countval);
//     // countval=10;
// }


// const icon = document.getElementById("glass")
// icon.addEventListener('click',()=>{
//     let search = document.getElementsByClassName("search")
//     search.setAttribute("id","searchbox")
// })