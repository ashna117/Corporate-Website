$(document).ready(function() {



  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $("#sticky-header").removeClass("sticky-menu");
    } else {
      $("#sticky-header").addClass("sticky-menu");
    }
  });

  $('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu'
  });



  function smoothSctollTop() {
    $('.main-menu ul li > a').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 60
        }, 800);
      }
    });
  }
  smoothSctollTop();


  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.goTop').fadeIn();
    } else {
      $('.goTop').fadeOut();
    }
  });
  $(".goTop").on('click', function() {
    $("body, html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });



  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      prevArrow: '<button type="button" class="prevarrow"><span>&#8592;</span>Prev</button>',
      nextArrow: '<button type="button" class="nextarrow">Next<span>&#8594;</span></button>',
      arrows: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false
        }
      }]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  $('.sercice-active').slick({
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="prevarrow">Prev</button>',
    nextArrow: '<button type="button" class="nextarrow">Next</button>',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
      
    ]
  });

  $('.cases-active').slick({
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="prevarrow"><i class="fas fa-arrow-circle-left"></i></button>',
    nextArrow: '<button type="button" class="nextarrow"><i class="fas fa-arrow-circle-right"></i></button>',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
      
    ]
  });

  $('.form-active').slick({
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="prevarrow"><i class="fas fa-arrow-circle-left"></i></button>',
    nextArrow: '<button type="button" class="nextarrow"><i class="fas fa-arrow-circle-right"></i></button>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });

  $('select').niceSelect();

  $('.brand-active').slick({
    dots: true,
    infinite: true,
    arrows: false,
    prevArrow: '<button type="button" class="prevarrow"><i class="fas fa-arrow-circle-left"></i></button>',
    nextArrow: '<button type="button" class="nextarrow"><i class="fas fa-arrow-circle-right"></i></button>',
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      
    ]
  });



});
