const openCart = document.getElementById('open-cart');
(function(){ 
    
    const cartBtn= document.getElementById('cart-info');
    cartBtn.addEventListener('click', displayCart);
    function displayCart() {
        openCart.classList.toggle('display-cart');
    }

})();

(function(){

    const addTocartBtn = document.querySelectorAll('.product-item-icon');
    addTocartBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if(event.target.parentElement.classList.contains('product-item-icon')){

         let cartImgUrl = event.target.parentElement.previousElementSibling.src
        const cartItemObj = {};
                cartItemObj.img = cartImgUrl;
         let cartItemName = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                cartItemObj.name = cartItemName;
         let cartItemPrice = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

         
        let newPrice = cartItemPrice.slice(1);
                cartItemObj.price = newPrice;
        const productItem = document.createElement('div');
                productItem.classList.add(
                    'cart-item', 
                    'd-flex', 
                    'justify-content-between', 
                    'text-capitalize', 
                    'my-3'
                );
                productItem.innerHTML =
                `<!-- single cart item -->
                <!-- <div class="cart-item d-flex justify-content-between text-capitalize my-3"> -->
                    <img src="${cartImgUrl}" alt="" class="img-fluid rounded-circle cart-img" id="item-img">
                
                    <div class="item-text">
                        <p id="cart-item-title">${cartItemName}</p>
                        <span>Dt</span>
                    <span id="cart-item-price" class="cart-item-price">${newPrice}</span>
                    </div>
                    
                    <a href="#" class="cart-item-remove" id="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </a>
                <!-- </div> -->`;
               
        const total = document.querySelector('.cart-total')
                openCart.insertBefore(productItem, total);
                showTotal();               
            }
        })
    });

    function showTotal() {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach((item) => {
            total.push(parseFloat(item.textContent));
        });
        const money = total.reduce((total,item) => {
            total += item;
            return total
            
        })
        const finalMoney = money.toFixed(2);

        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;
    }


})();

(function(){
    
})();