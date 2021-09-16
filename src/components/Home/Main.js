import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Main.css'
import MUITable from "../MUITable/MUITable";
import Button from "react-bootstrap/Button";
import { Paper, TextField } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Switch from '@material-ui/core/Switch';
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import FlagIcon from "@material-ui/icons/Flag";
import QueueIcon from "@material-ui/icons/Queue";
import swal from "sweetalert";
import ItemList from './ItemList';
//import { response } from "express";


function Main () {

  const items = useSelector(store => store.item.itemlist);
  const display = useSelector(store => store.item.displayState);
  const isChecked = useSelector(store => store.item.setView);
  const checkedList = useSelector(store => store.item.addChecked);
  const dispatch = useDispatch();
  let checkboxChecked = false;

  useEffect(() => {
    dispatch({
      type: "GET_ITEM_LIST",
    });
  }, [])
    //get all new stock items with 0 stock
  let newItems = [];
  let deadItems = [];

  for (let item of items) {
    if (item.dead) {
      deadItems.push(item);
    } else {
      newItems.push(item);
    }
  }

  const updateCheckbox = (event) => {
    dispatch({
      type: "SET_CHECKED",
      payload: checkboxChecked,
    });
    dispatch({
        type: "ADD_TO_CHECKED",
        payload: { item: newItems[event].id, checked: checkboxChecked}
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    dispatch({
      type: "SET_VIEW",
      payload: event.target.checked,
    });
  };

  const ni = newItems.map((item) => [
    item.name,
    item.sku,
    item.id,
    item.level,
  ]);

  const di = deadItems.map((item) => [
    item.name,
    item.sku,
    item.id,
    item.level,
  ]);
    //defines the dataselector to know which items to preform actions on
    return (
      <>
      {display
      ?
      <>
      <br></br>
      <br></br>
      <br></br>
      <Button 
      variant = "contained"
      color = "primary"
      onClick = {
        (event) => {
          event.preventDefault();
          dispatch({
            type: "UPDATE_ITEMS",
          });
      swal("Refreshing Zero Stock..");
        }
      }
      ><AssignmentTurnedInIcon/> Refresh</Button>
      <Button 
      variant = "contained"
      color = "primary"
      onClick = {
        (event) => {
          event.preventDefault();
          if (!checkedList[1]) {
            swal("You need to select at least 1 Item!");
          } else {
          dispatch({
            type: "MARK_STOCKED",
            payload: {
              items: checkedList,
            },
          });
      swal("Marking Items as Stocked!");
        }
      }
    }
      ><FlagIcon/> Mark as Stocked</Button>
      <Button 
      variant = "contained"
      color = "primary"
      onClick = {
        (event) => {
          event.preventDefault();
          if (!checkedList[1]) {
            swal("You need to select at least 1 Item!");
          } else {
          dispatch({
            type: "MARK_DEAD",
            payload: {
              items: checkedList,
            },
          });
      swal("Marking Items as Stocked!");
        }
      }
    }
      ><QueueIcon/> Dead Inventory</Button>
      <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          checked={isChecked}
          control={<Switch color="primary" onChange={(e)=>handleChange(e)} />}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          label="Switch Inventories"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
      <>
      {isChecked
      ?
      <MUITable
              data={ni} //brings in data as an array, in this case, list of items
              columns={[
                //names the columns found on MUI table
                {
                  name: "",
                  options: {
                    filter: false,
                    sort: false,
                    empty: true,
                    customBodyRenderLite: (dataIndex, rowIndex) => {
                      return (
                        <input
                          type="checkbox"
                          id={dataIndex}
                          style={{ cursor: "pointer", width: 50, height: 50 }}
                          name=""
                          value=""
                          onClick = {(event) => {
                            updateCheckbox(dataIndex);
                          }
                        }
                        >
                        </input>
                      );
                    },
                  },
                },
                { name: "Item Name" },
                { name: "Item SKU" },
                { name: "Item ID" },
                { name: "Level" },
              ]}
              title={""} //give the table a name
              />
      :
      <>
      <MUITable
              data={di} //brings in data as an array, in this case, list of items
              columns={[
                //names the columns found on MUI table
                { name: "Item Name" },
                { name: "Item SKU" },
                { name: "Item ID" },
                { name: "Level" },
                {
                  name: "",
                  options: {
                    filter: false,
                    sort: false,
                    empty: true,
                    customBodyRenderLite: (dataIndex, rowIndex) => {
                      return (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(event) => {
                            event.preventDefault();
                            const id = deadItems[dataIndex].id;
                            dispatch({
                              type: "UNMARK_DEAD",
                              payload: {
                                id: id,
                              },
                            });
                            swal("Okay! This one is now unmarked as dead inventory!");
                          }}
                        >
                          <QueueIcon /> Unmark Dead
                        </Button>
                      );
                    },
                  },
                },
              ]}
              title={""} //give the table a name
              />
      </>
      }
      </>
      </>
      :
      <>
      <br></br>
      <br></br>
      <br></br>
      <div className="loader"></div>
      </>
      }
      </>
    )
  }

export default Main;
