
const apiUrl = 'https://65e59c4fd7f0758a76e6d88d.mockapi.io/user/user';
let postId;
var TableData
axios.get(apiUrl)
  .then(response => {

    console.log('Response data:', response.data);
    buildTable(response?.data)
    TableData = response?.data;
  })
  .catch(error => {

    console.error('Error:', error);
  });

// var myArray = []

// ajax({
//   method: 'GET',
//   url: 'https://65e59c4fd7f0758a76e6d88d.mockapi.io/user/user',
//   success: function (response) {
//     myArray = response.data
//     buildTable(myArray)
//     console.log(myArray)
//   }
// })



function buildTable(data) {
  var table = document.getElementById('tablebody')
  console.log(table);
  table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      <td>${data[i].password}</td>
      <td>${data[i].location}</td>    
      <td><button type ="button" class="btn btn-info" onclick=edit(${data[i].id});>Edit</button>   
      <button type ="button" class="btn btn-danger" onclick=remove(${data[i].id});>Delete</button> </td>
    </tr>`
    table.innerHTML += row
  }

}

// function addonclick() {
// var table = document.getElementById('tablebody'),
//   newRow = table.insertRow(table.length),

//   cell1 = newRow.insertCell(0),
//   cell2 = newRow.insertCell(1),
//   cell3 = newRow.insertCell(2),
//   cell4 = newRow.insertCell(3),
// Name = document.getElementById("inputname").value;
// Email = document.getElementById("inputemail").value;
// password = document.getElementById("inputpassword").value;
// Location = document.getElementById("inputlocation").value;
// cell1.innerHTML = Name;
// cell2.innerHTML = Email;
// cell3.innerHTML = password;
// cell4.innerHTML = Location;
// var name = document.getElementById('inputname').value;
// var email = document.getElementById('inputemail').value;
// var password = document.getElementById('inputpassword').value;
// var location = document.getElementById('inputlocation').value;
// if (name && email && password && location) {
// let id=data.length + 1;
// data.push({ name: name, email: email, password: password, location: location, id: id })
//      buildTable();
//   }
// }





// function create() {
//   axios.post(apiUrl, {
//     Name: "inputname",
//     Email: "inputemail",
//     password: "inputpassword",
//     Location: "inputlocation",
//   })
//     .then(Response => {
//       table(Response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }



function resetonclick() {

  document.getElementById('inputname').value = ""
  document.getElementById('inputemail').value = ""
  document.getElementById('inputpassword').value = ""
  document.getElementById('inputlocation').value = ""
  document.getElementById("idEdit").value = ""

}

// function updat() {
//   axios.put(`${apiUrl}/1`, {
//     id: '',
//     name: '',
//     email: '',
//     password: '',
//     location: '',


//   })
//     .then(response => {
//       buildTable(response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// function remove() {
//   axios.delete(`${apiUrl}/1`)
//     .then(Response => {
//       table(Response.data)


//     })

//     .catch(error => {
//       console.error('Error:', error);
//     });
// }



// function editonclick() {
//   var name = document.getElementById('inputname').value;
//     email = document.getElementById('inputemail').value;
//     password = document.getElementById('inputpassword').value,
//     location = document.getElementById('inputlocation').value;

//   tablebody.row[rindex].cells[0].innerHTML = name;
//   tablebody.row[rindex].cells[1].innerHTML = email;
//   tablebody.row[rindex].cells[2].innerHTML = password;
//   tablebody.row[rindex].cells[2].innerHTML = location;
// }

// function removeonclick() {
//   tablebody.row[rindex];

//   document.getElementById('inputname').value = ""
//   document.getElementById('inputemail').value = ""
//   document.getElementById('inputpassword').value = ""
//   document.getElementById('inputlocation').value = ""
// }

function table() {
  axios.get(apiUrl)

    .then(response => {

      console.log('Response data:', response.data);
      TableData = response?.data;
      buildTable(response?.data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function save() {
  var name = document.getElementById('inputname').value;
  var email = document.getElementById('inputemail').value;
  var password = document.getElementById('inputpassword').value;
  var location = document.getElementById('inputlocation').value;
  var data = {
    name,
    email,
    password,
    location,
  };
  let check = Object.keys(data)?.filter((ele) => {
    if (data[ele] == "") {
      return ele
      
    }
  });
  if (check.length != 0) {
    document.getElementById("error").innerHTML = "Please fill the required fields";
    return 0;
  }
  else {
    document.getElementById('inputname').value = ""
    document.getElementById('inputemail').value = ""
    document.getElementById('inputpassword').value = ""
    document.getElementById('inputlocation').value = ""
  }

  let isID = document.getElementById("idEdit").value;
  if (isID == "") {
    axios.post(apiUrl, {
      name: data.name,
      email: data.email,
      password: data.password,
      location: data.location,
    })
      .then(Response => {
        //   let Toast = Swal.mixin({
        //   toast: true,
        //   position: "top-center",
        //   showConfirmButton: false,
        //   timer: 4000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.onmouseenter = Swal.stopTimer;
        //     toast.onmouseleave = Swal.resumeTimer;
        //   }
        // });
        // Toast.fire({
        //   icon: "success",
        //   title: "User Updated Successfully"
          
        // });

        alert = Swal.fire({
          title: "Good job!",
          text: "Saved",
          icon: "success"
        });


        // console.log(':',Response.data);
        table(Response.data);
      })
  } else {
    axios.put(`${apiUrl}/${isID}`, {
      name: data.name,
      email: data.email,
      password: data.password,
      location: data.location,
    })
      .then(Response => {
        alert = Swal.fire({
          title: "Good job!",
          text: "Changes Saved",
          icon: "success"
        });
        document.getElementById("idEdit").value = ""
        // console.log(':',Response.data);
        table(Response.data);
      })
  }
  




}


// function edit(id) {
//   // Fetch the existing data of the resource to be edited
//   axios.get(`${apiUrl}/${id}`)
//     .then(response => {
//       const postData = response.data;
// const newname = postData.name;
// const newemail = postData.email;
// const password = postData.password;
// const newlocation = postData.location;

//       if (postData) {

//         const updatedData = {
//           name: postData.newname,
//           email: postData.newemail,
//           password: postData.newpassword,
//           location: postData.newlocation,
//           userId: postData.userId
//         };

//         axios.put(`${apiUrl}/${id}`, updatedData)
//           .then(response => {
//             table( response.data);
//           })
//           .catch(error => {
//             console.error('Error updating resource:', error);
//           });
//       } else {
//         console.log('Edit canceled.');
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching resource to edit:', error);
//     });
// }


// function editPrompt() {
//   const id = prompt('Enter the post ID to edit:');
//   if (id) {
//       edit(parseInt(id));
//   }
// }

// function edit(id) {
//   axios.get(`${apiUrl}/${postId}`)
//     .then(response => {
//       const newname = prompt('Enter the new name', postData.name);
//       const newemail = prompt('Enter the new email:', postData.email);
//       const newpassword = prompt('Enter the new password', postData.password);
//       const newlocation = prompt('Enter the new location', postData.location);

//       if (newname !== null || newemail !== null || newpassword !== null || newlocation !== null) {
//         update(id, newname, newemail, newpassword, newlocation);
//       } else {
//         console.log('Edit canceled.');
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }
// function update(id, newname, newemail, newpassword, newlocation) {
//   axios.put(`${apiUrl}/${id}`, {
//     name: newname,
//     email: newemail,
//     password: newpassword,
//     location: newlocation,

//   })
//     .then(response => {
//       table('Post updated:', response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }
//   axios.delete(`${apiUrl}/${id}`)
//     .then(response => {
//       table(response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

//   axios.get(`${apiUrl}/${id}`)
//     .then(response => {
//       if (id) {
//         const [name, email, password, location] = id.split(',');
//         update(id.trim(), name.trim(), email.trim(), password.trim(), location.trim());
//         table(response.data);
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }


// function edit() {
//   if (postId) {
//     var name = document.getElementById('inputname').value;
//     var email = document.getElementById('inputemail').value;
//     var password = document.getElementById('inputpassword').value;
//     var location = document.getElementById('inputlocation').value;
//     var data = {
//       name,
//       email,
//       password,
//       location
//     };


//     console.error('select a post to edit');
//     return;
//   }
//   axios.put(`${apiUrl}/${postId}`, {
//     name: '',
//     email: '',
//     password: '',
//     location: '',

//   })
//     .then(response => {
//       table(response.data);
//     })
//     .catch
//     (error => {
//       console.error('Error', error);

//     });
// }
function edit(id) {
  // const updatedData = {
  //   name: 'Updated name',
  //   email: 'Updated email',
  //   password: 'update password',
  //   location: 'update location'
  // };
  var data = TableData.filter((ele) => ele.id == id)

  console.log(data, id);
  document.getElementById("inputname").value = data[0].name
  document.getElementById("inputemail").value = data[0].email
  document.getElementById("inputpassword").value = data[0].password
  document.getElementById("inputlocation").value = data[0].location
  document.getElementById("idEdit").value = data[0]?.id;



  // // Using PATCH to partially update the resource
  // axios.patch(`${apiUrl}/resourceId`, updatedData)
  //   .then(response => {
  //     table('Data partially updated successfully', response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error partially updating data', error);
  //   });
}

// function remove() {
//   const id = prompt('select the id');
//   // if (id) {
//   //   id('remove')
//   //   return ;
//   // }
//   if (id) {
//     axios.delete(`${apiUrl}/${id}`)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
// }

function remove(id) {
  const index = TableData.findIndex(element => element.id === id);

  if (index !== -1) {
    // Remove element from array
    TableData.splice(index, 1);
  }


  axios.delete(`${apiUrl}/${id}`)
    .then(response => {
      table(response.data);
    })
    .catch(error => {
      console.error('Error deleting resource:', error);
    });
}





// function edit() {
//   const id = prompt('select the id')
//   if(id){
//     axios.edit(`${apiUrl}/${id}`)
//     .then(response => {
//       table(response.data);
//     })
//     .catch(error => {
//       console.error('Error:',error);
//     })
//   }
// }



// function remove() {
//   if (!postId) {
//     console.error('Please select a post to delete.');
//     return;
//   }
//   axios.delete(`${apiUrl}/${postId}`)
//     .then(response => {
//       table(response.data);
//     })
// .catch(error => {
// console.error('Error:', error);
// });
//}
// .catch(error => {
//   console.error('Error:', error);
// });


// if (name=="" && email==""&& password==""&& location==""){
//   document.getElementById("error").innerHTML="Please fill the required fields";
// }
// else {
//   data.name =name;
//   data.email =email;
//   data.password =password;
//   data.location =location;
// }
// }


// if (name == "") {
//       document.getElementById("error").innerHTML = "please enter name";

//   }

//   else {
//       data.name = name;
//   }
//   console.log(data)
//   if (email == ""){
//     document.getElementById("error").innerHTML = "please enter valid email";
//   }
//   else{
//     data.email=email;
//   }
//   if(password == ""){
//     document.getElementById("error").innerHTML ="please enter valid password";
//   }
//   else{
//     data.password;
//   }
//   if(location == ""){
//     document.getElementById("error").innerHTML ="please enter a location";
//   }
//   else{
//     data.location;
//   }










// function save() {
//   var Name = document.getElementById("inputName").value;
//   var Email = document.getElementById("inputEmail").value;
//   var password = document.getElementById("inputpassword").value;
//   var Location = document.getElementById("inputLocation").value

//   var data = {
//     Name,
//     Email,
//     password,
//     Location
//   };
// console.log(data)
// }

// for (var i = 0; i < data.length; i++) {
//   if (data[i].id == id) {
//     console.log(data[i].name)
//   }
// }

// ((Objectdata) => {
//   console.log(Objectdata);
// })

// var request = new XMLHttpRequest();
// request.open('GET', 'https://65e59c4fd7f0758a76e6d88d.mockapi.io/user/user', true);
// request.send();
// request.onload = function () {
//   var data = JSON.parse(request.response);
//   console.log(data)
//   var totaldata = data.filter((ele) => ele.name)
//   console.log(totaldata);

// }
//   var tableData="";
//   data.map((values)=>{
//     <h1>tableData={values.name}</h1>;
//   });
//   document.getElementById("table_body").
//   innerHTML=tableData;
// }

// function onDelete(){
//   row = td.parentElement.parentElement;
//   document.getElementById("tablebody").deleteRow(row.rowindex);
//   resetonclick();
// }