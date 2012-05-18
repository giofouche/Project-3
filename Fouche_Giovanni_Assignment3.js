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



