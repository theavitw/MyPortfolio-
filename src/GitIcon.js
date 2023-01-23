import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import {FaTwitter} from "react-icons/fa"
const Icon = ({ fontSize, color }) => {
  return (
    <>
      <IconContext.Provider value={{ style: { fontSize, color } }}>
        <div><FaTwitter/></div>
      </IconContext.Provider>
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  fontSize: '25px',
  color: '#00acee',
};

export default Icon;