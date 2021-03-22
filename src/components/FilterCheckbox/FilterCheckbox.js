import "../FilterCheckbox/FilterCheckbox.css";
import { withRouter } from "react-router-dom";

function FilterCheckbox() {
  return (
    <div className="filter__checkbox-container">
      <label htmlFor="checkbox" className="filter__checkbox-switch">
        <input type="checkbox" id="checkbox" className="filter__checkbox" />
        <span className="filter__checkbox-slider"></span>
      </label>
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}

export default withRouter(FilterCheckbox);
