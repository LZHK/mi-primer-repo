//Codigo para que funcione el slider
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
//Codigo para que funcione el slider


//Codigo para que funcione el modal
const toggleModal = () =>{
    const {classList} = document.body;
    if (classList.contains("open")) {
        classList.remove("open");
        classList.add("closed");
    } else {
        classList.remove("closed")
        classList.add("open");
    }
};
//Codigo para que funcione el modal