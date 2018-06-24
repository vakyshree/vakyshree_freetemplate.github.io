window.onload= Lab;
$(window).load(function() {
												// Animate loader off screen
												$("#loading_screen").fadeOut("slow");;
											});
function Lab()
{
	console.log("lab js now...Deadlines!!!!");
	initFullpage();
	initLabSlick();
	setTimeout(changeLoadBG, 2000);
	initLoginPage();
}
function initLoginPage()
{
	console.log("initlOGIN PAGE");
	Login_butt=document.getElementById("login_butt");
	Login_butt.onclick = ShowLogInPanel;
}

function ShowLogInPanel()
{
	console.log("Login Panel");
	login_container = document.getElementById("log_in_container");
	login_container.style.display ="block";
	var $isAnimate = $('#log_in_content');
	$isAnimate.addClass('animated fadeIn'); 
	
	$('#log_in_container').on('click', function(e) {
														  if (e.target !== this)
															return;
																
																login_container.style.display ="none";
													 });
}
function changeLoadBG()
				{
					CurrentColor++;
					console.log(CurrentColor);
					O = document.getElementById("Load_O");
					if(CurrentColor>NoOfColors)
						{
							CurrentColor =1;
						}
					
					if(CurrentColor ==1)
						{
							O.style.backgroundImage="url('../images/utils/logo_O.png')";
						}
					else if(CurrentColor ==2)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_pink_R.png')";	
						}
					else if(CurrentColor ==3)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_turquoise_R.png')";	
						}
					else if(CurrentColor ==4)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_blue_R.png')";	
						}
					else if(CurrentColor ==5)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_green_R.png')";	
						}	
					else if(CurrentColor ==6)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_yellow_R.png')";	
						}
					else if(CurrentColor ==7)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_red_R.png')";	
						}
					else if(CurrentColor ==8)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_black_R.png')";	
						}
					setTimeout(changeLoadBG, 2000);	
				}
function initLabSlick()
{
	console.log("LAB slick init");
	 $('.experiments_slick').slick({
																			
																			    slidesToShow: 1,
																				centerMode: false,
																				 adaptiveHeight: false,
																				 prevArrow: $('#left_arrow'),
																				nextArrow: $('#right_arrow'),
																				
																				
																				   
																				 
											  });
	$('.artwork_illustration_slick').on('beforeChange', function(event, slick, currentSlide, nextSlide)
														{
														  console.log("slickchanged");
														});
	$('.artwork_illustration_slick').on('afterChange', function(event, slick, currentSlide){
															console.log('afterChange', slick);
														});													
}

function initFullpage()
{				
						
							$('#full_page_wrapper').fullpage({
							
																	verticalCentered: false,
																	onLeave: function(index, nextIndex, direction) 
																				{
																					if(direction=="down" && index == 1)
																											{
																														DecreaseHeaderSize();	
					
																											}
																						if(direction=="up" && index == 2)
																							{
																								
																								ResizeHeaderSize();
																							}
																				}
							});
						
	
}



function ResizeHeaderSize()
{
		header_tab = document.getElementById("home_header");
		header_tab.style.paddingBottom = ".5%";
		header_tab.style.paddingTop = ".5%";
		
		
}			
function DecreaseHeaderSize()
{
		header_tab = document.getElementById("home_header");
		header_tab.style.paddingBottom = "0";
		header_tab.style.paddingTop = "0";
		
}