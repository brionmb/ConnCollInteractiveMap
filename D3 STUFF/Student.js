 function Student(sched, dorm, gym, favDiningHall){

 var scope=this;
 var classes=sched;
 var schedule=classes; //make queue to implement
 var monday=classes[0];
 var tuesday=classes[1];
 var wednesday=classes[2];
 var thursday=classes[3];
 var friday=classes[4];
 var saturday=classes[5];
 var sunday=classes[6];
 console.log(monday);
 var dorm=dorm;
 var gym=gym;
 var dining=favDiningHall;
 var currentLocation="";
 
 
 
 scope.getNextClass= function()
 {
 
 currentLocation= schedule.shift();
 return currentLocation;
 
 
 
 
 }
 
 scope.addNewItinerary= function(x)
 {
 	schedule.push(x);
 
 }
 
 scope.getFullItinerary = function()
 {
   return schedule;
 
 }
 
 scope.setClassSchedule = function(x)
 {
   for(i=0;i<classes.length;i++)
   {
   		schedule.push(x[i]);
   
   }
 }
 

 scope.addNewItinerary("four");
 console.log(schedule);

}