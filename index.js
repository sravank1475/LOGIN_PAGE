function valid(){
  const uname = document.getElementById('input_username');
  const upass = document.getElementById('input_pass');
  userval= uname.value;
  pasval=upass.value;
 
   if(userval.length==""){
     document.getElementById("user_error").style.visibility="visible";
     return false;
  } else if(pasval.length==""){
      document.getElementById("error_nopass").style.visibility="visible";
      return false;
  }
  else if(pasval.length<=5){
      document.getElementById("wrpass").style.visibility="visible";
      return false;
  }
}