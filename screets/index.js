function inIframe () { 
    try { return window.self !== window.top; } 
    catch (e) { return true; } 
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote(){
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
        author = json.author;
        quote  = json.quote;
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

     else {

        alert("Whatsapp client not available.");

     }

  });
    
    $('#tweet').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
    }
  });
});