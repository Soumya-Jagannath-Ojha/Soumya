var typed = new Typed('#element', {
    strings: ['Fullstack Developer', 'MERN Stack Devloper' ,'Java Devloper'],
    typeSpeed: 80, backSpeed: 100 , backDealy: 1000, loop: true ,
  });

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));