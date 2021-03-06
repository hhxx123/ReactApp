import { connect } from "react-redux";
import Footer from "../components/Footer";
import { setFilter } from "../actions";
import {getFilter} from '../selectors'

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
    setVisibilityFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
