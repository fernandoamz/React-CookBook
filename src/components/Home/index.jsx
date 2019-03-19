import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';

const Home = props => {
  const { isMobile } = props;
  return (
    <div className="Home">
      <h1>Home</h1>
      <p>
         You are using:
        <strong>{isMobile ? 'mobile' : 'desktop'}</strong>
      </p>
    </div>
  );
};

Home.propTypes = {
  isMobile: bool
};

/*
// First way to declare mapStateToProps
function mapStateToProps(state) {
  return {
    isMobile: state.device.isMobile
  };
}

// Second way to declare mapStateToProps
const mapStateToProps = ({ device }) => ({
    isMobile: device.isMobile
})

function mapDispatchToProps() {
  return {};
}
*/

// this is the easy way to declare mapStateToProps and mapDispatchToProps
export default connect(({ device }) => ({
    isMobile: device.isMobile
}), null)(Home);
