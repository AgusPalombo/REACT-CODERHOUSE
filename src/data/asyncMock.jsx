export const listadoProdutos=[
	{	id:1,
		category:"zapatillas",
		content:"",
		description:"Las zapatillas Nike Air Force 1 Shadow rinden homenaje a las mujeres que están dando ejemplo para la próxima generación al ser fuerzas de cambio en su comunidad. Estas zapatillas reflejan este espíritu en su diseño con el doble de swoosh, el doble de altura y el doble de fuerza.",		
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/37d2e58a-eff1-4264-8007-876fc894637e/air-force-1-07-zapatillas-J29nBv.png",		
        img2:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9de2efa3-5e50-4c07-aa4d-e6132e74e0de/air-force-1-07-zapatillas-J29nBv.png",
		name:"Zapatillas AF1 Shadow",
		price:25000,
		stock:5
	},
	{	id:2,
		category:"zapatillas",
		content:"",
		description:"Esta versión de las AJ1 permite seguir los pasos hacia la grandeza. Este diseño clásico de todos los tiempos se actualiza con texturas exquisitas y colores modernos, y ofrece la amortiguación Air de siempre en el empeine.",		
		img:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f7f4b382-6ecb-4a75-812a-322d9fc60317/air-jordan-1-mid-se-zapatillas-nino-a-Z7Rh1B.png",		
        img2:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1de9f333-221b-4955-9aad-d3fac5e1591e/air-jordan-1-mid-se-zapatillas-nino-a-Z7Rh1B.png",
		name:"Zapatillas AJ1",
		price:23400,
		stock:4
	},
		{ id:3,
		category:"remeras",
		content:"",
		description:"Obtén la calidad que mereces con esta camiseta Swingman. Brillante dentro y fuera de la cancha, ¡ningún aficionado a la NBA puede estar sin ella!",		
		img:"https://images.footballfanatics.com/miami-heat/miami-heat-nike-city-edition-swingman-jersey-tyler-herro-youth_ss4_p-13300352+u-ukt7spppsrkesif7kqc5+v-c450a264cd4d4e949cbc315c28240e22.jpg?_hv=1&w=900",		
        img2:"https://images.footballfanatics.com/miami-heat/miami-heat-nike-city-edition-swingman-jersey-tyler-herro-youth_ss4_p-13300352+pv-2+u-ukt7spppsrkesif7kqc5+v-9b7e52a390ca434e87bb3f9d3a1295c3.jpg?_hv=1&w=900",
		name:"Camiseta Miami Heat city edition Tyler Herro '14' ",
		price:9000,
		stock:2
	},
		{id:4,
		category:"remeras",
		content:"",
		description:"Camiseta Nike de la NBA Swingman Lakers Lebron James",		
		img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/019acd9b-fd80-4ddd-902d-4b96e28a0671/lebron-james-lakers-camiseta-de-la-nba-swingman-HFQS0T.png",		
        img2:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/cd430d2e-7973-4a39-a698-fec91173bf1d/lebron-james-lakers-camiseta-de-la-nba-swingman-HFQS0T.png",
		name:"Camiseta Lakers Mamba edition Lebron James '23'",
		price:12000,
		stock:2
	},
		{id:5,
		category:"remeras",
		content:"",
		description:"Warriors Icon Edition Camiseta Nike Swingman de la NBA",		
		img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ff50ee77-053c-4d83-9b51-980752e6e85a/warriors-icon-edition-camiseta-nba-swingman-nino-a-22VQBL.png",		
        img2:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/66a390cc-5540-48d7-a1e8-5e1bbb5ae16f/warriors-icon-edition-camiseta-nba-swingman-nino-a-22VQBL.png",
		name:"Camiseta Golden State Warriors Local Stephen Curry '30'",
		price:10000,
		stock:7
	},
		{id:6,
		category:"zapatillas",
		content:"",
		description:"nspiradas en las Nike Air Max 90, las Nike Air Max Excee rinden homenaje a un clásico con un nuevo enfoque. Las líneas alargadas y las proporciones distorsionadas de la parte superior llevan el look de los 90 que tanto te gusta a un espacio nuevo y moderno.",		
		img:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lddanijntooidcnakfzc/air-max-excee-zapatillas-st8Vwj.png",		
        img2:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/k7ou3r7jre3xb54hvnrx/air-max-excee-zapatillas-st8Vwj.png",
		name:"Nike Air Max Excee Zapatillas - Hombre",
		price:27000,
		stock:7
	}
]

/* Promesa para obtener productos (todos o los de su categoría) */
export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? listadoProdutos.filter(prod => prod.category === categoryId) : listadoProdutos)
        }, 1000)
    })
}

/* Promesa para obtener el producto por el Id */
export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(listadoProdutos.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}