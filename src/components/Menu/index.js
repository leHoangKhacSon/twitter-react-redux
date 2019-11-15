import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Menu({ menu }) {
  const { menuLogo, menuItems, menuButton } = menu;
  return (
    <div className="menu">
      <div className="menu-logo">
        <a href="/">
          <i className={menuLogo}></i>
        </a>
      </div>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <a href="/" className="menu-list-item" key={index}>
            <div className="menu-list-item-content">
              <i className={item.itemIcon}></i>
              <span className="menu-list-item-title">
                {item.itemName}
              </span>
            </div>
          </a>
        ))}
      <div className="menu-btn">
        <a href="/">
          {menuButton}
        </a>
      </div>
    </div>
  </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.shape({
    menuLogo: PropTypes.string,
    menuItems: PropTypes.arrayOf(
      PropTypes.shape({
        itemIcon: PropTypes.string,
        itemName: PropTypes.string
      })
    ),
    menuButton: PropTypes.string
  })
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(Menu);
