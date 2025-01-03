import { useCart } from "../Context/CartContext.jsx";

    export default function Checkout() {
    const { cart, removeFromCart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    if (cart.length === 0) {
        return <div className="text-center my-4">El carrito está vacío.</div>;
    }

    return (
        <div className="container my-4">
        <h2>Carrito de compras</h2>
        <ul className="list-group my-3">
            {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                <h5>{item.name}</h5>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price * item.quantity}</p>
                </div>
                <button
                className="btn btn-danger"
                onClick={() => handleRemove(item.id)}
                >
                Quitar
                </button>
            </li>
            ))}
        </ul>
        <h4>Total: ${total}</h4>
        <button className="btn btn-success">Finalizar compra</button>
        </div>
    );
    }
