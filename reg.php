<!doctype html>
<html lang="en" class="nojs">
<head>
	<title></title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="National Level Technical Symposium at MNM Jain Engineering College ">
<meta name="keywords" content="Symposium, Cse,Cognit13, Cognit2k13,Cognit,Cognit 13, cse symposium,mnm jain symposium">
<meta name="author" content="Sai Prashanth">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">

<link rel="icon" type="image/png" href="favicon.png">

<!--[if lt IE 9]>  
<script src="Scripts/html5shiv.js"></script> 
<script src="Scripts/respond.min.js" type="text/javascript"></script>
<script src="Scripts/selectivizr-min.js" type="text/javascript"></script>
 
<![endif]--> 

<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="sitewide.css">
<style>
body{
	text-align:center;}

</style>
</head>

<body>
<section id="container">
<section class="page active" id="reg">
<h2>Registration</h2>

<?php
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$events=$_POST['evts'];
$coll=$_POST['coll'];
$id;
$evtlist;
$msg="Your Registration is successful,\nwith the following details:\nName :$name\nE-Mail :$email\nCollege Name:$coll\nPhone no :$phone";

echo '<p>Your Registration is successful,<br>with the following details:<br>';
echo 'Name :'.$name.'<br>';
echo 'E-Mail :'.$email.'<br>';
echo 'Phone no :'.$phone.'</p>';
echo "Events:\n";



$anEvt = $_POST['evts'];
  if(empty($anEvt))
  {
    echo("You didn't select any Events.");
  }
  else
  {
    $N = count($anEvt);
 
    echo("You selected $N event(s): ");
    for($i=0; $i < $N; $i++)
    {
		echo("<br>");
      echo( $anEvt[$i]);
	  $evtlist=$evtlist.' '.$anEvt[$i];
    }
  }
  
/*$mysql_host = "mysql9.000webhost.com";
$mysql_database = "a6294211_parlist";
$mysql_user = "a6294211_root";
$mysql_password = "1123581321fs";*/


$dbconn= mysqli_connect('mysql9.000webhost.com','a6294211_root','1123581321fs','a6294211_parlist') or die('connection error');
$result=mysqli_query($dbconn,"SELECT * FROM part WHERE phone='$phone'");
while($row = mysqli_fetch_array($result))
  {
if($row['email']==$email){
	die("<br> You have already registered<br>Return to page <a href='index.htm'>Click here</a>");
	}
  }
$query="INSERT INTO part(name,email,phone,events,coll) VALUES ('$name','$email','$phone','$evtlist','$coll')";
$res= mysqli_query($dbconn,$query) or die(mysqli_error($dbconn));



$result=mysqli_query($dbconn,"SELECT * FROM part WHERE phone='$phone'") or die(mysqli_error($dbconn));
while($row = mysqli_fetch_array($result))
  {
	 echo "<br>Your ID is CGNT";
  echo $row['id'];
  $msg=$msg."<br>Your ID is CGNT".$row['id'];
  
  }

mysqli_close($dbconn);
$subject="Registration at Cognit";
$sender="cognit2013@gmail.com";
mail($email, $subject,$msg, 'From:'.$sender );
echo '<br>Return to page <a href="index.htm">Click here</a>';

?>
</section>
</section>
</body>
</html>