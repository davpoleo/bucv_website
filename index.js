const $ = document.querySelector.bind(document);

let home = $('#home')
let conocenos = $('#conocenos')
let actividades = $('#actividades')
let servicios = $('#servicios')
let multimedia = $('#multimedia')
let contactanos = $('#contactanos')

let conocenosBox = $('#conocenosBox')
let actividadesBox = $('actividadesBox')
let serviciosBox = $('serviciosBox')
let multimediaBox = $('multimediaBox')
let contactanosBox = $('contactanosBox')
let main = $('#main')

let bars = $('#bars')
let mobilenav = $('#mobilenav')
let exit = $('#exit')
let conocenosMobile = $('#conocenosMobile')
let actividadesMobile = $('#actividadesMobile')


home.addEventListener('mouseover', function(){
    conocenos.classList.remove('orange')
    actividades.classList.remove('orange')
    servicios.classList.remove('orange')
    multimedia.classList.remove('orange')
    contactanos.classList.remove('orange')
})
conocenos.addEventListener('mouseover', function(){
    conocenos.classList.add('orange')
    conocenos.classList.add('underline')
    actividades.classList.remove('orange')
    servicios.classList.remove('orange')
    multimedia.classList.remove('orange')
    contactanos.classList.remove('orange')
})
actividades.addEventListener('mouseover', function(){
    actividades.classList.add('orange')
    actividades.classList.add('underline')
    conocenos.classList.remove('orange')
    servicios.classList.remove('orange')
    multimedia.classList.remove('orange')
    contactanos.classList.remove('orange')
})
servicios.addEventListener('mouseover', function(){
    servicios.classList.add('orange')
    servicios.classList.add('underline')
    conocenos.classList.remove('orange')
    actividades.classList.remove('orange')
    multimedia.classList.remove('orange')
    contactanos.classList.remove('orange')
})
multimedia.addEventListener('mouseover', function(){
    multimedia.classList.add('orange')
    multimedia.classList.add('underline')
    conocenos.classList.remove('orange')  
    actividades.classList.remove('orange')  
    servicios.classList.remove('orange')  
    contactanos.classList.remove('orange')  
})
contactanos.addEventListener('mouseover', function(){
    contactanos.classList.add('orange')
    contactanos.classList.add('underline')
    actividades.classList.remove('orange')
    servicios.classList.remove('orange')
    multimedia.classList.remove('orange')
    conocenos.classList.remove('orange')
})
if(main){
    main.addEventListener('mouseover', function(){
        conocenos.classList.remove('orange')
        actividades.classList.remove('orange')
        servicios.classList.remove('orange')
        multimedia.classList.remove('orange')
        contactanos.classList.remove('orange')
    })
}else{

}

bars.addEventListener('click', function(){
    mobilenav.classList.add('visible')
})

exit.addEventListener('click', function(){
    mobilenav.classList.remove('visible')
})


// BUSCADOR
let busqueda = $('#busqueda');
var filterResult = $('#filterResult');
var linksResult = $('#linksResult');

