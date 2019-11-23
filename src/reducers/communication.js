const inititalState = {
  1: {
    id: 1,
    icon: 'fas fa-search',
    text: 'Keep track of your interests'
  },
  2: {
    id: 2,
    icon: 'fas fa-user-friends',
    text: 'Listen to the content people are discussing'
  },
  3: {
    id: 3,
    icon: 'far fa-comment-alt',
    text: 'Join the conversation'
  }
}

const communication = (state = inititalState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default communication;