// https://github.com/khayrulamth/javascript-assignment.git
// kilometer to meter 
function kilometerToMeter(distance) {
    if (distance > 0) {
        toMeter = distance * 1000;
        return toMeter;
    }
    else {
        return "Please Enter value grater than 0";
    }
}
var kilocov = kilometerToMeter(9);
console.log(kilocov);

// budget Calculator Function
function budgetCalculator(clock, mobile, laptop) {
    if (clock < 0 || mobile < 0 || laptop < 0) {
        return ("Enter Positive value")
    }
    else {
        clockPrice = 50 * clock;
        mobilePrice = 100 * mobile;
        laptopPrice = 500 * laptop;
        totalPrice = clockPrice + mobilePrice + laptopPrice;
        return totalPrice;
    }
}
let cost = budgetCalculator(3, 2, 1);
console.log(cost);

// Hotel Cost Function
function hotelCost(days) {
    if (days == 0 || days < 0) {
        return "Enter at least 1 to stay in the hotel";
    }
    else if (days > 20) {
        cost1 = 100 * 10;
        cost2 = 80 * 10;
        cost3 = 50 * (days - 20);
        totalCost = cost1 + cost2 + cost3;
        return totalCost;
    }
    else if (days > 10) {
        cost1 = 100 * 10;
        cost2 = 80 * (days - 10);
        totalCost = cost1 + cost2;
        return totalCost;
    }
    else {
        cost = 100 * days;
        return cost;
    }
}
costInHotel = hotelCost(11);
console.log(costInHotel);

// megaFriends function
function megaFriend(nameList) {
    if (nameList.length > 0 && nameList[0].length != 0) {
        var largeName = "";
        for (var i = 0; i < nameList.length; i++) {
            if (largeName.length < nameList[i].length) {
                largeName = nameList[i];
            }
        }
        return largeName;
    }
    else {
        return ("Enter Valid Array");
    }
}
mynames = ['Khayrul', 'rana','Rejaul Karim'];
console.log(megaFriend(mynames));