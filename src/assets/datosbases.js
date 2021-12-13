//Galletas

const { db } = require("../../servicio/models/Contactanos")

// {
//     "nombre_producto": "Avenana",
// 	   "rama" = "Potajes"
//     "categoria": "Galletas",
// 	   "data_producto": [
//         			    {"presentacion": "Pequeñas x 10", "precio": 6500, "cantidad": 120},
//         			    {"presentacion": "Medianas x 8", "precio": 8500, "cantidad": 150}
//         			    ]
// },



{
	"_id": "p1",
    "nombre_producto": "Avenana",
	"rama" = "Potajes",
    "categoria": "Galletas",
	"data_producto": [
        {"presentacion": "Pequeñas x 10", "precio": 6500, "cantidad": 120},
        {"presentacion": "Medianas x 8", "precio": 8500, "cantidad": 150}
    ]		    
},

{	"_id": "p2",
	"nombre_producto": "Vainilla",
	"rama": "Potajes",
	"categoria": "Galletas",
	"data_producto":[
		{"presentacion": "Pequeñas x 10", "precio": 7000, "cantidad": 500},
		{"presentacion": "Medianas x 8", "precio": 10500, "cantidad": 20}
	]
},

{
	"_id": "p3",
	"nombre_producto": "Banani",
	"rama": "Potajes",
	"categoria": "Galletas",
	"data_producto":[
		{"presentacion": "Pequeñas x 10", "precio": 7500, "cantidad": 0},
		{"presentacion": "Medianas x 8", "precio": 10500, "cantidad": 10}
	]
},

{
	"_id": "p4",
	"nombre_producto": "Browneta",
	"rama": "Potajes",
	"categoria": "Galletas",
	"data_producto":[
		{"presentacion": "Pequeñas x 10", "precio": 8500, "cantidad": 50},
		{"presentacion": "Medianas x 8", "precio": 12500, "cantidad": 100}
	]
},

{
	"_id": "p5",
	"nombre_producto": "Miel",
	"rama": "Potajes",
	"categoria": "Galletas",
	"data_producto": [
		{"presentacion": "Pequeñas x 10", "precio": 9000, "cantidad": 22},
		{"presentacion": "Medianas x 8", "precio": 14000, "cantidad": 10}
	]
},

{
	"_id": "p6",
	"nombre_producto": "Cobana",
	"rama": "Potajes",
	"categoria": "Galletas",
	"data_producto":[
		{"presentacion": "Pequeñas x 10", "precio": 14000, "cantidad": 54},
		{"presentacion": "Medianas x 8", "precio": 23500, "cantidad": 33}
	]
},


//Bocaditos

// {
//     "nombre_producto": "Avenana",
//     "rama": "Potajes",
//     "categoria": "Galletas",
//     "data_producto": [
//             {"presentacion": " x 10", "precio": 6500, "cantidad": 120},
//     ]  
// }



{
	"_id": "p7",
	"nombre_producto": "Cacao",
	"rama": "Potajes",
	"categoria": "Bocaditos",
	"data_producto": [
		{"presentacion": " x10", "precio": 10500, "cantidad": 65}
	]
},

{
	"_id": "p8",
	"nombre_producto": "Avenanos" ,
	"rama": "Potajes",
	"categoria": "Bocaditos",
	"data_producto": [
		{"presentacion": " x10", "precio": 11000, "cantidad": 12}
	]
},

{
	"_id": "p9",
	"nombre_producto": "Maniel" ,
	"rama": "Potajes",
	"categoria": "Bocaditos",
	"data_producto": [
		{"presentacion": " x10", "precio": 11000, "cantidad": 0}
	]

},

//Granola

// {
// 	"nombre_producto": ,
// 	"rama": "Potajes",
// 	"categoria": "Granolas",
// 	"data_producto": [
// 		{"presentacion": "250gr", "precio": , "cantidad": },
// 		{"presentacion": "500gr", "precio": , "cantidad": }
// 	]
// }

{
	"_id": "p10",
	"nombre_producto": "Granola",
	"rama": "Potajes",
	"categoria": "Granolas" ,
	"data_producto": [
		{"presentacion": "250gr", "precio": 12000, "cantidad": 25},
		{"presentacion": "500gr", "precio": 20500, "cantidad": 30}
	]
},

//Barras

// {
// 	"nombre_producto": ,
// 	"rama": "Potajes",
// 	"categoria": "Barras de granola",
// 	"data_producto": [
// 		{"presentacion": " x4", "precio": , "cantidad": },
// 	]
// }

