import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

// import mobile2 from '../../assets/img/mobile2.png'
import pro6 from '../../assets/image/product/productd/productd6.jpg'
import pro8 from '../../assets/image/product/productd/productd8.webp'
import pro10 from '../../assets/image/product/productd/productd10.jpg'
// import mobile2 from '../../assets/image/craft/craftc/craftc10.jpg'
// import mobile3 from '../../assets/image/craft/craftd/craftd8.jpg'
// import mobile3 from '../../assets/image/craft/craftc/craftc3.jpg'
import ReactImageGallery from "react-image-gallery";

const ProductDetalis = () => {
  const images = [
    {
        original: `${pro8}`,
    },
    {
        original: `${pro6}`,
    },
    {
        original: `${pro10}`,
    },
];
console.log(images);

  return (


    
    <div>
      <Row className="py-3">
        <Col lg="4">
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2" style={{marginTop:'50px'}}>
            <ReactImageGallery items={images}
                defaultImage={pro8}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                // renderRightNav={RightButton}
                // renderLeftNav={LeftButton}
            />
        </div>
        </Col>

        <Col lg="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetalis;
