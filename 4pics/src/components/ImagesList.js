import "./ImagesList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImagesList = (props) => {
  const image = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="images-list">{image}</div>;
};

export default ImagesList;
