
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  PackageSearch,
} from "lucide-react";

import products from "../data/products";
import "../styles/products.css";

const categories = [
  "All Products",
  "Laboratory Equipment",
  "Medical Equipment",
  "Industrial Machinery",
  "Safety Equipment",
  "IT Equipment",
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="products-page">

      {/* HERO */}
      <section className="products-hero">
        <div className="products-hero-overlay"></div>

        <div className="products-container products-hero-content">
          <span className="products-eyebrow">
            OUR EQUIPMENT CATALOGUE
          </span>

          <h1>
            Explore Our
            <span> Products & Equipment</span>
          </h1>

          <p>
            Discover engineering, laboratory, medical, industrial,
            safety and IT equipment for professional applications.
          </p>

          <div className="products-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="products-catalogue products-section">
        <div className="products-container">

          <div className="products-heading">
            <div>
              <span className="products-label">PRODUCT DIRECTORY</span>
              <h2>Browse Our Equipment</h2>
              <p>
                Search our product catalogue or select a category
                to explore available product information.
              </p>
            </div>
          </div>

          {/* SEARCH */}
          <div className="products-search">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search equipment, products or categories..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search products"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          {/* CATEGORY FILTERS */}
          <div className="products-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* RESULTS HEADER */}
          <div className="products-results-header">
            <p>
              Showing <strong>{filteredProducts.length}</strong>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>

            <span>Browse our equipment range</span>
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>

                  <Link
                    to={`/products/${product.id}`}
                    className="product-image"
                  >
                    <img src={product.image} alt={product.name} />
                    <span className="product-category">
                      {product.category}
                    </span>
                  </Link>

                  <div className="product-card-content">
                    <h3>{product.name}</h3>

                    <p>{product.description}</p>

                    <div className="product-card-footer">
                      <Link to={`/products/${product.id}`}>
                        View Details <ArrowRight size={16} />
                      </Link>

                      <Link
                        to="/contact"
                        className="product-enquire"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>

                </article>
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <PackageSearch size={45} />
              <h3>No Products Found</h3>
              <p>
                We couldn't find a product matching your search.
                Try another keyword or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Products");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <div className="products-container products-cta-content">
          <div>
            <span className="products-label">NEED SOMETHING SPECIFIC?</span>
            <h2>Can't Find the Equipment You're Looking For?</h2>
            <p>
              Send us your product specifications or equipment requirements.
              We'll be happy to receive your enquiry.
            </p>
          </div>

          <Link to="/contact" className="products-cta-button">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Products;
