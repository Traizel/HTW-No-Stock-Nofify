import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Main.css'
import MUITable from "../MUITable/MUITable";
import Button from "react-bootstrap/Button";
import { Paper, TextField } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import FlagIcon from "@material-ui/icons/Flag";
import QueueIcon from "@material-ui/icons/Queue";
import swal from "sweetalert";
import ItemList from './ItemList';
//import { response } from "express";


function Main () {

  const items = useSelector(store => store.item.itemlist);
  console.log(items);
  const dispatch = useDispatch();
  let list = <></>;


  useEffect(() => {
    dispatch({
      type: "GET_ITEM_LIST",
    });
  }, [])
    //get all new stock items with 0 stock
    
  //   if (items) {
  //     list = 
  //     <>
  //     {items.map(item => 
  // (<ItemList key={item.id} item={item}/>
  //       ))}
  //     </>
  //   } else {
  //     list = <></>
  //   }


  const i = items.map((item) => [
    item.name,
    item.sku,
    item.id,
    item.level,
  ]);
    //defines the dataselector to know which items to preform actions on
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      < Button 
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
      <MUITable
              data={i} //brings in data as an array, in this case, list of items
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
                            const id = items[dataIndex].id;
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
              ]}
              title={""} //give the table a name
              />
      {/* {//<table>
        <thead>
          <tr>
            <td>
              <p></p>
            </td>
            <td>
              <p></p>
            </td>
            <td>
              <p></p>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name</p>
            </td>
            <td>
              <p>SKU</p>
            </td>
            <td>
              <p>ID</p>
            </td>
            <td>
              <p>Delete</p>
            </td>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>} */}
      </>
    )
  }

export default Main;
