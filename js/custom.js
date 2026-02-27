$(document).ready(function() {
    $('.toggle').click(function() {
        $(this).toggleClass('toggleshow');
    });

    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        margin:15,
  responsive: [
    {
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
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    
  ]
});

$('.blumaitrix-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: false,
     responsive: [
      {
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
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      
    ]
   });


   $('.pick-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: true,
    margin:15,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });



  $('.teaching-finance').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: true,
    margin:15,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });

  
  $('.explore-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    draggable: false,
     autoplaySpeed: 5000,
    autoplay: false,
    margin:15,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
]
  }); 


  $('.client-slider').slick({
    slidesToShow: 1.8,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    padding:10,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1.8,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1.4,
    }
  }
]
  });


  $('.tab-a').click(function(){  
    $(".tab-ecommerce").removeClass('tab-active');
    $(".tab-ecommerce[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
   });

   $('.tab-box').click(function(){  
    $(".tab-courses").removeClass('courses-active');
    $(".tab-courses[data-id='"+$(this).attr('data-id')+"']").addClass("courses-active");
    $(".tab-box").removeClass('courses-active');
    $(this).parent().find(".tab-box").addClass('courses-active');
   });

 
   $('.tab-community-box').click(function(){  
    $(".tab-community").removeClass('community-active');
    $(".tab-community[data-id='"+$(this).attr('data-id')+"']").addClass("community-active");
    $(".tab-community-box").removeClass('community-active');
    $(this).parent().find(".tab-community-box").addClass('community-active');
   });


   $('.tab-category-box').click(function(){  
    $(".tab-category").removeClass('category-active');
    $(".tab-category[data-id='"+$(this).attr('data-id')+"']").addClass("category-active");
    $(".tab-category-box").removeClass('category-active');
    $(this).parent().find(".tab-category-box").addClass('category-active');
   });



  
  $('.need-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
arrows: true,
dots: false,
speed: 300,
infinite: false,
autoplaySpeed: 5000,
autoplay: true,
margin:15,
responsive: [
{
breakpoint: 1199,
settings: {
  slidesToShow: 3,
}
},
{
breakpoint: 767,
settings: {
  slidesToShow: 1,
}
},
{
breakpoint: 767,
settings: {
  slidesToShow: 1,
}
}
]
});



$('.courses-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 300,
  infinite: false,
  autoplaySpeed: 5000,
  autoplay: true,
  margin:15,
  responsive: [
  {
  breakpoint: 1199,
  settings: {
    slidesToShow: 1,
  }
  },
  {
  breakpoint: 767,
  settings: {
    slidesToShow: 1,
  }
  },
  ]
  });


  
$('.meet-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 300,
  infinite: false,
  autoplaySpeed: 5000,
  autoplay: true,
  margin:15,
  responsive: [
  {
  breakpoint: 1199,
  settings: {
    slidesToShow: 1,
  }
  },
  {
  breakpoint: 767,
  settings: {
    slidesToShow: 1,
  }
  },
  ]
  });

  $(".prev-btn").click(function () {
		$(".meet-slider").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".meet-slider").slick("slickNext");
	});


 

$('.banner-slider-content').slick({
vertical: true,
autoplay: true,
autoplaySpeed: 2000,
speed: 200,
arrows: false,
}); 


$('.why-choose-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 300,
  infinite: false,
  autoplaySpeed: 5000,
  autoplay: false,
  margin:15,
  responsive: [
  {
  breakpoint: 1199,
  settings: {
    slidesToShow: 1,
  }
  },
  {
  breakpoint: 767,
  settings: {
    slidesToShow: 1,
  }
  },
  ]
  });

 


$('.accordion-list > li > .answer').hide();
$('.accordion-list > li').click(function() {
 if ($(this).hasClass("active")) {
   $(this).removeClass("active").find(".answer").slideUp();
 } else {
   $(".accordion-list > li.active .answer").slideUp();
   $(".accordion-list > li.active").removeClass("active");
   $(this).addClass("active").find(".answer").slideDown();
 }
 return false;
});


$(window).scroll(function() {
  var scrollPosition = $(window).scrollTop();
   var oneSection = $(".ecommerce-section").offset().top;
  var twoSection = $(".teaching-finance-section").offset().top;
  var tabSticky = $(".tab-sticky");
  console.log("oneSection", oneSection, "twoSection", twoSection, "tabSticky", tabSticky );
  tabSticky.removeClass("fixed-top");
   if (scrollPosition >= oneSection) {
    tabSticky.removeClass("fixed-top");
    tabSticky.addClass("fixed-top");
  }
  if (scrollPosition >= twoSection) {
    tabSticky.removeClass("fixed-top");
  }
  });


});

 
$(document).on('click', '.included-answer', function(){
  $(this).addClass('active').siblings().removeClass('active')
});
 






 




  // $(document).ready(function() {
  //   $(window).scroll(function() {
  //   var scrollPosition = $(window).scrollTop();
  //    var oneSection = $(".ecommerce-section");
  //    if (oneSection.length) {
  //     oneSection.offset().top;
  //    }
  //    var twoSection = $(".teaching-finance-section");
  //    if (twoSection.length) {
  //     twoSection.offset().top;
  //    }
    
    
  //   var tabSticky = $(".tab-sticky");
  //   // console.log("oneSection", oneSection, "twoSection", twoSection, "tabSticky", tabSticky );
  //   tabSticky.removeClass("fixed-top");
  //    if (scrollPosition >= oneSection) {
  //     tabSticky.removeClass("fixed-top");
  //     tabSticky.addClass("fixed-top");
  //   }
  //   if (scrollPosition >= twoSection) {
  //     tabSticky.removeClass("fixed-top");
  //   }
  //   });
  
  //   });


// $(document).ready(function() {
// 	var s = $(".sticker");
// 	var pos = s.position();					   
// 	$(window).scroll(function() {
// 		var windowpos = $(window).scrollTop();
// 		if (windowpos >= pos.top & windowpos <=1000) {
// 			s.addClass("stick");
// 		} else {
// 			s.removeClass("stick");	
// 		}
// 	});
// });









 
