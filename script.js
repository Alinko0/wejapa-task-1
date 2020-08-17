const p =document.querySelector('.content');
const btn =document.querySelector(".btn");
const inputs =document.querySelector(".ids");
const container =document.querySelector(".first-div")


function generateR() {
  const values = inputs.value.trim();


const r =  Math.floor(Math.random()*(values)) ;
const g =  Math.floor(Math.random()*(values));
const b =  Math.floor(Math.random()*(values));
const rgba =`rgb(${r},${g},${b})`;
if (values === "") {
    console.log(values);
    
 p.textContent=`enter a valid number`;
   p.style.backgroundColor = 'red';
   container.style.backgroundColor = ''
}
   
   else if (values < 0 || values  > 255) {
       p.textContent=`enter a  number between 1-255`;
       container.style.backgroundColor = ''
       p.style.backgroundColor = 'red';
   }

else{
   container.style.backgroundColor =rgba;
   p.textContent =rgba;
   p.style.backgroundColor = rgba;
 
   
}
  }

btn.addEventListener("click",function (e) {
    e.preventDefault()

    generateR()
})

