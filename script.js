const hamburger = document.querySelector('#hamburger')
const sideMenus = document.querySelector('#sideMenus');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const navClose =document.querySelector("#nav-close")

navLinks.addEventListener("click",()=>{
  sideMenus.classList.add("hidden")
})
navClose.addEventListener("click",()=>{
  sideMenus.classList.add("hidden")
})
hamburger.addEventListener("click",()=>{
  sideMenus.classList.remove("hidden")
})

window.addEventListener('scroll',()=>{
  if(scrollY > 50){
    navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg'
      ,'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20'
    );
    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50'
      ,'dark:border','dark:border-white/50','dark:bg-transparent'
    );
  }else{
    navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg'
      ,'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20'
    );
    navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50'
      ,'dark:border','dark:border-white/50','dark:bg-transparent');
  }
})

//---------------Dark Mode And Light Mode ---------------------------------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

function toggleTheme(){

  document.documentElement.classList.toggle('dark')

  if(document.documentElement.classList.contains('light')){
    localStorage.theme = 'light';
  }else{
    localStorage.theme = 'dark';
  }
}