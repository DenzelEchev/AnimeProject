const flcl = document.querySelector('#flcl')
const hxh = document.querySelector('#hxh')
const outlaw = document.querySelector('#outlaw')
const magi = document.querySelector('#magi')
const bigo = document.querySelector('#bigo')
const worldtrigger = document.querySelector('#worldtrigger')

document.querySelector('#flclClick').addEventListener('click', flclDisplay)
document.querySelector('#hxhClick').addEventListener('click', hxhDisplay)
document.querySelector('#outlawClick').addEventListener('click', outlawDisplay)
document.querySelector('#magiClick').addEventListener('click', magiDisplay)
document.querySelector('#bigoClick').addEventListener('click', bigoDisplay)
document.querySelector('#worldtriggerClick').addEventListener('click', worldtriggerDisplay)

function flclDisplay (){
	worldtrigger.classList.add('hidden')
	bigo.classList.add('hidden')
	magi.classList.add('hidden')
    hxh.classList.add('hidden')
	outlaw.classList.add('hidden')
	flcl.classList.toggle('hidden')
}

function hxhDisplay(){
	worldtrigger.classList.add('hidden')
	bigo.classList.add('hidden')
	magi.classList.add('hidden')
    hxh.classList.toggle('hidden')
	outlaw.classList.add('hidden')
	flcl.classList.add('hidden')
}

function outlawDisplay(){
    worldtrigger.classList.add('hidden')
	bigo.classList.add('hidden')
	magi.classList.add('hidden')
    hxh.classList.add('hidden')
	outlaw.classList.toggle('hidden')
	flcl.classList.add('hidden')
}

function magiDisplay(){
    worldtrigger.classList.add('hidden')
	bigo.classList.add('hidden')
	magi.classList.toggle('hidden')
    hxh.classList.add('hidden')
	outlaw.classList.add('hidden')
	flcl.classList.add('hidden')
}

function bigoDisplay(){
    worldtrigger.classList.add('hidden')
	bigo.classList.toggle('hidden')
	magi.classList.add('hidden')
    hxh.classList.add('hidden')
	outlaw.classList.add('hidden')
	flcl.classList.add('hidden')
}

function worldtriggerDisplay(){
    worldtrigger.classList.toggle('hidden')
	bigo.classList.add('hidden')
	magi.classList.add('hidden')
    hxh.classList.add('hidden')
	outlaw.classList.add('hidden')
	flcl.classList.add('hidden')
}
