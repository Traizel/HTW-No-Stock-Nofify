import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Main.css'
import MUITable from "../MUITable/MUITable";
import Button from "react-bootstrap/Button";
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import FlagIcon from "@material-ui/icons/Flag";
import QueueIcon from "@material-ui/icons/Queue";
import swal from "sweetalert";
import Box from '@material-ui/core/Box';
import DeleteIcon from "@material-ui/icons/Delete";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';


function Main () {

  const items = useSelector(store => store.item.itemlist);
  const display = useSelector(store => store.item.displayState);
  const isChecked = useSelector(store => store.item.setView);
  const checkedList = useSelector(store => store.item.addChecked);
  const trackChecked = useSelector(store => store.item.trackChecked);
  const [reason, setReason] = React.useState('temp');
  const [note, setNote] = React.useState('');
  const dispatch = useDispatch();

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

  const changeReason = (dataIndex, check) => {
    dispatch({
      type: "CHANGE_REASON",
      payload: {
        id: deadItems[dataIndex].id,
        reason: check,
      },
    });
  }

  const addDeadInventory = (e) => {
    setReason(e.target.value);
  }


  const updateCheckbox = (dataIndex, checkChecked) => {
    dispatch({
      type: "SET_CHECKED",
      payload: checkChecked,
    });
    dispatch({
        type: "ADD_TO_CHECKED",
        payload: { item: newItems[dataIndex].id, checked: checkChecked}
      });
    dispatch({
        type: "ADD_TO_TRACKED",
        payload: { data: dataIndex, checked: checkChecked}
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
    item.notes,
    item.sku,
    item.id,
    item.level,
    moment(item.date).format("MMM Do YY"),
  ]);

  const di = deadItems.map((item) => [
    item.name,
    item.notes,
    item.sku,
    item.id,
    item.level,
    item.reason,
    moment(item.date).format("MMM Do YY"),
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
    <section className="nav">
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
          if (!checkedList[0]) {
            swal("You need to select at least 1 Item!");
          } else {
          dispatch({
            type: "MARK_STOCKED",
            payload: {
              items: checkedList,
            },
          });
          for (let trackItem of trackChecked) {
            document.getElementById(trackItem).checked = false;
          }
      swal("Marking Items as Stocked!");
      dispatch({
        type: "CLEAR_TRACKING",
          });
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
          if (!checkedList[0]) {
            swal("You need to select at least 1 Item!");
          } else {
          dispatch({
            type: "MARK_STOCKED",
            payload: {
              items: checkedList,
            },
          });
          for (let trackItem of trackChecked) {
            document.getElementById(trackItem).checked = false;
          }
      swal("Deleting Items!");
      dispatch({
        type: "CLEAR_TRACKING",
          });
        }
      }
    }
    ><DeleteIcon/> Delete</Button>
    {isChecked
    ?
    <>
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Dead Inventory</InputLabel>
          <Select
          className="dead-inventory"
          value={reason}
          label="Dead Inventory"
          onChange={(e) => {addDeadInventory(e)}}
          >
            <MenuItem value={'new'}>New</MenuItem>
            <MenuItem value={'temp'}>Temp</MenuItem>
            <MenuItem value={'unused'}>Unused</MenuItem>
            <MenuItem value={'backorder'}>Backorder</MenuItem>
            <MenuItem value={'clothing'}>Clothing</MenuItem>
          </Select>
        </FormControl>
    </Box>
    <Button 
      variant = "contained"
      color = "primary"
      onClick = {
        (e) => {
          e.preventDefault();
          if (!checkedList[0]) {
            swal("You need to select at least 1 Item!");
          } else {
            dispatch({
              type: "MARK_DEAD",
              payload: {
                items: checkedList,
                reason: reason,
              },
            });
            for (let trackItem of trackChecked) {
              document.getElementById(trackItem).checked = false;
            }
            swal("Marking Items as Dead Inventory!");
            dispatch({
              type: "CLEAR_TRACKING",
            });
        }
      }
    }
    ><QueueIcon/> Dead Inventory</Button>
    </>
    :
    <>
    <Button
      variant="contained"
      color="primary"
      onClick={(event) => {
        event.preventDefault();
        dispatch({
        type: "UNMARK_DEAD",
        payload: {
         items: checkedList,
        },
        });
        swal("Okay! These are now unmarked as dead inventory!");
        for (let trackItem of trackChecked) {
            document.getElementById(trackItem).checked = false;
          }
        }}
      >
     <QueueIcon /> Unmark Dead
     </Button>
    </>
    }
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <TextField value={note} onChange={(e) => {setNote(e.target.value)}}/>
    </FormControl>
    <Button
      variant="contained"
      color="primary"
      onClick={(event) => {
        event.preventDefault();
        if (checkedList[0]) {
        dispatch({
         type: "UPDATE_NOTES",
         payload: {
           items: checkedList,
           note: note,
         },
        });
          swal("Notes Updated!");
          setNote('');
          for (let trackItem of trackChecked) {
            document.getElementById(trackItem).checked = false;
          }
        } else {
          swal('Select at least 1 item!');
        }
        }}
    >
     <QueueIcon /> Add Note
    </Button>
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
    </section>
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
                            let checkChecked = document.getElementById(dataIndex)
                              .checked;
                            updateCheckbox(dataIndex, checkChecked);
                          }
                        }
                        >
                        </input>
                      );
                    },
                  },
                },
                { name: "Name",
                  options: {
                    filter: false,
                  }
                },
                { name: "Notes",
                  options: {
                    filter: false,
                  }
                },
                { name: "SKU", 
                  options: {
                    filter: false,
                  }
                },
                { name: "ID",
                  options: {
                    filter: false,
                  }
                },
                { name: "Level" },
                { name: "Date" },
              ]}
              title={""} //give the table a name
              />
      :
      <>
      <MUITable
              data={di} //brings in data as an array, in this case, list of items
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
                            let checkChecked = document.getElementById(dataIndex)
                              .checked;
                            updateCheckbox(dataIndex, checkChecked);
                          }
                        }
                        >
                        </input>
                      );
                    },
                  },
                },
                { name: "Name",
                  options: {
                    filter: false,
                  }
                },
                { name: "Notes",
                  options: {
                    filter: false,
                  }
                },
                { name: "SKU",
                  options: {
                    filter: false,
                  }
                },
                { name: "ID",
                  options: {
                    filter: false,
                  }
                },
                { name: "Level" },
                { name: "Reason", 
                  options: {
                    display: false,
                  },
                },
                { name: "Date" },
                {
                  name: "Reason",
                  options: {
                    filter: false,
                    sort: false,
                    empty: true,
                    customBodyRenderLite: (dataIndex, rowIndex) => {
                      return (
                        <FormControl component="fieldset">
                            <FormLabel component="legend"></FormLabel>
                        <RadioGroup
                          variant="contained"
                          aria-label="Reason"
                          value={deadItems[dataIndex].reason}
                          name="controlled-radio-buttons-group"
                          color="secondary"
                          onClick={(event) => {
                            event.preventDefault();
                            let click = event.target.value;
                            changeReason(dataIndex, click);
                          }}
                        >
                          <FormControlLabel value="new" control={<Radio />} label="New" />
                          <FormControlLabel value="backorder" control={<Radio />} label="Backorder" />
                          <FormControlLabel value="clothing" control={<Radio />} label="Clothing" />
                          <FormControlLabel value="temp" control={<Radio />} label="Temp" />
                          <FormControlLabel value="unused" control={<Radio />} label="Unused" />
                        </RadioGroup>
                        </FormControl>
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
