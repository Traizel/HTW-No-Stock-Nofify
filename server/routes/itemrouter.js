const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require("axios");
const moment = require("moment");

let config = {
  //authenticate Big Commerce API
  headers: {
    "X-Auth-Client": process.env.BG_AUTH_CLIENT,
    "X-Auth-Token": process.env.BG_AUTH_TOKEN,
  },
};

let dateNow = moment().subtract(1, "days").format('YYYY-MM-DD')
let dateThen = moment().subtract(31, "days").format("YYYY-MM-DD");


setInterval(() => {
  dateNow = moment().format("YYYY-MM-DD");
  dateThen = moment().subtract(30, "days").format("YYYY-MM-DD");
}, 1000 * 60 * 60 * 24);

// router.get("/items", (req, res) => {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=1`,
//       config
//     )
//     .then(function (bcResponse1) {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=2`,
//       config
//     )
//     .then(function (bcResponse2) {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=3`,
//       config
//     )
//     .then(function (bcResponse3) {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=4`,
//       config
//     )
//     .then(function (bcResponse4) {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=5`,
//       config
//     )
//     .then(function (bcResponse5) {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=6`,
//       config
//     )
//     .then(function (bcResponse6) {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=7`,
//       config
//     )
//     .then(function (bcResponse7) {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=8`,
//       config
//     )
//     .then(function (bcResponse8) {
//   axios
//     .get(
//       `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=9`,
//       config
//     )
//     .then(function (bcResponse9) {
//       const queryText = `select * from "item" ORDER BY name DESC`;
//       pool
//         .query(queryText)
//         .then((itemResponse) => {
//       const queryText = `delete from "temp"`;
//       pool
//         .query(queryText)
//         .then((response) => {
//           let msg = '';
//       if (!itemResponse.rows[1]) {
//         console.log('Item Table Empty!');
//       } else {
//           for (let i = 0; i < itemResponse.rows.length; i++) {
//             let data = itemResponse.rows;
//             let bcItemName = data[i].name;
//             let bcItemSku = data[i].sku;
//             let bcItemInv = data[i].inventory_level;

//           if (i === data.length - 1) {
//             msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv});`);
//           } else {
//             msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}), `);
//           }
//         } 
//       }
//       let queryText = '';
//       if (msg === '') {
//         queryText = `select * from "item"`;
//       } else {
//         queryText = `INSERT INTO "temp" (name, sku, inventory_level) VALUES ${msg}`;
//       }
//       pool
//         .query(queryText)
//         .then((result) => {
//       const queryText = `select * from "temp" ORDER BY name DESC`;
//       pool
//         .query(queryText)
//         .then((tempResponse) => {
//           let msg = '';
//           let bcResponse = [];
//           for (item of bcResponse1.data.data) {
//           bcResponse.push(item);
//           }
//           for (item of bcResponse2.data.data) {
//           bcResponse.push(item);
//           }
//           for (item of bcResponse3.data.data) {
//           bcResponse.push(item);
//           }
//           for (item of bcResponse4.data.data) {
//           bcResponse.push(item);
//           }
//           for (item of bcResponse5.data.data) {
//           bcResponse.push(item);
//           }
//           for (item of bcResponse6.data.data) {
//           bcResponse.push(item);
//           }
//           for (item of bcResponse7.data.data) {
//           bcResponse.push(item);
//           }
//           for (item of bcResponse8.data.data) {
//           bcResponse.push(item);
//           }
//           for (item of bcResponse9.data.data) {
//           bcResponse.push(item);
//           }
//       for(let i = 0; i < bcResponse.length ; i++) {
//         if (bcResponse[i] !== []) {
//           // console.log(`BC Response #${i}`, bcResponse[i]);
//           console.log(bcResponse[i].name);
//           let bcItemName = bcResponse[i].name;
//           let bcItemSku = bcResponse[i].sku;
//           let bcItemInv = bcResponse[i].inventory_level;
//           console.log(itemResponse.rows[i].name);
//           console.log(tempResponse.rows[i].name);
//           if (!itemResponse.rows[1]) {
//             if (i === bcResponse.length - 1) {
//               msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv});`);
//             } else {
//               msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}), `);
//             }
//           } else {
//            // console.log(itemResponse.rows[i].name);
//            // console.log(tempResponse.rows[i].name);
//           if(i === bcResponse.length - 1 && tempResponse.rows[i].name !== itemResponse.rows[i].name) {
//           msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv});`);
//           }
//           else if(tempResponse.rows[i].name !== itemResponse.rows[i].name) {
//           msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}), `);
//           } else {
//             console.log('Already in Database!');
//           }
//         }
//       }
//     }
//       let queryText = '';
//       if (msg === '') {
//       queryText = `select * from "item"`;
//       } else {
//       queryText = `INSERT INTO "item" (name, sku, inventory_level) VALUES ${msg}`;
//       }
//       pool
//         .query(queryText)
//         .then((insertResult) => {
//           console.log("We are about to get the item list");

