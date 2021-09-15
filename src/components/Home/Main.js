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
  console.log(items);
  const dispatch = useDispatch();
  let view = 0;

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
                            const id = newItems[dataIndex].id;
                            dispatch({
                              type: "MARK_STOCKED",
                              payload: {
                                id: id,
                              },
                            });
                            swal("Sounds good! We will remove this one!");
                          }}
                        >
                          <FlagIcon /> Mark as Stocked
                        </Button>
                      );
                    },
                  },
                },
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
                            const id = newItems[dataIndex].id;
                            dispatch({
                              type: "MARK_DEAD",
                              payload: {
                                id: id,
                              },
                            });
                            swal("This one is now marked as dead inventory!");
                          }}
                        >
                          <QueueIcon /> Dead Inventory
                        </Button>
                      );
                    },
                  },
                },
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
