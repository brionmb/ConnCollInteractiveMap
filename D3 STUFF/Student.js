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
 var dorm=dorm;
 var gym=gym;
 var dining=favDiningHall;
 var currentLocation="";
 var rateGym = [];//size should be 21. 3 rates for each day of the week
 var rateFood =[];//likelyhood that someone will go to eat at that time. similar size to rateGym
 var rateDinningHalls = []; //first indicates dinning hall, the second is the time, i.e. 0 is 7am-10am.the second one is similar to rateFood
 							// so, rateDinningHalls[0][0] would %of people that go to harris at 7-10am  on monday
 var rateStudy = [];//similar to rateGym
 var energyGym = 10;//multiplier for the gym. will be low if just went to the gym
 var energyFood = 20;//multiplier for going to eat. much higher since we eat so often. should also regens quicker
 var energyStudy = 15;//multiplier for going to study.
 var energyHarris = 10;
 var energyJA = 10;
 
 if(dorm=="Off campus")
 	dorm="Jane Addams House";
 
 scope.replenishEnergy = function()
 {
 	energyGym+=1;
 	energyFood+=3;
 	energyStudy+=1;
 	energyHarris+=1;
 	energyJA+=1;
 		
 
 }
 
 //day between 0-6, 0 being monday. time between 0-3, 0 being morning
 scope.getNextFreeTime = function(x)
 {
	 var day = x[0];
	 var timeSequence = x[1];
	 var chanceGym = rateGym[day*3+timeSequence]* energyGym* (Math.random() + 0.1);
	 var chanceFood = rateFood[day*3+timeSequence]* energyFood* (Math.random() + 0.1);
	 var chanceStudy = rateStudy[day*3+timeSequence]* energyStudy* (Math.random() + 0.1);
 
	 if(chanceGym>chaneFood && chanceGym>chanceStudy)
	 {//go to the gym
		energyGym = energyGym/5;
		return "gym";
	 }
	 else if(chanceFood>chanceGym && chanceFood>chanceStudy)
	 {//go eat
		energyFood = energyFood/5;
		//decide which dinning hall to use
		var chanceHarris = rateDinningHalls[0][day*3+timeSequence]* (Math.random() + 0.1);
		var chanceJA = rateDinningHalls[1][day*3+timeSequence]* (Math.random() + 0.1);
		
		if(chanceHarris>chanceJA)
		{
			energyHarris -= 3;
			return "Harris";
		}
		else
		{
			energyJA -= 3;
			return "JA";
		}
	
 
 
	 }
	 else
	 {//study
		energyStudy = energyStudy/5;
		return "study";
	
	  }
 
 
 }
 
 scope.getNextClass = function()
 {
 
 currentLocation= schedule.shift();
 schedule.push(currentLocation);
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
 scope.getDorm =function()
 {
 	return dorm;
 }
 

 //scope.addNewItinerary("four");


}