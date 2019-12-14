<?php include("topPart.php"); ?>
<?php
$conn = mysqli_connect("localhost", "root", "", "hangman");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$whole = "SELECT word FROM wordtable";
$counter = mysqli_query($conn, $whole);
$row = mysqli_num_rows($counter);
$sql = "SELECT word, hint FROM wordtable ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$conn->close();
?>
<script type="text/javascript">
  let maxnum;
  let hintphp;
     maxNum = "<?php echo $row["word"] ?>";
     hintphp = "<?php echo $row["hint"] ?>";
    console.log(maxNum);

</script>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-7 roboFont">
      <h1 id="bodyHeader">Single Player</h1>
      <form>
        <br/>
        <button onclick = "initWord(this.id, maxNum, hintphp);" id="playSingle" type="button" class="btn btn-primary">Play</button>
        <div id="playerHint" type="text"></div>
        <br/>
        <br/>
        <div>
          <div><img id= "hangImages" style="height:300px; width: 300px;" src="images\h0.png" alt="first"></div>
          <br/>
          <div  id="textarea1"></div>
          <div  id="textarea2"></div>
        </div>
            <?php include("alphabetBtns.php"); ?>
        </div>
    </div>
</div>
<?php include("bottomPart.php"); ?>
<script type="text/javascript">

  menuBorder("#menuSectionColor2");

</script>