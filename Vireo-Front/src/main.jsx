import { useState } from "react";
import ProductCard from "./components/productCard";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Café Orgánico Premium",
      description:
        "Café de origen colombiano, tostado artesanalmente con notas de chocolate",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      stock: 15,
    },
    {
      id: 2,
      name: "Té Verde Matcha",
      description: "Matcha japonés de primera calidad, rico en antioxidantes",
      price: 18.5,
      image:
        "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400",
      stock: 8,
    },
    {
      id: 3,
      name: "Miel Pura",
      description: "Miel artesanal 100% natural de colmenas locales",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784054?w=400",
      stock: 0,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#283518",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div className="container">
        <h1
          style={{
            color: "#FFF9DC",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Mis Productos
        </h1>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <ProductCard
                product={product}
                onProductClick={setSelectedProduct}
              />
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div
            className="alert mt-4"
            style={{ backgroundColor: "#FFF9DC", border: "2px solid #697A3D" }}
          >
            <strong>Clickeaste:</strong> {selectedProduct.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
