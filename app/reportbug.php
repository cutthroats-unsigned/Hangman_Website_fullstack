<?php include("topPart.php"); ?>
<?php

$error = ""; $successMessage = "";

if ($_POST) {


    if (!$_POST["content"]) {

        $error .= "The content field is required.<br>";

    }

    if ($error != "") {

        $error = '<div class="alert alert-danger" role="alert"><p>Please insert text in the box provided below.</p>' . $error . '</div>';

    } else {

        $emailTo = "someEmailhere";

        $content = $_POST['content'];

        $headers = "Hangman Bug Report";

        if (mail($emailTo, $content, $headers)) {

            $successMessage = '<div class="alert alert-success" role="alert">Your message was sent.</div>';


        } else {

            $error = '<div class="alert alert-danger" role="alert"><p><strong>Your message couldn\'t be sent - please try again later</div>';


        }

    }
}
?>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7 roboFont">
            <h1 id="bodyHeader">Report bug</h1>
            <br/>
            <br/>
            <form method="post">
                <div class="form-group">
                  <div id="error"><? echo $error.$successMessage; ?></div>
                    <label for="textarea5"> If you encountered any issues with the game, or if you have any suggestions, please let us know below.</label>
                    <textarea class="form-control" id="textarea5" placeholder="Enter text here..." rows="5"></textarea>
                    <br/>
                    <button type="submit" class="btn btn-primary">SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php include("bottomPart.php"); ?>
<script type="text/javascript">

  $("form").submit(function(e) {

    var error = "";

    if ($("#content").val() == "") {

      error += "The content field is required.<br>"

    }

    if (error != "") {

      $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>Please insert text into the box provided below</strong></p>' + error + '</div>');

      return false;

    } else {

      return true;

    }
  })

</script>
<script type="text/javascript">

  menuBorder("#menuSectionColor5");

</script>