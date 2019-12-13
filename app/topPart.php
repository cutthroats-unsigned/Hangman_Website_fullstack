<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Hangman</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,900" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<html lang="en">
<body>
<div class= "fixed-top"> <!--all of navbar is fixed to top-->

    <div id="showBanner1"> <!-- ShowBanner1 and 2 are only used for javascript-->

        <div class="bannerSmall d-none d-md-block fixed-top"> <!-- fixed top has priority z-index, so it allows us to change margin of bigheader without changing height-->
        </div>

        <div class="bannerBig d-none d-md-block">
            <div id="bigHeader" ><p>Hangman</p></div>
            <div id="tagLine"><p>A GAME THAT WILL MAKE YOU SAY "WORD!"</p></div>
        </div>
    </div>

    <div id="showBanner2">

        <div class="collapseBanner d-none d-md-block">
            <div><p>Hangman</p></div> <!--This banner only shows when screen is larger then md-->
        </div>

    </div>


    <nav class="navbar navbar-expand-md navbar-light" style="background-color: #272727;">
        <!--navbar-dark/light changes font colors-->
        <!--Put id to collapse here-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> <!--This creates that button that allows us to expand the nav items when collapsed at sm-->
        </button>

        <div class="d-md-none collapseHeader">Hangman</div>

        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <!-- name id if want to collapse-->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" id="menuSectionColor1" href="index.php">MAIN MENU</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="menuSectionColor2" href="singleplayer.php">SINGLE PLAYER</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="menuSectionColor3" href="multiplayer.php">MULTIPLAYER</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="menuSectionColor4" href="uploadchallenge.php">UPLOAD CHALLENGE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="menuSectionColor5" href="reportbug.php">REPORT BUG</a>
                </li>
            </ul>
        </div>
    </nav>

</div>

