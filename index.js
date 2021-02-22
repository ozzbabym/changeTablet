var changeColor = document.getElementById('colorChange')
var red = document.getElementById('red') 
var green = document.getElementById('green') 
var blue = document.getElementById('blue') 
var num = document.getElementById('numChange')
var button = document.getElementById('button')
var numbers = document.querySelectorAll('tr>td')

var selectColor
changeColor.addEventListener('click',(e)=>{
    if(!selectColor){
        selectColor = 'white'
    }
    selectColor = e.target.innerHTML
    red.className =''
    green.className =''
    blue.className =''
    e.target.className='changeColor'
})

var button = button.addEventListener('click', (e)=>{
    for(var i = 0;i<numbers.length; i++){
        if(i+1===parseInt(num.value)){
            numbers[i].style=`color: blue; font-style: italic;`
        }else{
        numbers[i].style=`background: ${selectColor} ;`
        } 
    }
    num.value =''

})

