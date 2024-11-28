const products = [
    {
        id: 1,
        name: "cuaderno tapa blanda", 
        price: 12950,
        category: "cuadernos",
        img: "/assets/img/cuadernoTapaDura.webp",
        description : "descpicion"
    },
    {
        id: 2,
        name: "cuaderno ejecutivo",
        price: 13400,
        category: "cuadernos",
        img: "/assets/img/cuadernoexecutive.webp",
        description: "descpicion"
    },
    {
        id: 3,
        name: "cuaderno Univercitario",
        price: 18000,
        category: "cuadernos",
        img: "/assets/img/cuadernoUniversitario1.webp",
        description: "descpicion"
    },
    {
        id: 4,
        name: "cuaderno tapa flexible",
        price: 3750,
        category: "cuadernos",
        img: "/assets/img/cuadernoTapaFlexible.webp",
        description: "descpicion"
    },
    {
        id: 5,
        name: "cuaderno tapa plastica",
        price: 7500,
        category: "cuadernos",
        img: "/assets/img/cuadernoTapaPlastica.webp",
        description: "descpicion"
    },
    {
        id: 6,
        name: "cuaderno escolar",
        price: 3750,
        category: "cuadernos",
        img: "/assets/img/cuadernoEscolar.webp",
        description: "descpicion", 
    },
    {
        id: 7,
        name: "cuaderno escolar con lunares",
        price: 3750,
        category: "cuadernos",
        img: "/assets/img/cuadernoLunares.jpg",
        description : "descpicion"
    },
    {
        id: 8,
        name: "cuaderno ecologico",
        price: 7250,
        category: "cuadernos",
        img: "/assets/img/cuadernoEcologico.webp",
        description: "descpicion"
    },
    {
        id: 9,
        name: "block dibujo blanco",
        price: 3290,
        category: "hojas",
        img: "/assets/img/blockDibujoBlanco.webp",
        description: "descpicion"
    },
    {
        id: 10,
        name: "block dibujo color",
        price: 10900,
        category: "hojas",
        img: "/assets/img/blockDibujoColor.webp",
        description : "descpicion"
    },
    {
        id: 11,
        name: "block dibujo fluo",
        price: 7230,
        category: "hojas",
        img: "/assets/img/blockDibujoFluo.webp",
        description : "descpicion"
    },
    {
        id: 12,
        name: "block dibujo kawaii",
        price: 5790,
        category: "hojas",
        img: "/assets/img/blockDibujoKawaii.webp",
        description: "descpicion"
    },
    {
        id: 13,
        name: "block dibujo Negro",
        price: 3890,
        category: "hojas",
        img: "/assets/img/blockDibujoNegro.webp",
        description : "descpicion"
    },
    {
        id: 14,
        name: "block dibujo pastel",
        price: 5790,
        category: "hojas",
        img: "/assets/img/blockDibujoPastel.webp",
        description : "descpicion"
    },
    {
        id: 15,
        name: "block dibujo patrio",
        price:5790,
        category: "hojas",
        img: "/assets/img/blockDibujoPatrio.webp",
        description : "descpicion"
    },
    {
        id: 16,
        name: "block hojas Ecologicas",
        price: 3580,
        category: "hojas",
        img: "/assets/img/blockHojasEcologicas.webp",
        description : "descpicion"
    },
    {
        id: 17,
        name: "boligrafo azul",
        price: 890,
        category: "boligrafos",
        img: "/assets/img/boligrafoAzul.webp",
        description : "descpicion"
    },
    {
        id: 18,
        name: "boligrafo colores",
        price: 9580,
        category: "boligrafos",
        img: "/assets/img/boligrafoColores.webp",
        description : "descpicion"
    },
    {
        id: 19,
        name: "boligrafo fino",
        price: 970,
        category: "boligrafos",
        img: "/assets/img/boligrafoFino.webp",
        description : "descpicion"
    },
    {
        id: 20,
        name: "boligrafo retactril",
        price: 3790,
        category: "boligrafos",
        img: "/assets/img/boligrafoRetractil1.webp",
        description: "descpicion",
    },
    {
        id: 21,
        name: "boligrafo retractil colores",
        price: 4280,
        category: "boligrafos",
        img: "/assets/img/boligrafoRetractil.webp",
        description : "descpicion"
    },
    {
        id: 22,
        name: "lapicera Borrable",
        price: 5350,
        category: "boligrafos",
        img: "/assets/img/lapiceraBorrable.webp",
        description: "descpicion"
    },
    {
        id: 23,
        name: "lapicera roller",
        price: 2170,
        category: "boligrafos",
        img: "/assets/img/lapiceraRoller.webp",
        description: "descpicion"
    },
    {
        id: 24,
        name: "lapicera Roller colores",
        price: 3200,
        category: "boligrafos",
        img: "/assets/img/lapiceraRollerColor.webp",
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