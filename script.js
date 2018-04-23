function blink() {
    var $led = $(".led");
    
    function on() {
      $led.addClass('active');
    }
    
    function off() {
      $led.removeClass('active');
    }
     
    setTimeout(on, 0)
    setTimeout(off, 100)
    setTimeout(on, 200)
    setTimeout(off, 300)
    setTimeout(on, 400)
    setTimeout(off, 500)
  }
  
  function flash() {
    interval = window.setInterval(function(){
      blink();
    }, 8000);
  }
  
  flash();
  
  
  $(document).ready(function () {
    
    $('#color').on('change', function () {
          clearInterval(interval);
        $('#led').attr('data-color', $(this).val());
        blink();
        flash();
    });
    
    $('#led').removeClass('dom');
  });