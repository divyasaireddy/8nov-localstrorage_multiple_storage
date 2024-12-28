function addUser(){
    let userName=document.getElementById("userName").value;
    let userPassword=document.getElementById("userPassword").value;

    if(userName && userPassword){

    let userData=JSON.parse(localStorage.getItem("users")) || []

    userData.push({name:userName,password:userPassword})

    localStorage.setItem("users",JSON.stringify(userData))

    alert("data added successfully")
    }else{
        alert("enter both username and password")
    }

        // localStorage.setItem("name",userName.value)
        // localStorage.setItem("password",userPassword.value)
    }
    // userName.value=""
    // userPassword.value=""

//JSON.parse is used to convert string data to object
//JSON.stringfy is used to convert object data to string


function login(){

    let loginName=document.getElementById("loginName").value;
    let loginPassword=document.getElementById("loginPassword").value;

   const data=JSON.parse(localStorage.getItem("users")) ||[]

   const match=data.find(x=>x.name === loginName  &&
    x.password===loginPassword)

  if(match){
    alert(`${match.name}  successfully loggedin`)

    window.location.href = `${loginName.toLowerCase()}.html`;
  }else{
    alert("credentials not matched")
  }
}