//           const queryText = `select * from "item" ORDER BY id DESC`;
//           pool
//             .query(queryText)
//             .then((selectResult) => {
//               res.send(selectResult.rows);
//             })
//             .catch((error) => {
//               console.log(`Error on item query ${error}`);
//               res.sendStatus(500);
//             });
//         })
//         .catch((error) => {
//           console.log(`Error on item query ${error}`);
//           res.sendStatus(500);
//           });
//         })
//         .catch((error) => {
//           console.log(`Error on item query ${error}`);
//           res.sendStatus(500);
//           });
//         })
//         .catch((error) => {
//           console.log(`Error on item query ${error}`);
//           res.sendStatus(500);
//           });
//         })
//         .catch((error) => {
//           console.log(`Error on item query ${error}`);
//           res.sendStatus(500);
//         });
//       })
//       .catch((error) => {
//         console.log(`Error on item query ${error}`);
//         res.sendStatus(500);
//       });
//     })
//     .catch((error) => {
//       console.log(`Error on item query ${error}`);
//       res.sendStatus(500);
//     });
//     })
//     .catch((error) => {
//       console.log(`Error on item query ${error}`);
//       res.sendStatus(500);
//     });
//     })
//     .catch((error) => {
//       console.log(`Error on item query ${error}`);
//       res.sendStatus(500);
//     });
//     })
//     .catch((error) => {
//       console.log(`Error on item query ${error}`);
//       res.sendStatus(500);
//     });
//     })
//     .catch((error) => {
//       console.log(`Error on item query ${error}`);
//       res.sendStatus(500);
//     });
//     })
//     .catch((error) => {
//       console.log(`Error on item query ${error}`);
//       res.sendStatus(500);
//     });
//     })
//     .catch((error) => {
//       console.log(`Error on item query ${error}`);
//       res.sendStatus(500);
//     });
//     })
//     .catch((error) => {
//       console.log(`Error on item query ${error}`);
//       res.sendStatus(500);
//     });
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//       res.sendStatus(500);
//     });
// });




