const initialState = {
  menuLogo: 'fab fa-twitter fa-2x',
  menuItems: [
    {
      itemIcon: 'menu-item-icon fas fa-home',
      itemName: 'Home'
    },
    {
      itemIcon: 'menu-item-icon fas fa-hashtag',
      itemName: 'Explore'
    },
    {
      itemIcon: 'menu-item-icon fas fa-bell',
      itemName: 'Notifications'
    },
    {
      itemIcon: 'menu-item-icon fas fa-envelope',
      itemName: 'Messages'
    },
    {
      itemIcon: 'menu-item-icon fas fa-bookmark',
      itemName: 'Bookmarks'
    },
    {
      itemIcon: 'menu-item-icon fas fa-list-ol',
      itemName: 'Lists'
    },
    {
      itemIcon: 'menu-item-icon fas fa-user-circle',
      itemName: 'Profile'
    },
    {
      itemIcon: 'menu-item-icon fas fa-ellipsis-h',
      itemName: 'More'
    }
  ],
  menuButton: 'Tweet'
}

const menu = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menu;