import React from 'react';
import { connect } from 'react-redux';

import Menu from '../components/Menu';

function MenuContainer({ menu }) {
  return (
    <Menu menu={menu}/>
  )
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(MenuContainer);
