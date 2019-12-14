<?php
$words = $_POST['word'];
$hints = $_POST['hint'];

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "hangman");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$query = "SELECT word FROM wordtable WHERE word='$words'";  
// Execute the query and store the result set 
$result = mysqli_query($link, $query);

if (mysqli_num_rows($result) > 0) {
    echo "Sorry word already exists in database!"; 	
  }
else{
$sql = "INSERT INTO `wordtable` (`word`, `hint`) VALUES ('$words', '$hints')";
if(mysqli_query($link, $sql)){
   echo "Records inserted successfully.";
   header('Location:/hangman/uploadchallenge.php');
} else{
   echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
}
// Close connection
mysqli_close($link);
?>