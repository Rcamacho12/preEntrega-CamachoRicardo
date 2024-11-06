

function CartWidget() { 
    return (
        <>
            <button type="button" className="btn btn-secondary position-relative"  data-bs-theme="dark">
                <i className="bi bi-cart"> </i>
                Carrito 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </>
    )   
}
export default CartWidget