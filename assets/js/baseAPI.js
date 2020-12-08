//每次调用$get，$post（）的时候都会调用这个函数.
$.ajaxPrefilter( function( options){
    options.url='http://ajax.frontend.itheima.net'+options.url

    console.log(options.url);
    
})
   

  
