// Giovanni Fouche


var newYork = {
    travelers: ["Bethany", " Anthony", " Kristina "]
};

var springBreak = {
    type: "New York",
    days: 3,
    myVacation: function (trip) {
        console.log("We want to take a " + this.type + " " + trip + ". Let me see how many days I can take off work.");
        if (this.days >= 5) {
            console.log("Looks like we can take a week long" + trip + "!")
        } else {
            if (this.days < 5 && this.days >= 1) {
                console.log("Looks Like we can only spend a few days.")
            } else {
                console.log("I can't get time off looks like we won't be going.")
            }
        }
    }

};


var goToNewYork = {
    tickets: true,
    funds: 1000,
    canGo: function (myfunds, mytickets) {
        if (mytickets == this.tickets) {
            if (myfunds >= this.funds) {
                console.log("We booked our bus tickets so we get to go on our trip!");
                return true; 
            } else {
                console.log("We have our tickets, but no one has any money.  Looks like we won't be going after all.");
                return false; 
            }
        } else {
            console.log("No tickets.We wil have to try again another time.");
            return false; 
        }
    }
};



var seats = {
    people: 4,
    tickets: function (who) {
        var needNumberTickets;
        console.log("I want to see Lion King on Brodway. Let me ask " + who + "if they would like to come.");
        numberTickets = 1;
        while (numberTickets <= this.people) {
            console.log(numberTickets);
            numberTickets++; 
        }
        needNumberTickets = this.people;
        return needNumberTickets; 
    }
};


var myLodging = {
    weekStay: 3,
    dailyBreakfast: 30,
    totalHotelCost: function (json) {
        var whichHotel;
        console.log("Let me search for hotels and check for prices. Here are my options:");
        for (var i = 0; i < json2.lodging.length; i++) {
            console.log(" ");
            if (json2.lodging[i].breakfast === false) {
                console.log("No continental breakfast at " + json2.lodging[i].hotel + ".");
                
                for (var d = 1; d <= this.weekStay; d++) {
                    console.log("We will need $" + this.dailyBreakfast + " for Day " + d + " breakfast.");
                }
            } else {
                console.log("Looks like breakfast is included at " + json2.lodging[i].hotel);
            }
            var theLodging = json2.lodging[i];
            var pricePerWeek = theLodging.pricePerNight * this.weekStay;
            console.log("The " + theLodging.hotel + " is $" + theLodging.pricePerNight + " per night. This will cost $" + pricePerWeek + " for the duration of the trip.");
            if (json2.lodging[i].breakfast === false) {
                var pricePerWeek = pricePerWeek + (this.dailyBreakfast * this.weekStay); 
                console.log("Plus $" + this.dailyBreakfast * this.weekStay + " to cover breakfast for the trip, making it $" + pricePerWeek + " for the duration of the trip.");
            } else {
                console.log("Breakfast included!");

            }

        }
        console.log(" ");
        whichHotel = "I think we will stay at " + json2.lodging[1].hotel + ". They are cheaper per night and offer breakfast!";
        return whichHotel;
    }
};



function extra() {
    var myextra = [];
    myextra[0] = "a sauna";
    myextra[1] = " an exercise room";
    myextra[2] = " and high speed internet.";

    return myextra.join();
}



var allTheGuests = {
    whoAreWe: function (json) {
        console.log("To book a room, I will need to let them know the names and ages of each guest.");

        for (var key in json.guests) {
            var guest = json.guests[key];
            console.log(guest.name + " age " + guest.age);
        }

        
    }
};

springBreak.myVacation("trip");

if (goToNewYork.canGo(1000, true)) {
    console.log("Never been to New York. Cant wait!");
} else {
    console.log("Can't go this time. We can always go later.");
};

var howManyTix = seats.tickets(newYork.travelers);
console.log("We need " + howManyTix + " brodway tickets.");

var theHotel = myLodging.totalHotelCost(json);
console.log(theHotel);
console.log("And it includes:");
console.log(extra());

allTheGuests.whoAreWe(json);