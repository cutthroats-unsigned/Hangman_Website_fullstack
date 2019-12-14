<div class="bottomBanner container-fluid">
  <div class="row justify-content-center align-items-center">
    <div class="coll-md-7">
      <p class="bottomBannerTxt">COPYRIGHT &copy; 2019 TEAM 11</p>
    </div>
  </div>
</div>

<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="Main.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/js/bootstrap.min.js" integrity="sha384-3qaqj0lc6sV/qpzrc1N5DC6i1VRn/HyX4qdPaiEFbn54VjQBEU341pvjz7Dv3n6P" crossorigin="anonymous"></script>
<script type="text/javascript">

  let menuSection = "";
  function menuBorder(menuType){
    menuSection = menuType;
    $(menuType).css("border-top-color", "#87C232");
    if(menuType == "#menuSectionColor5"){
      $(menuType).css("border-top-color", "#FF7572");
    }
    $(menuType).css("borderWidth", "5px");
  }

  $(".nav-link").hover(function () {
    if(this.textContent === "REPORT BUG"){
      $(this).css("border-top-color", "#FF7572");
    }
    else {
      $(this).css("border-top-color", "#87C232"); //generate random color for border
    }
    if('#' + this.id !== menuSection){
      $(this).stop().animate({ //executes this while hovering

        borderWidth: "5px", //increase width of border
      }, 200);}
  }, function () { //executes when done hovering
    if("#" + this.id !== menuSection){
      $(this).stop().animate({
        borderWidth: "0px", //decrease width of border
      }, 200);}
  });

  $('#showBanner2').hide(); //initially hide small banner


  if ($(window).scrollTop() > 100 && $(window).width() > 768) { //initial check of how far user has scrolled
    $('#showBanner1').hide();                                 //when refreshing page.
    $("#showBanner2").show();
    //  $(".navbar").css("margin-top", "-50px");
  }
  ///////////////Function to animate banner when scrolling.
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100 && $(window).width() > 768) {
        $('#showBanner1').hide();
        $('#showBanner2').show();
        // $(".navbar").css("margin-top", "-50px");
      }
      else {
        $('#showBanner1').show();
        $('#showBanner2').hide();
        // $(".navbar").css("margin-top", "-80px");

      }
    });
  });

</script>

</body>
</html>