import { useEffect, useState } from "react";

import styles from "./gallery.module.css";

import GalleryCard from "./GalleryCard";


export default function GallerySection() {

  const [galleryImages, setGalleryImages] =
    useState([]);


  useEffect(() => {

    const fetchGalleryImages =
      async () => {

        try {

          const response = await fetch(
            "http://localhost:8000/gallery"
          );

          const data = await response.json();

          setGalleryImages(data);

        } catch (error) {

          console.log(error);
        }
      };

    fetchGalleryImages();

  }, []);


  return (

    <section className={styles.gallerySection}>

      <div className="container">

        <div className={styles.galleryHeader}>

          <h2>
            A Glimpse into Aether Dental
          </h2>

          <p>
            Discover our state-of-the-art
            facilities designed for your
            comfort and premium dental care
            experience.
          </p>

        </div>


        <div className={styles.galleryGrid}>

          {galleryImages.map((item) => (

            <GalleryCard
              key={item._id}
              image={`http://localhost:8000/uploads/${item.image}`}
              type={item.type}
            />

          ))}

        </div>

      </div>

    </section>
  );
}