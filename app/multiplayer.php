<?php include("topPart.php"); ?>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-7 roboFont">
      <h1 id="bodyHeader">Multiplayer</h1>
      <form>
        <br/>
        <button onclick = "initWord(this.id)" id="playMulti" type="button" class="btn btn-primary">Play</button>
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

  menuBorder("#menuSectionColor3");

</script>