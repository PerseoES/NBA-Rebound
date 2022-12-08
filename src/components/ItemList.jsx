const ItemList = () => {
return(
    <section>
    <h2>Productos de la tienda</h2>
    <div class="card estilo-c">
        <a href="#">
            <div class="img-container">
                <img src="" />
                <span class="promo">15% de descuento</span>
            </div>
        </a>
        <div class="info-container">
            <h3>Remera Nike - Jordan</h3>
            <strong>$XX</strong>
            <span class="rating">★★★★☆</span>
            <a href="#" class="add-cart">Añadir al carrito</a>
        </div>
    </div>
    <div class="card estilo-c">
        <a href="#">
            <div class="img-container">
                <img src="#" />
                <span class="promo">15% de descuento</span>
            </div>
        </a>
        <div class="info-container">
            <h3>Kyrie Irving 3</h3>
            <strong>$XX</strong>
            <span class="rating">★★★☆☆</span>
            <a href="#" class="add-cart">Añadir al carrito</a>
        </div>
    </div>
    <div class="card estilo-c">
        <a href="#">
            <div class="img-container">
                <img src="" />
                <span class="promo">15% de descuento</span>
            </div>
        </a>
        <div class="info-container">
            <h3>Pelota Spalding TF-500</h3>
            <strong>$XX</strong>
            <span class="rating">★★★★★</span>
            <a href="#" class="add-cart">Añadir al carrito</a>
        </div>
    </div>
</section>
)
}

export default ItemList ();
