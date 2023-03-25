import { PropTypes } from 'prop-types';
import css from './SearchBar.module.css';

export const Searchbar = ({ onSubmit }) => (
  <header className={css.search_bar}>
    <form className={css.search_form} onSubmit={onSubmit}>
      <button type="submit" className={css.button_search}>
        <span className={css.button_label}>Search</span>
      </button>

      <input
        name="inputForSearch"
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.protoTypes = {
  onSubmit: PropTypes.func,
};
