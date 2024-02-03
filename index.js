$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_yes = $("#yes");
    var btn_no = $("#no");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    btn_yes.click(function(){
      window.open("https://www.w3schools.com");
    });
    btn_no.click(function(){
      document.getElementById("no").disabled = true;
      alert('This is not a option sweetheart 🙂');
    });
  
    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})

