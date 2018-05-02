import React, { PropTypes } from 'react';
import { Button, Modal, Thumbnail } from 'react-bootstrap';
import './../styles/ImageModal.scss';
import _ from 'lodash';

export class ImageModal extends React.Component {

    closeModal() {
      const { modalUpdate } = this.props;
      modalUpdate(false, '');
    }

    render() {
      const { show, selectedImage } = this.props;
      let thumbNail;
         if(_.isNil(selectedImage.images)) {
            thumbNail =  <Thumbnail className="image-thumnails" href="/404" />;
          } else {
            thumbNail = <Thumbnail className="image-thumnails" src={selectedImage.images.downsized.url} />;
         }

      return (
            <div>
              <Modal className="image-modal" show={show}>
                <Modal.Body>
                  {thumbNail}
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                  <Button className="modal-button btn btn-warning" onClick={this.closeModal.bind(this)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
        );
    }
}

ImageModal.propTypes = {
    location: PropTypes.func,
    selectedImage: PropTypes.object,
    modalUpdate: PropTypes.func,
    show: PropTypes.bool
};

ImageModal.defaultProps = {
  selectedImage: {}
};


export default ImageModal;
