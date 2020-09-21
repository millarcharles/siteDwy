
// 
// 
// OBJETO JSON ; SIMULA CONSULTA A API
// 
// 

DESITNOS_JSON={
	1:{
	descripcion:"CENTRO SKI CORRALCO",
	fecha:"20/09",
	horario:"8:00 - 18:00",
	},
	2:{
	descripcion:"PARQUE NACIONAL VILLARRICA",
	fecha:"25/09",
	horario:"9:00 - 19:00",
	},
	3:{
	descripcion:"BIKE PARK LASTARRIA",
	fecha:"28/09",
	horario:"9:00 - 20:00",
	},
	4:{
	descripcion:"SANTUARIO EL CAÑI",
	fecha:"30/09",
	horario:"9:00 - 21:00",
	},
	5:{
	descripcion:"RESERVA HUILO HUILO",
	fecha:"07/10",
	horario:"7:00 - 21:00",
	},
	}








function testAPI(idx){
	
	var cmb= document.getElementById("cmb_evento");

	//dirigir vista a formulario 
	cmb.scrollIntoView({
	behavior: 'smooth' 	
	});

	//Seleciconar evento 
	cmb.selectedIndex=idx;
	itemSelected();


}


function deselecBtn(){


	console.log("click");

	var x= document.getElementById("id-escondeme");
	x.style.display = "none";
	var y = document.getElementById("cmb_evento");
	y.selectedIndex=0;
	var txthr= document.getElementById("txtHorario");
	txthr.value="";
	var txtfe= document.getElementById("txtFecha");
	txtfe.value="";

	}

function itemSelected(){
	
	var y= document.getElementById("id-escondeme");
	y.style.display="block";

	var gg= document.getElementById("cmb_evento");

	var itemSel= document.getElementById("cmb_evento").selectedIndex;
	
	//
	var txthr= document.getElementById("txtHorario");
	txthr.value=DESITNOS_JSON[itemSel].horario;
	var txtfe= document.getElementById("txtFecha");
	txtfe.value = DESITNOS_JSON[itemSel].fecha;
}

function reservarDestino(nro){



}


