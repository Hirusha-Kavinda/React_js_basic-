let nepal = {
    // add property
    mountains: ['Everests' , 'Fish Tail' , 'Annapurna'],
    
    //add method
     /* printwithDash : function (){
        //console.log('inside printwithDash',this)
        setTimeout(function(){
          //  console.log('inside setTimeout',this)
           // console.log(this.mountains.join(" - "));
        }, 3000);
    } */

    printwithDash: function() {
        setTimeout(() => alert(this.mountains.join(' - ')), 3000);
    }
};

nepal.printwithDash();