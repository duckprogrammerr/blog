// variables
const  listItems = document.querySelectorAll('.list-wrapper');
const burger_btn = document.querySelector('.burger-btn');
const navbar_ul = document.querySelector('.navbar-ul');

burger_btn.onclick = toggleBurgerBtn;

function toggleBurgerBtn (){
    if(burger_btn.classList.contains('active')){
        console.log('removed')
        burger_btn.classList.remove('active');
        navbar_ul.classList.remove('active');
    }else{
        console.log('added')

        burger_btn.classList.add('active');
        navbar_ul.classList.add('active');
        
    }
}

for (let i = 0; i < listItems.length ; i++){
    listItems[i].onclick =selectListItem
}

function selectListItem(){
 listItems.forEach( (item) => item.classList.remove('selected'));   
 this.classList.add('selected');
}