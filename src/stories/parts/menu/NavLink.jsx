import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const NavLink = ({ active, icon, iconActive, label, className,  ...props }) => {
  const mode = active ? 'navlink navlink--active': "navlink";
  return (
    <li
      type="button"
     
      {...props}
    >
      <a href="#"  className={`${mode}  ${className? className: ""}`} > 

      {props.profilePicture? 
      <img src={props.profilePicture} className={`${props.profilePicture? "profile-icon": ""}` } alt={label}/>
      :<img src={active? iconActive: icon} alt={label}/>
    }
        
      <span className="label"> {label}</span>
      </a>
      
    </li>
  );
};

NavLink.propTypes = {

  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconActive: PropTypes.string.isRequired

};

NavLink.defaultProps = {
  active: false,
  label: "",
  icon: "",
  iconActive: ""

};
