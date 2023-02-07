import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { GiphyViewer } from './GiphyViewer.jsx';
import * as actions from '../actions/giphyApiActions';
import { ImageModal } from './ImageModal.jsx';
import { shouldDisplayModal, getSelectedImage } from '../selectors/homePageSelectors';
import { Header } from './Header.jsx';
import _ from 'lodash';
import '../styles/homepage.scss';

export class HomePage extends React.Component {
  componentWillMount() {
    this.props.actions.fetchGifyResults();
  }

  render() {
    const { gifs, actions, headerOptions, show, selectedImage } = this.props;
    return (
      <Grid className="homepage-grid">
        <Row>
          <Header headerOptions={headerOptions} updateFilter={actions} />
        </Row>
        <Row>
          <Col className="viewer-col" xs={12}>
            <GiphyViewer images={gifs} actions={actions} />
          </Col>
        </Row>
            <ImageModal show={show} selectedImage={selectedImage} modalUpdate={actions.updateModal}/>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.shape({ fetchGifyResults: PropTypes.func, updateModalState: PropTypes.func }),
  updateFilter: PropTypes.func,
  currentFilter: PropTypes.string,
  offset: PropTypes.number,
  disabled: PropTypes.bool,
  show: PropTypes.bool,
  selectedImage: PropTypes.object,
  headerOptions: PropTypes.shape({ currentFilter: PropTypes.string, disabled: PropTypes.bool, offset: PropTypes.number }),
  gifs: PropTypes.array
};

HomePage.defaultProps = {
  selectedImage: {}
};

const mapStateToProps = (state) => {
  const { show = false, imageId = '' } = _.get(state, 'modal', {});
  const gifs = _.get(state, 'gifs', []);
  const offset = _.get(state, 'offset', null);
  const currentFilter = _.get(state, 'filter', '');
  const disabled = offset<=0 ? true : false;
  const headerOptions = { currentFilter, disabled, offset };
  const selectedImage = getSelectedImage(imageId, show, gifs);
  return { gifs, headerOptions, show, selectedImage };
};

const mapDispatchToProps = (dispatch) => {
  return {
     actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
