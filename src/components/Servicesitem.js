function ServicesItem({ category, image, title, description }) {
  return (
    <div className={`column ${category}`}>
      <div className="content">
        <img src={image} alt={title} style={{ width: "100%" }} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ServicesItem;