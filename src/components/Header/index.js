import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

import { getUserIsLoggedIn } from "../../state/authorization/selectors";
import { userLogout } from "../../state/authorization/actions";

function Header({ isLoggedIn, dispatch }) {
  const handleLogOutClick = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    dispatch(userLogout());
  };

  return (
      <div>
        {
          !isLoggedIn
              ? (
                  <Link to={ '/login' }>
                    <Button>
                      Authorization
                    </Button>
                  </Link>
              )
              : <button onClick={ handleLogOutClick }>Log Out</button>
        }
      </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: getUserIsLoggedIn(state),
});

export default connect(mapStateToProps)(Header);