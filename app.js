const toggler = document.querySelector("#colorScheme")
const root = document.documentElement

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        root.style.setProperty("--primary-200", "hsl(0, 0%, 100%)")
        root.style.setProperty("--primary-300", "hsl(225, 100%, 98%)")
        root.style.setProperty("--primary-400", "hsl(227, 47%, 96%)")
        root.style.setProperty("--primary-500", "hsl(228, 12%, 44%)")
        root.style.setProperty("--primary-900", "hsl(230, 17%, 14%)")
    } else if(toggler.checked === false){
        root.style.setProperty("--primary-200", "hsl(230, 17%, 14%)")
        root.style.setProperty("--primary-300", "hsl(232, 19%, 15%)")
        root.style.setProperty("--primary-400", "hsl(228, 28%, 20%)")
        root.style.setProperty("--primary-500", "hsl(228, 34%, 66%)")
        root.style.setProperty("--primary-900", "hsl(0, 0%, 100%)")
    }
    
})