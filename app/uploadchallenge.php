<?php include("topPart.php"); ?>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-7 roboFont">
      <h1 id="aboutHeader">Upload Challenge</h1>
      <br/>
      <br/>

       <form action="writeData.php" method="post">
        <div class="form-group">
          <label for="textarea3"> Enter a hint that will help the player guess the correct word.</label>
          <textarea type="text" name="hint" class="form-control" id="textarea3" placeholder="He lives in a pineapple" rows="1" name="hint"></textarea>
        </div>
        <div class="form-group">
          <label for="textarea4"> Enter a word or phrase the player needs to guess.</label>
          <textarea type="text" name="word" class="form-control" id="textarea4" placeholder="SpongeBob SquarePants" rows="1"
          name="word"></textarea>
          <br/>
          <button type="submit" name=submit value="Submit" type="button" id ="mynewbutton" class="btn btn-primary">SUBMIT</button>
        </div>
      </form>
    </div>
  </div>
</div>
<?php include("bottomPart.php"); ?>
<script type="text/javascript">

  menuBorder("#menuSectionColor4");

</script>