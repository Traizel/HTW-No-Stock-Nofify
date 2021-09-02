import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import MUITable from "../MUITable/MUITable";
import { Paper, TextField } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import FlagIcon from "@material-ui/icons/Flag";
import QueueIcon from "@material-ui/icons/Queue";
import swal from "sweetalert";
//import { response } from "express";

// This component is for new
class New extends Component {

  componentDidMount() {
    //get all new stock items with 0 stock
    this.props.dispatch({
      type: "GET_ITEM_LIST",
    });
  }

  render() {
    //defines the dataselector to know which items to preform actions on
    return (
      <>
      <h2>HI</h2>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  itemlist: state.item.itemlist,
});
export default connect(mapStateToProps)(New);