{
	"_id": "p11",
	"nombre_producto": "Triple A",
	"rama": "Potajes",
	"categoria": "Barras de granola",
	"data_producto": [
		{"presentacion": " x4", "precio": 9500, "cantidad": 5},
	]
},

{
	"_id": "p12",
	"nombre_producto": "Completa",
	"rama": "Potajes",
	"categoria": "Barras de granola",
	"data_producto": [
		{"presentacion": " x4", "precio": 9500, "cantidad": 15},
	]
},

{
	"_id": "p13",
	"nombre_producto": "Chocobarra",
	"rama": "Potajes",
	"categoria": "Barras de granola",
	"data_producto": [
		{"presentacion": " x4", "precio": 9500, "cantidad": 12},
	]
},

//Untables

{
// 	"nombre_producto": ,
// 	"rama": "Potajes",
// 	"categoria": "Untables",
// 	"data_producto": [
// 		{"presentacion": " 28gr", "precio": 4500, "cantidad": 10},
// 		{"presentacion": " 200gr", "precio": 10500, "cantidad": 26}
// 	]
// }

{
	"_id": "p14",
	"nombre_producto": "Mantequilla de maní",
	"rama": "Potajes",
	"categoria": "Untables",
	"data_producto": [
		{"presentacion": " 28gr", "precio": 4500, "cantidad": 10},
		{"presentacion": " 200gr", "precio": 10500, "cantidad": 26}
	]
},

//Otros
//Cajas
{
	"_id": "p15",
	"nombre_producto": "Caja de Regalo",
	"rama": "Potajes",
	"categoria": "Cajas",
	"data_producto": [
		{"presentacion": " 1", "precio": 65000, "cantidad": 10},
		{"presentacion": " 2", "precio": 55000, "cantidad": 10}
	]
},

//Chocodiscos
{
	"_id": "p16",
	"nombre_producto": "Chocodiscos",
	"rama": "Potajes",
	"categoria": "Chocodiscos",
	"data_producto": [
		{"presentacion": " x5", "precio": 7500, "cantidad": 3},
		{"presentacion": " x10", "precio": 12500, "cantidad": 8}
	]
},

//Pet Store

// {
//     "nombre_producto": "Avenana",
//     "rama": "Pet Shop",
//     "categoria": "",
// 	"data_producto": [
// 		{"presentacion": " ", "precio": 4500, "cantidad": 10},
// 		{"presentacion": " ", "precio": 10500, "cantidad": 26}
// 	]
// }

{
	"_id": "p17",
    "nombre_producto": "Arena Sanitaria",
    "rama": "Pet Shop",
    "categoria": "Arenas",
	"data_producto": [
		{"presentacion": " 2,27kg", "precio": 26000, "cantidad": 6},
		{"presentacion": " 4.5kg", "precio": 49500, "cantidad": 10}
		{"presentacion": " 7.7kg", "precio": 67000, "cantidad": 2}
	]
},

{
	"_id": "p18",
    "nombre_producto": "Bolas Compostables",
    "rama": "Pet Shop",
    "categoria": "Bolsas",
	"data_producto": [
		{"presentacion": " x30", "precio": 26000, "cantidad": 24},
		{"presentacion": " x60", "precio": 45000, "cantidad": 29}
	]
}

//Contacto

// {
// 	"nombre": ,
// 	"correo": ,
// 	"telefono": ,
// 	"mensaje":
// }

//JSON GRANDE
// db.inventario.insertMany(
// 	[{
// 		"_id": "p3",
// 		"nombre_producto": "Banani",
// 		"rama": "Potajes",
// 		"categoria": "Galletas",
// 		"data_producto":[
// 			{"presentacion": "Pequeñas x 10", "precio": 7500, "cantidad": 0},
// 			{"presentacion": "Medianas x 8", "precio": 10500, "cantidad": 10}
// 		]
// 	},

// 	{
// 		"_id": "p4",
// 		"nombre_producto": "Browneta",
// 		"rama": "Potajes",
// 		"categoria": "Galletas",
// 		"data_producto":[
// 			{"presentacion": "Pequeñas x 10", "precio": 8500, "cantidad": 50},
// 			{"presentacion": "Medianas x 8", "precio": 12500, "cantidad": 100}
// 		]
// 	},

// 	{
// 		"_id": "p5",
// 		"nombre_producto": "Miel",
// 		"rama": "Potajes",
// 		"categoria": "Galletas",
// 		"data_producto": [
// 			{"presentacion": "Pequeñas x 10", "precio": 9000, "cantidad": 22},
// 			{"presentacion": "Medianas x 8", "precio": 14000, "cantidad": 10}
// 		]
// 	},
	
// 	{
// 		"_id": "p6",
// 		"nombre_producto": "Cobana",
// 		"rama": "Potajes",
// 		"categoria": "Galletas",
// 		"data_producto":[
// 			{"presentacion": "Pequeñas x 10", "precio": 14000, "cantidad": 54},
// 			{"presentacion": "Medianas x 8", "precio": 23500, "cantidad": 33}
// 		]
// 	},

// 	{
// 		"_id": "p7",
// 		"nombre_producto": "Cacao",
// 		"rama": "Potajes",
// 		"categoria": "Bocaditos",
// 		"data_producto": [
// 			{"presentacion": " x10", "precio": 10500, "cantidad": 65}
// 		]
// 	},
	
// 	{
// 		"_id": "p8",
// 		"nombre_producto": "Avenanos" ,
// 		"rama": "Potajes",
// 		"categoria": "Bocaditos",
// 		"data_producto": [
// 			{"presentacion": " x10", "precio": 11000, "cantidad": 12}
// 		]
// 	},
	
// 	{
// 		"_id": "p9",
// 		"nombre_producto": "Maniel" ,
// 		"rama": "Potajes",
// 		"categoria": "Bocaditos",
// 		"data_producto": [
// 			{"presentacion": " x10", "precio": 11000, "cantidad": 0}
// 		]
	
// 	},

// 	{
// 		"_id": "p10",
// 		"nombre_producto": "Granola",
// 		"rama": "Potajes",
// 		"categoria": "Granolas" ,
// 		"data_producto": [
// 			{"presentacion": "250gr", "precio": 12000, "cantidad": 25},
// 			{"presentacion": "500gr", "precio": 20500, "cantidad": 30}
// 		]
// 	},

// 	{
// 		"_id": "p11",
// 		"nombre_producto": "Triple A",
// 		"rama": "Potajes",
// 		"categoria": "Barras de granola",
// 		"data_producto": [
// 			{"presentacion": " x4", "precio": 9500, "cantidad": 5},
// 		]
// 	},
	
// 	{
// 		"_id": "p12",
// 		"nombre_producto": "Completa",
// 		"rama": "Potajes",
// 		"categoria": "Barras de granola",
// 		"data_producto": [
// 			{"presentacion": " x4", "precio": 9500, "cantidad": 15},
// 		]
// 	},
	
// 	{
// 		"_id": "p13",
// 		"nombre_producto": "Chocobarra",
// 		"rama": "Potajes",
// 		"categoria": "Barras de granola",
// 		"data_producto": [
// 			{"presentacion": " x4", "precio": 9500, "cantidad": 12},
// 		]
// 	},

// 	{
// 		"_id": "p14",
// 		"nombre_producto": "Mantequilla de maní",
// 		"rama": "Potajes",
// 		"categoria": "Untables",
// 		"data_producto": [
// 			{"presentacion": " 28gr", "precio": 4500, "cantidad": 10},
// 			{"presentacion": " 200gr", "precio": 10500, "cantidad": 26}
// 		]
// 	},

// 	{
// 		"_id": "p15",
// 		"nombre_producto": "Caja de Regalo",
// 		"rama": "Potajes",
// 		"categoria": "Cajas",
// 		"data_producto": [
// 			{"presentacion": " 1", "precio": 65000, "cantidad": 10},
// 			{"presentacion": " 2", "precio": 55000, "cantidad": 10}
// 		]
// 	},

// 	{
// 		"_id": "p16",
// 		"nombre_producto": "Chocodiscos",
// 		"rama": "Potajes",
// 		"categoria": "Chocodiscos",
// 		"data_producto": [
// 			{"presentacion": " x5", "precio": 7500, "cantidad": 3},
// 			{"presentacion": " x10", "precio": 12500, "cantidad": 8}
// 		]
// 	},

// 	{
// 		"_id": "p17",
// 		"nombre_producto": "Arena Sanitaria",
// 		"rama": "Pet Shop",
// 		"categoria": "Arenas",
// 		"data_producto": [
// 			{"presentacion": " 2,27kg", "precio": 26000, "cantidad": 6},
// 			{"presentacion": " 4.5kg", "precio": 49500, "cantidad": 10},
// 			{"presentacion": " 7.7kg", "precio": 67000, "cantidad": 2}
// 		]
// 	},
	
// 	{
// 		"_id": "p18",
// 		"nombre_producto": "Bolas Compostables",
// 		"rama": "Pet Shop",
// 		"categoria": "Bolsas",
// 		"data_producto": [
// 			{"presentacion": " x30", "precio": 26000, "cantidad": 24},
// 			{"presentacion": " x60", "precio": 45000, "cantidad": 29}
// 		]
// 	}]
// )
