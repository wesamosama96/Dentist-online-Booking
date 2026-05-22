import styles from "./gallery.module.css";

export default function GalleryCard({
  image,
  type,
}) {

  return (

    <div
      className={`
        ${styles.galleryCard}

        ${type === "large"
          ? styles.largeCard
          : ""}

        ${type === "medium"
          ? styles.mediumCard
          : ""}

        ${type === "small"
          ? styles.smallCard
          : ""}

        ${type === "tall"
          ? styles.tallCard
          : ""}
      `}
    >

      <img
        src={image}
        alt="gallery"
      />

    </div>
  );
}