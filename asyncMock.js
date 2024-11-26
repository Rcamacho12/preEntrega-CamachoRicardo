const products = [
    {
        id: 1,
        name: "cuaderno tapa blanda", 
        price: 12950,
        category: "cuadernos",
        imagen: "./assets/img/cuadernoTapaDura.webp",
        description : "descpicion"
    },
    {
        id: 2,
        name: "cuaderno ejecutivo",
        price: 13400,
        category: "cuadernos",
        imagen: "./assets/img/cuadernoexecutive.webp",
        description: "descpicion"
    },
    {
        id: 3,
        name: "cuaderno Univercitario",
        price: 18000,
        category: "cuadernos",
        imagen: "./assets/img/cuadernoUniversitario1.webp",
        description: "descpicion"
    },
    {
        id: 4,
        name: "cuaderno tapa flexible",
        price: 3750,
        category: "cuadernos",
        imagen: "./assets/img/cuadernoTapaFlexible.webp",
        description: "descpicion"
    },
    {
        id: 5,
        name: "cuaderno tapa plastica",
        price: 7500,
        category: "cuadernos",
        imagen: "./assets/img/cuadernoTapaPlastica.webp",
        description: "descpicion"
    },
    {
        id: 6,
        name: "cuaderno escolar",
        price: 3750,
        category: "cuadernos",
        imagen: "./assets/img/cuadernoEscolar.webp",
        description: "descpicion", 
    },
    {
        id: 7,
        name: "cuaderno escolar con lunares",
        price: 3750,
        category: "cuadernos",
        imagen: "./assets/img/cuadernoLunares.jpg",
        description : "descpicion"
    },
    {
        id: 8,
        name: "cuaderno ecologico",
        price: 7250,
        category: "cuadernos",
        imagen: "./assets/img/cuadernoEcologico.webp",
        description: "descpicion"
    },
    {
        id: 9,
        name: "block dibujo blanco",
        price: 3290,
        category: "hojas",
        imagen: "./assets/img/blockDibujoBlanco.webp",
        description: "descpicion"
    },
    {
        id: 10,
        name: "block dibujo color",
        price: 10900,
        category: "hojas",
        imagen: "./assets/img/blockDibujoColor.webp",
        description : "descpicion"
    },
    {
        id: 11,
        name: "block dibujo fluo",
        price: 7230,
        category: "hojas",
        imagen: "./assets/img/blockDibujoFluo.webp",
        description : "descpicion"
    },
    {
        id: 12,
        name: "block dibujo kawaii",
        price: 5790,
        category: "hojas",
        imagen: "./assets/img/blockDibujoKawaii.webp",
        description: "descpicion"
    },
    {
        id: 13,
        name: "block dibujo Negro",
        price: 3890,
        category: "hojas",
        imagen: "./assets/img/blockDibujoNegro.webp",
        description : "descpicion"
    },
    {
        id: 14,
        name: "block dibujo pastel",
        price: 5790,
        category: "hojas",
        imagen: "./assets/img/blockDibujoPastel.webp",
        description : "descpicion"
    },
    {
        id: 15,
        name: "block dibujo patrio",
        price:5790,
        category: "hojas",
        imagen: "./assets/img/blockDibujoPatrio.webp",
        description : "descpicion"
    },
    {
        id: 16,
        name: "block hojas Ecologicas",
        price: 3580,
        category: "hojas",
        imagen: "./assets/img/blockHojasEcologicas.webp",
        description : "descpicion"
    },
    {
        id: 17,
        name: "boligrafo azul",
        precio: 890,
        category: "boligrafos",
        imagen: "./assets/img/boligrafoAzul.webp",
        description : "descpicion"
    },
    {
        id: 18,
        name: "boligrafo colores",
        price: 9580,
        category: "boligrafos",
        imagen: "./assets/img/boligrafoColores.webp",
        description : "descpicion"
    },
    {
        id: 19,
        name: "boligrafo fino",
        price: 970,
        category: "boligrafos",
        imagen: "./assets/img/boligrafoFino.webp",
        description : "descpicion"
    },
    {
        id: 20,
        name: "boligrafo retactril",
        price: 3790,
        category: "boligrafos",
        imagen: "./assets/img/boligrafoRetractil1.webp",
        description: "descpicion",
    },
    {
        id: 21,
        name: "boligrafo retractil colores",
        price: 4280,
        category: "boligrafos",
        imagen: "./assets/img/boligrafoRetractil.webp",
        description : "descpicion"
    },
    {
        id: 22,
        name: "lapicera Borrable",
        price: 5350,
        category: "boligrafos",
        imagen: "./assets/img/lapiceraBorrable.webp",
        description: "descpicion"
    },
    {
        id: 23,
        name: "lapicera roller",
        price: 2170,
        category: "boligrafos",
        imagen: "./assets/img/lapiceraRoller.webp",
        description: "descpicion"
    },
    {
        id: 24,
        name: "lapicera Roller colores",
        price: 3200,
        category: "boligrafos",
        imagen: "./assets/img/lapiceraRollerColor.webp",
        description: "descpicion"
    }

];

// obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2500);
    });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 2500);
    });   
};

// obtener un solo producto por id
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 2500);
    });
};