router.get("/items", (req, res) => {
  axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=1`,
      config
    )
    .then(function (bcResponse1) {
      axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=2`,
          config
        )
        .then(function (bcResponse2) {
          axios
            .get(
              `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=3`,
              config
            )
            .then(function (bcResponse3) {
              axios
                .get(
                  `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=4`,
                  config
                )
                .then(function (bcResponse4) {
                  axios
                    .get(
                      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=2500&page=5`,
                      config
                    )
                    .then(function (bcResponse5) {
                      axios
                        .get(
                          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=6`,
                          config
                        )
                        .then(function (bcResponse6) {
                          axios
                            .get(
                              `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=7`,
                              config
                            )
                            .then(function (bcResponse7) {
                              axios
                                .get(
                                  `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=8`,
                                  config
                                )
                                .then(function (bcResponse8) {
                                  axios
                                    .get(
                                      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=9`,
                                      config
                                    )
                                    .then(function (bcResponse9) {
                                      const queryText = `delete from "item"`;
                                      pool
                                        .query(queryText)
                                                    .then(function (response) {
                                                      let msg = '';
                                                      let bcResponse = [];
                                                      for (item of bcResponse1.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (item of bcResponse2.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (item of bcResponse3.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (item of bcResponse4.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (item of bcResponse5.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (item of bcResponse6.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (item of bcResponse7.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (item of bcResponse8.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (item of bcResponse9.data.data) {
                                                        bcResponse.push(item);
                                                      }
                                                      for (let i = 0; i < bcResponse.length; i++) {
                                                          let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
                                                          let bcItemId = bcResponse[i].id;
                                                          let bcItemSku = bcResponse[i].sku;
                                                          let bcItemInv = bcResponse[i].inventory_level;
                                                          if (i === bcResponse.length - 1) {
                                                            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product');`);
                                                          } else {
                                                            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
                                                          }
                                                        }
                                                        for (let i = 0; i < bcResponse.length; i++) {
                                                          let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
                                                          let bcItemId = bcResponse[i].id;
                                                          let bcItemSku = bcResponse[i].sku;
                                                          let bcItemInv = bcResponse[i].inventory_level;
                                                          
                                                          axios
                                                            .get(
                                                              `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products/${bcItemId}/variants`,
                                                              config
                                                            )
                                                            .then(function (variantResponse) {
                                                              let varItems = variantResponse.data.data;
                                                              for (let j = 0; j < varItems.length; j++) {
                                                                if (i === bcResponse.length - 1 && j === varItems.length - 1 && varItems[j].inventory_level === 0) {
                                                                  bcItemSku = varItems[j].sku;
                                                                  BcItemId = varItems[j].id;
                                                                  msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Variant');`);
                                                                } else if (varItems[j].inventory_level === 0) {
                                                                  bcItemSku = varItems[j].sku;
                                                                  BcItemId = varItems[j].id;
                                                                  msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Variant'), `);
                                                                } else {
                                                                  console.log('Variant not at 0 stock!');
                                                                }
                                                              }
                                                            })
                                                            .catch((error) => {
                                                              console.log(`Error on variant query ${error}`);
                                                              res.sendStatus(500);
                                                            });
                                                        }
                                                          //console.log(msg);
                                                        const queryText = `INSERT INTO "item" (name, sku, inventory_level, id, level) VALUES ${msg}`;
                                                      pool
                                                        .query(queryText)
                                                        .then((insertResult) => {
                                                          console.log("We are about to get the item list");

                                                          const queryText = `select * from "item" ORDER BY id DESC`;
                                                          pool
                                                            .query(queryText)
                                                            .then((selectResult) => {
                                                              res.send(selectResult.rows);
                                                            })
                                                            .catch((error) => {
                                                              console.log(`Error on select query ${error}`);
                                                              res.sendStatus(500);
                                                            });
                                                        })
                                                        .catch((error) => {
                                                          console.log(`Error on insert query ${error}`);
                                                          res.sendStatus(500);
                                                        });
                                                    })
                                                    .catch((error) => {
                                                      console.log(`Error on delete query ${error}`);
                                                      res.sendStatus(500);
                                                    });
                                                })
                                                .catch((error) => {
                                                  console.log(`Error on get9 query ${error}`);
                                                  res.sendStatus(500);
                                                });
                                            })
                                        .catch((error) => {
                                          console.log(`Error on get8 query ${error}`);
                                          res.sendStatus(500);
                                        });
                                    })
                                    .catch((error) => {
                                      console.log(`Error on get7 query ${error}`);
                                      res.sendStatus(500);
                                    });
                                })
                                .catch((error) => {
                                  console.log(`Error on get6 query ${error}`);
                                  res.sendStatus(500);
                                });
                            })
                            .catch((error) => {
                              console.log(`Error on get5 query ${error}`);
                              res.sendStatus(500);
                            });
                        })
                    .catch((error) => {
                      console.log(`Error on get4 query ${error}`);
                      res.sendStatus(500);
                    });
                })
            .catch((error) => {
              console.log(`Error on get3 query ${error}`);
              res.sendStatus(500);
            });
        })
        .catch((error) => {
          console.log(`Error on get2 query ${error}`);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      // handle error
      console.log(`Error on get1 query ${error}`);
      res.sendStatus(500);
    });
});




router.get("/getitems", (req, res) => {
  console.log("We are about to get the item list");

  const queryText = `select * from "item" ORDER BY id DESC`;
  pool
    .query(queryText)
    .then((selectResult) => {
      res.send(selectResult.rows);
    })
    .catch((error) => {
      console.log(`Error on item query ${error}`);
      res.sendStatus(500);
    });
});

router.delete("/items/:id", (req, res) => {
  console.log("We are about to get the item list");
  const id = req.params.id;

  const queryText = `delete from "item" WHERE id = $1`;
  pool
    .query(queryText, [id])
    .then((deleteResult) => {
      const queryText = `select * from "item" ORDER BY id DESC`;
      pool
        .query(queryText)
        .then((selectResult) => {
      res.send(selectResult.rows);
    })
    .catch((error) => {
      console.log(`Error on item query ${error}`);
      res.sendStatus(500);
    });
    })
    .catch((error) => {
      console.log(`Error on item query ${error}`);
      res.sendStatus(500);
    });
});
                                            


module.exports = router;