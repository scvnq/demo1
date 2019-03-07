const fs =  require('fs'); // write file module

var fetchCustomers = () => {
    try{                    // if file not exist
        var customersString = fs.readFileSync('customer-data.json')
        return JSON.parse(customersString);
    } catch(e){
        return [];
    }
};

var saveCustomers = (customers) => {
    fs.writeFileSync('customer-data.json', JSON.stringify(customers));
};

// add a new customer

var addCustomer = (name, id) =>{
    var customers = fetchCustomers();
    var customer = {name,id}

   var duplicateCustomers = customers.filter((customer)=>{
       return customer.name === name;
   });

    if(duplicateCustomers.length === 0){
        customers.push(customer);
        saveCustomers(customers);
        return customer;
    }
};

// list all customers

var getall = () => {
    return fetchCustomers();
};

// read a customer

var getCustomer = (id) => {
    var customers = fetchCustomers();
    var getCustomers = customers.filter((customer)=>{
        return customer.id === id;
    });

    return getCustomers[0]
};

// delete a customer

var removeCustomer = (name) => {
    var customers = fetchCustomers();

    var filteredCustomers = customers.filter((cus) => {
        return cus.name !== name;
    });

    //fs.writeFile('customer-data.json', JSON.stringify(filteredCustomers), function(){console.log(`${filteredCustomers}`)});
    saveCustomers(filteredCustomers);

    return customers.length !== filteredCustomers.length
};

// print out customers to screen

var logCustomer = (customer) => {
    console.log('--');
    console.log(`Name: ${customer.name}`);
    console.log(`ID: ${customer.id}`);
};

// add new function names here

module.exports = {
    addCustomer, getall, getCustomer, removeCustomer, logCustomer
};