const temas = [
	{nombre: 'Codigo de honor', tag:'codigo de honor', cookie:'Conocenos > Quienes somos' , url: '#'},
	{nombre: 'Origenes', tag:'origenes',cookie: 'Conocenos > Quienes somos' , url: '#'},

	{nombre:'Mision', tag:'mision',cookie:'Conocenos > Ideales' , url:'#'},
	{nombre:'Vision', tag:'vision',cookie:'Conocenos > Ideales' , url:'#'},
	{nombre:'Valores', tag:'valores',cookie:'Conocenos > Ideales' , url:'#'},

	{nombre:'Autoridades', tag:'autoridades',cookie:'Conocenos > Nosotros' , url:'#'},
	{nombre:'Organigrama', tag:'organigrama',cookie:'Conocenos > Nosotros' , url:'#'},
	{nombre:'Directorio', tag:'directorio',cookie:'Conocenos > Nosotros' , url:'#'},

	{nombre:'Brigada Juvenil', tag:'brigada juvenil',cookie:'Actividades > Programa de formación institucional' , url:'#'},
	{nombre:'Curso de formación', tag:'curso de formacion',cookie:'Actividades > Programa de formación institucional' , url:'#'},
    
	{nombre:'Primeros auxilios', tag:'primeros auxilios',cookie:'Actividades > Formación en medicina prehospitalaria' , url:'#'},
	{nombre:'Técnicas de inyecciones', tag:'tecnicas de inyecciones',cookie:'Actividades > Formación en medicina prehospitalaria' , url:'#'},
	{nombre:'RCP', tag:'rcp reanimacion cardio pulmonar',cookie:'Actividades > Formación en medicina prehospitalaria' , url:'#'},
	{nombre:'Atención al paciente pedíatrico', tag:'atencion al paciente pediatrico',cookie:'Actividades > Formación en medicina prehospitalaria' , url:'#'},
	{nombre:'Taller de venoclisis', tag:'taller de venoclisis',cookie:'Actividades > Formación en medicina prehospitalaria' , url:'#'},
	{nombre:'Técnicas de vendajes', tag:'tecnicas de vendajes',cookie:'Actividades > Formación en medicina prehospitalaria' , url:'#'},

	{nombre:'Curso básico de extintores', tag:'curso basico de extintores',cookie:'Actividades > Formación en seguridad insdustrial' , url:'#'},
	{nombre:'Técnicas básicas de rapel', tag:'tecnicas basicas de rapel',cookie:'Actividades > Formación en seguridad insdustrial' , url:'#'},
	{nombre:'Formación de brigada de emergencia', tag:'formacion de brigada de emergencia',cookie:'Actividades > Formación en seguridad insdustrial' , url:'#'},
	{nombre:'Simulacro de desalojo', tag:'simulacro de desalojo',cookie:'Actividades > Formación en seguridad insdustrial' , url:'#'},
	{nombre:'Medidas preventivas en sismos', tag:'medidas preventivas en sismos',cookie:'Actividades > Formación en seguridad insdustrial' , url:'#'},
	{nombre:'Manejos de curdas', tag:'',cookie:'Actividades > Formación en seguridad insdustrial' , url:'#'},

	{nombre:'Ambulancia', tag:'ambulancia amb',cookie:'Servicios >' , url:'#'},
	{nombre:'Rescate', tag:'rescate',cookie:'Servicios >' , url:'#'},
	{nombre:'Guardia de prevención', tag:' guardia de prevencion gp',cookie:'Servicios >' , url:'#'},
	{nombre:'Formación comunidad', tag:'formacion comunidad',cookie:'Servicios >' , url:'#'},
	{nombre:'Formación empresarial', tag:'formacion empresarial',cookie:'Servicios >' , url:'#'},

	{nombre:'Fotografias', tag:'fotos fotografias imagenes',cookie:'Multimedia >' , url:'#'},
	{nombre:'Videos', tag:'videos',cookie:'Multimedia >' , url:'#'},
	{nombre:'Podcast', tag:'voice podcast radio',cookie:'Multimedia >' , url:'#'},

	{nombre:'Sótano del gimnasio cubierto de la Universidad Central de Venezuela (Caracas) <div class="mapa">\
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9330.768099126586!2d-66.88914155750551!3d10.492410300303415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6c9d2523e40cd64!2sBomberos%20UCV!5e0!3m2!1ses!2sus!4v1649169725123!5m2!1ses!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\
</div>',
    
    tag:'ubicacion gym gimnasio cubierto',cookie:'Contacto > Ubicación', class:'filterFeatured', url:'#'},
	{nombre:'0212-605-2222', tag:'telefono numero',cookie:'Contacto > Teléfono' , url:'tel:02126052222'},
	{nombre:'bomberosucv@gmail.com', tag:'correo @gmail',cookie:'Contacto > Correo' , url:'mailto:bomberosucv@gmail.com'},

	// {nombre:'', tag:'',cookie:'Contacto >' , url:'#'},


]

const filtrar = ()=>{
	filterResult.innerHTML ='';
	let texto = busqueda.value.toLowerCase();

	for (let tema of temas){
		let nombre = tema.tag.toLowerCase();
		if (nombre.indexOf(texto) !== -1) {
			filterResult.innerHTML += `
            <div class="filtercard ${tema.class}">
                <div class="filtercookies">
                    ${tema.cookie}
                </div>
                <div class="filterlink">
                    <a href="${tema.url}">${tema.nombre}</a>
                </div>
            </div>`
		}
        linksResult.classList.add('invisible');

	}

	if (filterResult.innerHTML ==='') {
		filterResult.innerHTML += `
			<div class="filtercarderror">
                <div class="filtercarderrortext">
                    <div>
                        <i class="fa-solid fa-robot"></i> 
                    </div>

                    <div>
                    Lo que estas buscando no se encuentra en el menu
                    </div>
                </div>    
            </div>
		`	
        linksResult.classList.add('invisible');
	}

	if (texto === '') {
		filterResult.innerHTML ='';
        linksResult.classList.remove('invisible');
	}
}

busqueda.addEventListener('keyup', filtrar);

let mainimg = $('#mainimg')
let navimg = $('#navimg')
if (screen.width <= 600){
    mainimg.src="img/foto02.jpg";
    mainimg.classList.add('imgrefix')
}else{
    mainimg.src="img/foto01.jpg";
    mainimg.classList.remove('imgrefix')
}



