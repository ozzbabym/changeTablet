

var changeColor = document.getElementById('colorChange')
var red = document.getElementById('red') 
var green = document.getElementById('green') 
var blue = document.getElementById('blue') 
var num = document.getElementById('numChange')
var button = document.getElementById('button')


var selectColor
changeColor.addEventListener('click',(e)=>{
    selectColor = e.target.innerHTML
    red.className =''
    green.className =''
    blue.className =''
    
    e.target.className='changeColor'

})

var num1 = document.getElementById('1')
var num2 = document.getElementById('2')
var num3 = document.getElementById('3')
var num4 = document.getElementById('4')
var num5 = document.getElementById('5')
var num6 = document.getElementById('6')
var num7 = document.getElementById('7')
var num8 = document.getElementById('8')
var num9 = document.getElementById('9')
var num10 = document.getElementById('10')
var num11 = document.getElementById('11')
var num12 = document.getElementById('12')


var button = button.addEventListener('click', (e)=>{
    var number = document.getElementById(num.value)
    num1.style=`background: ${selectColor} ;`
    num2.style=`background: ${selectColor} ;`
    num3.style=`background: ${selectColor} ;`
    num4.style=`background: ${selectColor} ;`
    num5.style=`background: ${selectColor} ;`
    num6.style=`background: ${selectColor} ;`
    num7.style=`background: ${selectColor} ;`
    num8.style=`background: ${selectColor} ;`
    num9.style=`background: ${selectColor} ;`
    num10.style=`background: ${selectColor} ;`
    num11.style=`background: ${selectColor} ;`
    num12.style=`background: ${selectColor} ;`

    number.style='color: blue; font-style: italic;'
    
    num.value =''

})

