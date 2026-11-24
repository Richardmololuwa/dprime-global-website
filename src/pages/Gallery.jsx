import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import galleryItems from "../data/gallery";
import "../styles/gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <span className="gallery-eyebrow">OUR GALLERY</span>
          <h1>Our Work in Pictures</h1>
          <p>
            Explore equipment, installations, and project moments from
            D’ PRIME Global Ltd.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-heading">
          <span className="gallery-eyebrow">A CLOSER LOOK</span>
          <h2>Gallery</h2>
          <p>
            A collection of images showcasing the equipment and solutions
            we provide.
          </p>
        </div>

        {galleryItems.length > 0 && (
          <div className="gallery-filters" aria-label="Filter gallery images">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {filteredItems.length > 0 ? (
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <button
                className="gallery-card"
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gallery-card-caption">
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            <ImageIcon size={38} strokeWidth={1.5} />
            <h3>Photos coming soon</h3>
            <p>
              We’re preparing images to share more of our equipment and work.
              Please check back soon.
            </p>
          </div>
        )}
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-lightbox-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              {selectedImage.description && <p>{selectedImage.description}</p>}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;