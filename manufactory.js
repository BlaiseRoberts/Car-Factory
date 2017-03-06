/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */

var Car = {
  manufactured_date: Date.now()
};

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */

var YourFavoriteMake = Object.create(Car);
YourFavoriteMake.manufacturer = "Ford";


/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
var YourFavoriteModel = Object.create(YourFavoriteMake);
YourFavoriteModel.wheels = 4;


/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var myFirstFavoriteCar = Object.create(YourFavoriteModel);
myFirstFavoriteCar.plate_number = "crayzb";
console.log(myFirstFavoriteCar);
var mySecondFavoriteCar = Object.create(YourFavoriteModel);
mySecondFavoriteCar.plate_number = "1man2b";
console.log(mySecondFavoriteCar);
var myThirdFavoriteCar = Object.create(YourFavoriteModel);
myThirdFavoriteCar.plate_number = "b1g0ne";
console.log(myThirdFavoriteCar);
var prop = 'manufacturer' in myFirstFavoriteCar;
console.log(prop);


/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
 var AnotherModel = Object.create(YourFavoriteMake);
 AnotherModel.wheels = 2;

/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */

var anotherCar = Object.create(AnotherModel);
anotherCar.plate_number = "lst0n3";
console.log(anotherCar);




