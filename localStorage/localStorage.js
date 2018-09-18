var d = document

function guardarIdioma() {
	evento.preventDefault()

	var datos = {
		id : evento.target.id,
		url : evento.target.href
	}
}

function recordarIdioma() {
	var en = d.querySelector('#en'),
	    es = d.querySelector('#es')

	en.onclick = guardarIdioma
	es.onclick = guardarIdioma

	irAlIdioma()
}
window.onload = recordarIdioma