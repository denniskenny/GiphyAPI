import React, { PropTypes } from 'react';
import { GiphyView } from './GiphyView.jsx';

export class GiphyViewer extends React.Component {
  render() {
    const { images, actions } = this.props;
    return (
      <div>
        {
          images.map((image) => (
            <GiphyView key={image.id} image={image} actions={actions} />
          ))
        }
      </div>
    );
  }
}
GiphyViewer.propTypes = {
  images: PropTypes.array,
  actions: PropTypes.shape({ updateModalState: PropTypes.func })
};

GiphyViewer.defaultProps = {
  images: []
};

export default GiphyViewer;
