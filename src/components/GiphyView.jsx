import React, { PropTypes } from 'react';
import { Thumbnail, Col } from 'react-bootstrap';
import '../styles/giphyview.scss';
// import { ImageModal } from './ImageModal.jsx';
export class GiphyView extends React.Component {

    imageClick() {
      const { image, actions:{updateModal: updateModal} } = this.props;
      updateModal(true, image.id);
    }

    render() {
        const { image, actions } = this.props;
        // let show = false;
        return (
            <Col className="giphy-view" md={6}>
                <Thumbnail className="image-thumbnails" onClick={this.imageClick.bind(this)} src={image.images.fixed_height.url} />
            </Col>
        );
    }
}

GiphyView.propTypes = {
    image: PropTypes.shape({ images: PropTypes.object }),
    show: PropTypes.bool
};

export default GiphyView;
