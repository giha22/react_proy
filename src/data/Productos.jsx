const productos = [
    {
        id: "1",
        nombre: "Media Homero Simpson",
        precio: 1500,
        categoria: "cartoon",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media divertida con diseño de Homero Simpson"
    },
    {
        id: "2",
        nombre: "Media Rick and Morty",
        precio: 1600,
        categoria: "cartoon",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media psicodélica con Rick y Morty"
    },
    {
        id: "3",
        nombre: "Media Rick and Morty",
        precio: 1600,
        categoria: "cartoon",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media psicodélica con Rick y Morty"
    },
    {
        id: "4",
        nombre: "Media Star Wars",
        precio: 1800,
        categoria: "pelis",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media galáctica de Star Wars"
    },
    {
        id: "5",
        nombre: "Media Star Wars",
        precio: 1800,
        categoria: "pelis",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media galáctica de Star Wars"
    },
    {
        id: "6",
        nombre: "Media Star Wars",
        precio: 1800,
        categoria: "pelis",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media galáctica de Star Wars"
    },
    {
        id: "7",
        nombre: "Media Messi Selección",
        precio: 2000,
        categoria: "futbol",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media edición Messi campeón del mundo"
    },
    {
        id: "8",
        nombre: "Media Messi Selección",
        precio: 2000,
        categoria: "futbol",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media edición Messi campeón del mundo"
    }, {
        id: "9",
        nombre: "Media Messi Selección",
        precio: 2000,
        categoria: "futbol",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media edición Messi campeón del mundo"
    },
    {
        id: "10",
        nombre: "Media Bandera Argentina",
        precio: 1400,
        categoria: "argentinidad",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media patriótica con la bandera"
    },
    {
        id: "11",
        nombre: "Media Bandera Argentina",
        precio: 1400,
        categoria: "argentinidad",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media patriótica con la bandera"
    },
    {
        id: "12",
        nombre: "Media Bandera Argentina",
        precio: 1400,
        categoria: "argentinidad",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media patriótica con la bandera"
    },
    {
        id: "13",
        nombre: "Media Negra Clásica",
        precio: 1000,
        categoria: "gringolandia",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media lisa, negra, para cualquier ocasión"
    },
    {
        id: "14",
        nombre: "Media Negra Clásica",
        precio: 1000,
        categoria: "aburridas",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media lisa, negra, para cualquier ocasión"
    },
    {
        id: "15",
        nombre: "Media Negra Clásica",
        precio: 1000,
        categoria: "aburridas",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media lisa, negra, para cualquier ocasión"
    },
    {
        id: "16",
        nombre: "Media Negra Clásica",
        precio: 1000,
        categoria: "aburridas",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/030/019/402/small/studio-shot-of-an-adorable-cat-photo.jpg",
        descripcion: "Media lisa, negra, para cualquier ocasión"
    }
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos), 1000);
    });
};

export const getProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const prod = productos.find(p => p.id === id);
            prod ? resolve(prod) : reject("Producto no encontrado");
        }, 1000);
    });
};

export default productos;