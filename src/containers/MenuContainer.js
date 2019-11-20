import { connect } from 'react-redux';

import Menu from '../components/Menu';

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(Menu);
