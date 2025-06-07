
import productos from "../data/products";

export default function ItemListContainer({greeting, onAdd}) {
    return (
    <div>
        <h1>{greeting}</h1>
        <div className="product-list">
            {productos.map((producto)=>(
            <div key={producto.id}>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>${producto.precio} </p>
                <button onClick={() => onAdd(producto) 
                }>Agregar al carrito </button>

            </div>
            )
            )}
        </div>
    </div>
    );
}