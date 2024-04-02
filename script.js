
const myObserver = new IntersectionObserver((entrada) =>{
    entrada.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
        } else {
            e.target.classList.remove("show");
        }
    })
})

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => {
    myObserver.observe(element);
    console.log(element);
})


