import React from "react";

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div
      className="card h-100 shadow-sm"
      onClick={() => onProductClick(product)}
      style={{
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        borderColor: "#697A3D",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(105, 122, 61, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <img
        src={product.image || "https://via.placeholder.com/300x200"}
        className="card-img-top"
        alt={product.name}
        style={{
          height: "200px",
          objectFit: "cover",
          borderBottom: "2px solid #697A3D",
        }}
      />

      <div
        className="card-body d-flex flex-column"
        style={{ backgroundColor: "#FFF9DC" }}
      >
        <h5
          className="card-title"
          style={{ color: "#283518", fontWeight: "bold" }}
        >
          {product.name}
        </h5>

        <p
          className="card-text"
          style={{ color: "#697A3D", fontSize: "0.9rem" }}
        >
          {product.description?.substring(0, 60)}...
        </p>

        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span
              className="h4 mb-0"
              style={{ color: "#B56628", fontWeight: "bold" }}
            >
              ${product.price.toFixed(2)}
            </span>

            <span
              className="badge"
              style={{
                backgroundColor: product.stock > 0 ? "#697A3D" : "#B56628",
                color: "#FFF9DC",
              }}
            >
              {product.stock > 0 ? `Stock: ${product.stock}` : "Sin stock"}
            </span>
          </div>

          <button
            className="btn w-100"
            style={{
              backgroundColor: "#697A3D",
              color: "#FFF9DC",
              border: "none",
              fontWeight: "600",
            }}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
