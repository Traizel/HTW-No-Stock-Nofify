import React, { Component } from "react";
import swal from "sweetalert";
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { Grid, TextField, Button } from "@material-ui/core";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import LoopIcon from "@material-ui/icons/Loop";
import EmailIcon from "@material-ui/icons/Email";
import ReplyIcon from "@material-ui/icons/Reply";
import HistoryIcon from "@material-ui/icons/History";
import EditIcon from "@material-ui/icons/Edit";
import ViewListIcon from "@material-ui/icons/ViewList";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

class Nav extends Component {

  render() {
    return (
      <>
          {/*HTW logo at top*/}
          <img
            src="https://cdn11.bigcommerce.com/s-et4qthkygq/images/stencil/177x60/htwlogo_web_1573140308__59565.original.png"
            alt="HTW logo"
          ></img>
        <LogOutButton />
      </>
    )
  }
}
//grab the count of all of the queues

export default Nav;
