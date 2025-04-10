interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}


function ProductCard(prod: Product) {
    return (
        <div className="product-card" id={prod.id}>
            <h2>{prod.name}</h2>
            <p>{prod.description}</p>
            <p>Price: ${prod.price}</p>
        </div>
    );
}

export default ProductCard;
export type { Product };