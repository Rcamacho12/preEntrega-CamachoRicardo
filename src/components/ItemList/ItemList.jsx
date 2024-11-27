import Item from "../Item/Item";

export default function ItemList({ products }) {
    return (
        <div className="row">
        {products.map((product) => (
            <div className="col-md-3 mb-3" key={product.id}>
            <Item {...product} />
            </div>
        ))}
        </div>
    );
}
