$(document).ready(
    function(){
        //sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky')
                }
                else
                    $('nav').removeClass('sticky')
            },{
                offset:'500px'
            }
        )

        //scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
        });

        //moblie navigation
        $('.moblie-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);
                if($('.moblie-nav-icon').hasClass('fa-bars')){
                    $('.moblie-nav-icon').addClass('fa-times');
                    $('.moblie-nav-icon').removeClass('fa-bars');
                }
                else{
                    $('.moblie-nav-icon').addClass('fa-bars');
                    $('.moblie-nav-icon').removeClass('fa-times');
                }
            }
        )
    }
)