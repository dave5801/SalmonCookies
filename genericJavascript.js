//https://github.com/codefellows/seattle-201d42/blob/master/class-06-dom-objects-domain_modeling/lab/assets/support.md
//https://github.com/codefellows/seattle-201d42/blob/master/class-07-oop-constructors-tables/demo/app.js

//access html table
var salmonCookieTable = document.getElementById("salmonCookieTable");

//Store object constructore
function Store(storeName, minCustomers, maxCustomers, avgCookiePerSale){
    this.storeName = storeName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiePerSale = avgCookiePerSale
    Store.allStores.push(this);
}

//initialize array for every store in Seattle
Store.allStores = []

//build tables
Store.prototype.render = function(){
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');

    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

    salmonCookieTable.appendChild(trEl);
};

//create header for store tables
Store.renderHeader = function(){

     var headerRow = document.createElement('tr');
     var headings = ['Store Name', 'Min Customers', 'Max Customers', 'Average'];

     
}


//Initialize store objects
var firstAndPike = new Store("First and Pike",23,65,6.3);
var seaTacAirport = new Store("Sea Tac", 3,24,1.2);
var capitolHill = new Store("Capitol Hill", 20,38,2.3);
var alki = new Store("Alkie", 20,38,2.3);

firstAndPike.render();
seaTacAirport.render();
capitolHill.render();
alki.render();

//Store.renderHeader();
