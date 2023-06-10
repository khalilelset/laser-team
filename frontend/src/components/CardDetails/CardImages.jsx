import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import LeftButton from './LeftButton';
import RightButton from './RightButton';
import productImage from "../../assets/images/products/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium.jpg";
const CardImages = () => {
    const images = [
        {
            original: `${productImage}`,
        },
        {
            original: `${productImage}`,
        },
        {
            original: `${productImage}`,
        },
    ];
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={productImage}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                // renderRightNav={RightButton}
                // renderLeftNav={LeftButton}
            />
        </div>
  )
}

export default CardImages
