import { connect } from 'react-redux';

import SignupBlock from '../components/SignupBlock';

const mapStateToProps = state => {
  return {
    signupBlock: state.signupBlock
  }
}

export default connect(mapStateToProps)(SignupBlock);