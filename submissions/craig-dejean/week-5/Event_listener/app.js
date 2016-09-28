var butt = document.createElement('button');
butt.setAttribute('id', 'first-button');
document.body.appendChild(butt);



document.getElementById('first-button').addEventListener('click', function(){
	console.log('clicked the first button')
})
/
document.getElementById('first-button').addEventListener('click',function(){

document.body.setAttribute('style','background-color:yellow')
})


var but3 = document.createElement('button')
but3.innerHTML='new button 3'

but3.setAttribute('id','second-button')
console.log(but3)

document.body.appendChild(but3)

but3.addEventListener('click',function(){
	document.body.appendChild(document.createElement('button')).innerHTML='new buttons'
})

var image = document.createElement('img')

image.setAttribute('src','https://www.google.com/search?q=steelers&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjJ0M36-8vOAhXEXh4KHS_tBa4Q_AUICSgC&biw=1242&bih=610#imgrc=nKr_IJ7-zDwwSM%3A')

document.body.appendChild(image)

image.setAttribute('hover',function(){
	this.setAttribute('src','https://www.google.com/search?q=steelers&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjJ0M36-8vOAhXEXh4KHS_tBa4Q_AUICSgC&biw=1242&bih=610#tbm=isch&q=nfl&imgrc=D53yhOFQRKVZ7M%3A')
})