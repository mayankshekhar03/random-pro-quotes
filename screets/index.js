function inIframe () { 
    try { return window.self !== window.top; } 
    catch (e) { return true; } 
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote(){
    $.getJSON("quotes.json", function(json) {
        var numRand = Math.floor((Math.random() * json.length));
        author = json[numRand]['author'];
        quote = json[numRand]['quote'];
        $(".quote").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(quote);
        });
        
        $("#author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').text('- ' + author);
        });
    });
}

$(document).ready(function() {
    getQuote();
        $("#change").on("click", getQuote);
    
    $('#wa').on("click", function () {

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        var sText = quote + author;

        var sUrl = "https://mayankshekhar03.github.io/random-pro-quotes";

        var sMsg = encodeURIComponent(sText) + " - " + encodeURIComponent(sUrl);

        var whatsapp_url = "whatsapp://send?text=" + sMsg;

        window.location.href = whatsapp_url;

     }
        else{
            alert("This feature is only available on a smartphone with WhatsApp.");
        }

  });
    
    $('#tweet').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
    }
  });
});