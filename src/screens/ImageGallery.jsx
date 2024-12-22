import React, { useEffect, useState } from "react";
import "../screens/ImageGallery.css";
import Footer from "../components/Footer";
import AutoPlaySlider from "../components/SliderCard";

const ImageGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Track selected image index

  const fetchGallery = async () => {
    try {
      const response = await fetch(
        "https://sonimotors.themerchantinc.com/api/gallery?page_size=100"
      );
      const data = await response.json();
      if (data.status && data.data?.galley) {
        const images = data.data.galley.map((item) => item.media[0]);
        setGallery(images);
      } else {
        console.error("Failed to load gallery images.");
      }
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Function to handle navigation
  const handleNavigation = (direction) => {
    if (direction === "prev") {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? gallery.length - 1 : selectedImageIndex - 1
      );
    } else if (direction === "next") {
      setSelectedImageIndex(
        selectedImageIndex === gallery.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "10px 0",
          fontSize: "34px",
          fontWeight: "bold",
        }}
      >
        Our <span style={{ color: "red" }}>Media</span> Gallery
      </h1>

      <div className="img-gallery-main">
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading images...</p>
        ) : (
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div
                className="gallery-item"
                key={index}
                onClick={() => setSelectedImageIndex(index)} // Open modal on image click
              >
                <img
                  src={image.original_url}
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {selectedImageIndex !== null && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={gallery[selectedImageIndex].original_url}
              alt={`Gallery Image ${selectedImageIndex + 1}`}
              className="modal-image"
            />
            <button
              className="nav-btn prev-btn"
              onClick={() => handleNavigation("prev")}
            >
              &#10094;
            </button>
            <button
              className="nav-btn next-btn"
              onClick={() => handleNavigation("next")}
            >
              &#10095;
            </button>
            <button
              className="close-btn"
              onClick={() => setSelectedImageIndex(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <section className="px-5 py-20">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            SONI AUTO MARKETS ON <span className="text-red-500">TikTok</span>
          </h2>
          <p className="text-gray-600">
            We are committed to making you a long-lasting customer and friend
          </p>
        </div>

        <AutoPlaySlider />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default ImageGallery;
