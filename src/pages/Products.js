import React from "react";
import { Link } from "react-router-dom";
import ProductRoute from "src/routes/ProductsRoute";
import { useSelector, useDispatch } from "react-redux";
import actionsProduct from "src/redux/actions/products";
const Products = ({ match }) => {
  const { data: productsData } = useSelector(state => state.Product)
  const dispatch = useDispatch()
  const linkList = productsData.map(product => {
    return (
      <li key={product.id}>
        <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <button onClick={()=>dispatch(actionsProduct())}>dispatch</button>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "30%",
            background: "#f0f0f0",
            marginLeft: "auto"
          }}
        >
          <h3> Products</h3>
          <ul style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}>
            {" "}
            {linkList}{" "}
          </ul>
        </div>
      </div>
      <ProductRoute match={match} data={productsData} />
    </div>
  );
};

export default Products;
