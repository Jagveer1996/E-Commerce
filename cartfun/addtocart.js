const product = [
    {
        id: 0,
        image: '../images/category-1.jpg', 
        title: 'Z flip T-Shirt',
        price: 120,
    },

    {
        id: 1,
        image: '../images/category-2.jpg', 
        title: 'Red T-Shirt',
        price: 60,
    },

    {
        id: 2,
        image: '../images/category-3.jpg', 
        title: 'Z flip T-Shirt',
        price: 220,
    },

    {
        id: 3,
        image: '../images/category-1.jpg', 
        title: 'Winter T-Shirt',
        price: 150,
    },

    
];

const catagories = [...new Set(product.map((item) => {return item }))]
    let i=0;
document.getElementById('root').innerHTML = catagories.map((item) => {
    var {image, title, price} = item;
    return(
        `
        <div class='box'>
            <div class ='img-box'>
                <img class='images' src = ${image}></img>
            </div>
        
            <div class='bottom'>
                <p>${title}</p>
                <h2> $ ${price}.00</h2>` +
                "<button onclick='addtocart("+(i++)+")'> Add to cart</button>" +
                `</div>
                </div>`
    ) 
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...catagories[a]});
    displaycart();
}

function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty;";
    }else{
        document.getElementById("carItem").innerHTML = cart.map((items) =>{
            var {image, title, price} = items;
            return(
                `<div class='cart-item'>
                <div class = 'row-img'>
                    <img class='rowing' src = ${image}>
                </div>
                <p style = 'font-size:12px;'>${title}</p>
                <h2 style = 'font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")></i></div>"
            );
        }).join('');
    }

}