const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    
    <div class="nav">
    <img src="img/dark-logo.png" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="./img/user.png" alt=""></a>
                <a href="#"><img src="./img/cart.png" alt=""></a>
            </div>
    </div>
            <ul class="link-container">
                <li class="link-items"><a href="#" class="link">Home</a></li>
                <li class="link-items"><a href="#" class="link">Women</a></li>
                <li class="link-items"><a href="#" class="link">Men</a></li>
                <li class="link-items"><a href="#" class="link">Kids</a></li>
                <li class="link-items"><a href="#" class="link">Accessories</a></li>
            </ul>

    `;
}

createNav();