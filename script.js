$('.arrowcontain').click(function(){
  $('.headerimg').toggleClass('grayscale');
  $('.headertitle').toggleClass('graytitle'); 
  $('.titlebubble').toggleClass('bubbleopacity');    
$('.staffcontainer').toggleClass('staffcontaineropacity'); 
  $('.staffone').toggleClass('staffonenone');
  $('.staffoneicon').toggleClass('staffonenone');
  $('.stafficonimg').toggleClass('staffonenone');         $('.stafftwo').toggleClass('sitedesc');
  $('.sitedescinner').toggleClass('sitedescinnershow');
  $('.headerimg').toggleClass('headerimgopacity2');
  $('.staffpicone').toggleClass('staffopacity');
  $('.staffpictwo').toggleClass('staffopacity2');
  $('.staffpicthree').toggleClass('staffopacity3');
});

$('.headerimg').click(function(){
$('.headertitle').toggleClass('headertitleshow');
$('.headerimg').toggleClass('headerimgopacity');
  });