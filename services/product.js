const products = [
    {
        id: 1,
        name: "Black Watch",
        price: "500tk",
        image: require('../assets/products/blackWatch.jpeg'),
        description: 'N/A'
    },
    {
        id: 2,
        name: "White Watch",
        price: "700tk",
        image: require('../assets/products/whiteWatch.jpg'),
        description: 'N/A'
    },
    {
        id: 3,
        name: "Curren Watch",
        price: "5000tk",
        image: require('../assets/products/curren1.jpg'),
        description: 'N/A'
    },
    {
        id: 4,
        name: "Ladis Watch",
        price: "1500tk",
        image: require('../assets/products/ladis1.jpg'),
        description: 'N/A'
    },
    {
        id: 5,
        name: "Curren Watch 2",
        price: "2500tk",
        image: require("../assets/products/curren2.jpg"),
        description: 'N/A'
    }
];

export function getProducts(){
    return products;
}

export function getProduct(productId){
    return products.find((product) => product.id ==productId);
}