function smoothScroll(target,duration){
    var targeted = document.querySelector(target);
    var targetPosition =target.getBoundingClientRect().top;
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null;
    
    function scrollAnimation(currenTime){
    if(startTime==null) startTime = currentTime;
    var timeElapsed=currenTime-startTime;
        var run=ease(timeElapsed,startingPosition,distance,duration);
        window.scroolTo(0,run);
        if(timeElapsed<duration) requestAnimationFrame(scrollAnimation)
}
    
    function ease(t,b,c,d){
        t/=d/2;
        if(t<1)return c/2*t*t+b;
        t--;
        return -c/2*(t*(t-2)-1)+b;
    }
    requestAnimationFrame(scrollAnimation);
}

var section1=document.querySelector('.onaslink');
section1.addEventListener('click',function(){
    smoothScroll('.about-us-h2',3000);
})

