const setDrink = (section) =>{
    section.addEventListener('click', function(e){
        //e.prevenDefault();
        const id = e.target.parentElement.dataset.id;
        localStorage.setItem('drink', id);
    });
}

export default setDrink;