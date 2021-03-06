
$(".menuEnd button").click(function(){
  window.location = 'index.html';
})

$("#link1, .list1").click(function(){
    $(".list1").addClass("show");
  });
  $("#link1").mouseout(function(){
    $(".list1").removeClass("show");
  });
  $("#link2").click(function(){
    $(".list2").addClass("show");
  });
  $("#link2").mouseout(function(){
    $(".list2").removeClass("show");
  });
  $("#link3").click(function(){
    $(".list3").addClass("show");
  });
  $("#link3").mouseout(function(){
    $(".list3").removeClass("show");
  });
  
  $(".btnaction").click(function(){
    $(".menuBlock").toggle(".menuBlockOver");
  });


  const intro = introJs();

  intro.setOptions({
    steps: [
      {
        element: '.step1',
        intro: '<ul><li>Employee desktop all in a single pane of glass</li><li>Audio and employee desktop recorded automatically</li><li>Employee selects desktop screen to share</li></ul>',
        position: 'top',
        hidePrev: true,
      },
      {
        element: '.step2',
        intro: 'Employee becomes Ready to begin receiving calls',
        position: 'left'
      },
      {
        element: '.step3',
        intro: 'Valuable <b>information shows</b> <ul><li>Caller ID</li><li>Skill destination</li><li>Time on call</li></ul>Employees can manage average call times.',
        position: 'bottom-middle-aligned'
      },
      {
        element: '.step4',
        intro: 'Employees can <b>Pause</b> recording of conversation and screen when gathering sensitive information',
        position: ''
      },
      {
        element: '.step5',
        intro: 'Employees can <b>Resume</b>  recording with a single click',
        position: ''
      },
      {
        element: '.step6',
        intro: 'Employees can request assistance using address book',
        position: 'left'
      },
      {
        element: '.step7',
        intro: '<ul><li>Employees can request assistance using address book</li><li>Employees can <b>Transfer the caller and Conference</b></li></ul>',
        position: 'left'
      },
      {
        element: '.step8',
        intro: 'Employees can connect with customers who have sent email, chat, and text messages',
        position: 'right'
      },
      {
        element: '.step9',
        intro: '<ul><li>Chat message needing response Employee accepts chat and sees</li><li>Employee <b>accepts chat and sees preview</b></li></ul>',
        position: 'right'
      },
    ],
    exitOnOverlayClick: false
  })

  intro.onchange(function(targetElement) {
    if (this._currentStep === 1) {
      $(".selectScreen").removeClass("animate__bounceInDown");
      $(".selectScreen").addClass("animate__fadeOutDown");
      $(".step1").addClass("hide");
      $(".step2").attr("src","assets/img/img2.png");
      $(".step2").addClass("step2img")
    } 
    if (this._currentStep === 2) {
      $(".step2").removeClass("step2img");
      $(".tour1").attr("src","assets/img/icon-tour1img2.png");
      $(".tour2").attr("src","assets/img/icon-tour1img3.png");
      $(".tour3").attr("src","assets/img/icon-tour1img4.png");
      $(".tour5").attr("src","assets/img/icon-tour1img5.png");
      $(".tour6").attr("src","assets/img/icon-tour1img6.png");
      $(".tour7").attr("src","assets/img/icon-tour1img7.png");
      $(".tour8").attr("src","assets/img/icon-tour1img8.png");
      $(".tour9").attr("src","assets/img/icon-tour1img9.png");
      $(".tour10").attr("src","assets/img/icon-tour1img10.png");
      $(".tour11").attr("src","assets/img/icon-tour1img11.png");
      $(".step3").addClass("borderorange");
    } 
    if (this._currentStep === 3) {
      $(".step3").removeClass("borderorange");
      $(".step4").addClass("borderorange");
      $(".tour2").attr("src","assets/img/icon-tour1img3-1.png");
    } 
    if (this._currentStep === 4) {
      $(".step3").removeClass("borderorange");
      $(".step4").addClass("borderorange");
      $(".tour2").attr("src","assets/img/icon-tour1img3.png");
    }
    if (this._currentStep === 5) {
      $(".step4").removeClass("borderorange");
      $(".tour5").addClass("borderorange");
      $(".select-rigth").addClass("show");
    } 
    if (this._currentStep === 6) {
      $(".tour5").removeClass("borderorange");
      $(".select-rigth").addClass("show");
      $(".step7").attr("src","assets/img/list-img-2.png");
    } 
    if (this._currentStep === 7) {
      $(".tour5").removeClass("borderorange");
      $(".select-rigth").removeClass("show");
      $(".step8").css('border', '3px solid #ea6834');
    }
    if (this._currentStep === 8) {
      $(".step8").css('border', '0px solid #ea6834');
      $(".sectLeft-2").css('display', 'block');
      $(".btnaction").addClass('animate__fadeInDown');
    }
  });

  

