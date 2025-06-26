// function saveToDb(data, success, failure) {
//   let intSpeed = Math.floor(Math.random() * 10) + 1;
//   if (intSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveToDb(
//   "Data1",
//   () => {
//     console.log("Data 1 was saved");
//     saveToDb(
//       "Data2",
//       () => {
//         console.log("Data 2 was saved");
//         saveToDb(
//           "Data 3",
//           () => {
//             console.log("Data 3 was saved");
//           },
//           () => {
//             console.log("Weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("Weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("Weak Connection");
//   }
// );

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let intSpeed = Math.floor(Math.random() * 10) + 1;

    if (intSpeed > 4) {
      resolve("your Data was Saved");
    } else {
      reject("Weak connection");
    }
  });
}

saveToDb("Data 1")
  .then(() => {
    console.log("Data 1");
    return saveToDb("Data 2");
  })
  .then(() => {
    console.log("Data 2");
    return saveToDb("Data 3");
  })
  .then(() => {
    console.log("Data 3");
  })
  .catch(() => {
    console.log("Promise was Rejected");
  });
