import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    // createRef must be added to JSX Element ---> can access to DOM Element
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    // callback after load the image
    this.imageRef.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    // access to image height
    let height = this.imageRef.current.clientHeight;
    let spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
