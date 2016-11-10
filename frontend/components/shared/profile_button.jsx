import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileButton = (props) => {
  const closeDropDown = () => {
    $(document).click(e => {
      e.stopPropagation();
      let dropdown = $(".dropdown-content");

      if (dropdown.has(e.target).length === 0) {
        dropdown.hide();
      }
    });
  };

  const toggleDropDown = () => {
    let dropdown = $(".dropdown-content");
    dropdown.removeClass("hidden");
    dropdown.mouseout(() => dropdown.addClass("hidden"));
    $(document).click(e=> {
      if ($(e.target).attr("class") === "dropdown-content") {
        e.stopPropagation();
      } else {
        dropdown.addClass("hidden");
      }
    });
  };

  const logout = () => {
    props.logout();
    props.router.push('/');
  };

  return (
    <div className="profile">
      <button onClick={toggleDropDown}><h6>{props.currentUser.username}</h6></button>
      <div className="dropdown-content hidden">
        <div className="options">
          <Link
            className="profile-link"
            to={`/users/${props.currentUser.id}`}>Profile</Link>
        </div>
        <div>
          <Link
            className="logout"
            onClick={logout}>Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;