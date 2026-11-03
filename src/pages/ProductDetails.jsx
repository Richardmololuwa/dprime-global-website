
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import products from "../data/products";
import "../styles/product-details.css";

function ProductDetails() {
  const { id } = useParams();

  // Find the product whose ID matches the URL.
  const product = products.find((item) => item.id === id);

  // Handle invalid product URLs.
  if (!product) {
    return (
      <section className="product-not-found">
        <h1>Product Not Found</h1>
        <p>
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link to="/products" className="back-to-products">
          <ArrowLeft size={18} />
          Back to Products
        </Link>
      </section>
    );
  }

  // Find other products in the same category.
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.id !== product.id
    )
    .slice(0, 3);

  return (
    <main className="product-details-page">
      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Products</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      {/* Main Product Information */}
      <section className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-content">
          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="product-details-description">
            {product.description}
          </p>

          <div className="product-features">
            <h3>Key Features</h3>

            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <CheckCircle2 size={19} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="product-details-actions">
            <Link
              to="/request-quote"
              state={{ product: product.name }}
              className="product-quote-btn"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>

            <Link to="/products" className="continue-shopping">
              <ArrowLeft size={17} />
              Back to Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Product Information Note */}
      <section className="product-information-note">
        <h2>Need More Information?</h2>
        <p>
          Contact our team for product specifications, availability,
          pricing and assistance in selecting the right equipment for
          your requirements.
        </p>
        <Link to="/contact">
          Contact Our Team <ArrowRight size={17} />
        </Link>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <div className="related-products-heading">
            <div>
              <span>EXPLORE MORE</span>
              <h2>Related Products</h2>
            </div>

            <Link to="/products">
              View All Products <ArrowRight size={17} />
            </Link>
          </div>

          <div className="related-products-grid">
            {relatedProducts.map((item) => (
              <article className="related-product-card" key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="related-product-info">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <Link to={`/products/${item.id}`}>
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ProductDetails;
