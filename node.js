
const slides=document.querySelectorAll('.slide')
const wrapper=document.querySelector('.wrapper')
let current=0
let total=slides.length
console.log(total)
const left=document.querySelector('.left-arrow')
const right=document.querySelector('.right-arrow')

left.addEventListener('click',()=>{
   current--;
   if(current<0){
      current=total-1
   }
   console.log(current)
   setbg()
   setimage()
})
right.addEventListener('click',()=>{
   current++;
   if(current>=total){
      current=0
   }
   console.log(current)
   setbg()
   setimage()
})
  

setbg()
function setbg(){
   wrapper.style.backgroundImage=slides[current].style.backgroundImage;
}
function setimage(){
   slides.forEach(slide=>{
      slide.classList.remove('active')
   })
   slides[current].classList.add('active');
}

