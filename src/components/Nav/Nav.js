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
  state = {
    toggle: false,
    //changes colors of navbar when toggled, used to identify which queue we are in
    backgroundcolor: "#000080",
    backgroundcolorclass: "nav-link",
    activebackgroundcolorclass: "active-nav-link",
    order_number: "",
  };

  handleChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value }); //sets to value of targeted event
  }; //end handleChange

  render() {
    return (
      <Grid container style={{}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          style={{ backgroundColor: "white", width: "15%", float: "left" }}
        >
          {/*HTW logo at top*/}
          <img
            src="https://cdn11.bigcommerce.com/s-et4qthkygq/images/stencil/177x60/htwlogo_web_1573140308__59565.original.png"
            alt="HTW logo"
          ></img>
        </Grid>
        <></>
        {LogOutButton}
      </Grid>
    );
  }
}
//grab the count of all of the queues
const mapStateToProps = (state) => ({
  user: state.user,
  itemlist: state.item.itemlist,
  customitemlist: state.item.customitemlist,
  progresslist: state.item.progresslist,
  confirmlist: state.item.confirmlist,
  respondlist: state.item.respondlist,
  completelist: state.item.completelist,
  customcompletelist: state.item.customcompletelist,
  itemlistcount: state.item.itemlistcount,
  customitemlistcount: state.item.customitemlistcount,
  progresslistcount: state.item.progresslistcount,
  confirmlistcount: state.item.confirmlistcount,
  respondlistcount: state.item.respondlistcount,
  approvelistcount: state.item.approvelistcount,
  completelistcount: state.item.completelistcount,
  customcompletelistcount: state.item.customcompletelistcount,
});

export default connect(mapStateToProps)(Nav);
