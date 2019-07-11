$(function(){


 /****************MOBILE NAVBAR******************/
  $(function() {

      $('nav#menu').mmenu({
         navbar: {
            title: "Меню"
         }
      });

      $(window).resize(function() {
           var API = $('#menu').data('mmenu');
           if(window.matchMedia("(min-width: 800px)").matches) {
              API.close();
           }

      });

  });
/****************MOBILE NAVBAR******************/


/***********RATING***************/
   $('.stars-rating').barrating({
        theme: 'fontawesome-stars',
        showSelectedRating: true,
        initialRating: null,
        showValues: false,
        deselectable: true,
        reverse: false,
        hoverState: true
    });
/***********RATING***************/


/*********OWL CAROUSEL***********/



  $(".products-carousel").owlCarousel({
  	  loop: true,
  	  margin: 30,
  	  dots: true,
      nav: true,
      autoplay: false,
  	  responsiveClass: true,
      navText: ["<img src='img/prev-gray.png'>","<img src='img/next-gray.png'>"],
  	  responsive:{
        0:{
            items:1,
            nav:false,
            slideBy: 1
        },
        767: {
            items: 2,
            nav: true,
            slideBy: 2
        },
        991:{
            items:3,
            nav: true,
            slideBy: 3
        },
        1200:{
            items:4,
            loop: true,
            slideBy: 4,
            dotsBy: 4
        }
    }
  });


  $(".latest-products-carousel").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      autoplay: false,
      responsiveClass: true,
      navText: ["<img src='img/prev-light-gray.png'>","<img src='img/next-light-gray.png'>"],
      responsive:{
        0:{
            items:1,
            nav:false,
            slideBy: 1
        },
        577: {
            items: 2,
            slideBy: 2
        },
        767: {
            items: 2,
            slideBy: 2
        },
        991:{
            items:3,
            slideBy: 3
        },
        1200:{
            items:4,
            loop: true,
            slideBy: 4
        }
    }

  });

  $(".associated-products-carousel").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      autoplay: false,
      responsiveClass: true,
      navText: ["<img src='img/prev-light-gray.png'>","<img src='img/next-light-gray.png'>"],
      responsive:{
        0:{
            items:1,
            nav:false,
            slideBy: 1
        },
        577: {
            items: 2,
            slideBy: 2
        },
        767: {
            items: 2,
            slideBy: 2
        },
        991:{
            items:2,
            slideBy: 2
        },
        1200:{
            items:3,
            loop: true,
            slideBy: 4
        }
    }

  });


  $(".reviews-carousel").owlCarousel({
  	  loop: true,
  	  margin: 30,
  	  dots: false,
  	  responsiveClass: true,
      navText: ["<img src='img/prev-light-gray.png'>","<img src='img/next-light-gray.png'>"],
  	  responsive:{
        0:{
            items:1,
            nav:false
        },
        991: {
            items: 2,
            nav: true,
            slideBy: 2
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }

  });

   $(".partners-carousel").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      responsiveClass: true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
            loop:true
        }
    }

  });
/*********OWL CAROUSEL***********/


/*********CATALOG***********/
  $("#price-slider").slider({});
/*********CATALOG***********/



/********PRODUCT DESCRIPTION*****************/


$(".tab_item").not(":first").hide();
$(".product__tabs .tab").click(function() {
    $(".product__tabs .tab").removeClass("image_active").eq($(this).index()).addClass("image_active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("image_active");



$(".block__tab-item").not(":first").hide();
$(".reviews__block .block-tab").click(function() {
    $(".reviews__block .block-tab").removeClass("active2").eq($(this).index()).addClass("active2");
    $(".block__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active2");




/********PRODUCT DESCRIPTION*****************/ 


/*********CART***********/

var that = null;
function closeCartProduct(e) {
    e.preventDefault();
    $('#cartModal').modal('hide');
    $(that).closest('.cart-section__item').addClass('slideOutLeft').fadeOut('slow');
}
function closeCartModal(e) {
    e.preventDefault();
    $('#cartModal').modal('show');
    that = this;
    $('#cart-product-del').bind('click', closeCartProduct);
}
function closeAllCartProduct(e) {
    e.preventDefault();
    $('.cart-section__item').addClass('zoomOut').fadeOut('slow');
}
$(".cart-section__close a").bind('click', closeCartModal);
$(".cart-section__list-clear a").bind('click', closeAllCartProduct);


//minus and plus
function btnNumber(e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $(this).parent().parent().children("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
           
        } 
        else if(type == 'plus') {
            input.val(currentVal + 1).change();
        }
    } else {
        input.val(0);
    }

}

$('.btn-number').bind('click', btnNumber);

$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    if (this.value.match(/[^0-9]/g)) {
       this.value = this.value.replace(/[^0-9]/g, '');
    }
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").attr('disabled')
    }
    
    
});
/*********CART***********/

/*********NEWS PAGE*************/
      // var wall = new Freewall("#freewall");
      // wall.reset({
      //   selector: '.news-page-section__gallery-item',
      //   animate: true,
      //   cellW: 284,
      //   cellH: 'auto',
      //   draggable: false,
      //   fixSize: null,
      //   gutterX: 15,
      //   gutterY: 15,
      //   onResize: function() {
      //     wall.fitWidth();
      //   }
      // });

      // wall.container.find('.brick img').html(function() {
      //   wall.fitWidth();
      // });
/*********NEWS PAGE*************/

/***********MAP**************/
ymaps.ready(function () {


    if($('#YMapsID').length > 0) {
      
          var myMap = new ymaps.Map('YMapsID', {
                center: [51.517592,46.016075],
                zoom: 17,
                controls: ['zoomControl','geolocationControl']
            }, {
                searchControlProvider: 'yandex#search'
            });

            // Создаём макет содержимого.
         var myPlacemark = new ymaps.Placemark([51.517592,46.016075], {
                balloonContent: '<img src="./img/map-logo-1.jpg" />',
            }, 
            {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/placemark.png',
                // Размеры метки.
                iconImageSize: [35, 38]
             
            });


       
        myMap.behaviors.disable('scrollZoom');
        // myMap.behaviors.disable('multiTouch'); 
        ($(window).width() < 991) ?  myMap.behaviors.disable('drag') : myMap.behaviors.Drag;
       
        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
    }
      
        
});

/***********MAP**************/ 


  
});





