  import _ from 'lodash';

  export const shouldDisplayModal = (pathName) => {
    let show = pathName === '/' ? false : true;
    return show;
  };

  export const getSelectedImage = (imageId, show, gifs) => {
    if(show) {
      return _.find(gifs, (image) => ( imageId === image.id ));
    } else {
      return {};
    }
  };
