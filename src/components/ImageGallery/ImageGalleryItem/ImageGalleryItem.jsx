import { PropTypes } from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => (
  <li className={css.imageGalleryItem} id={image.id} onClick={onClick}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      className={css.imageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
