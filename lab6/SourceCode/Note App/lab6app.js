const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const customers = require('./customer.js');

//****************** */

const nameOptions = {
    describe: 'Name of Customers',
    demand : true,
    alias : 'n'
}

const idOptions = {
    describe: 'id of a customer',
    demand : true,
    alias : 'i'
}

const argv = yargs

    .command('add', 'Add a new customer', {
        name: nameOptions,
        id: idOptions
    })
    .command('list', 'List all customers')
    .command('read', 'Read a customer', {
        id: idOptions
    })
    .command('remove', 'Remove a Customer', {
        name: nameOptions
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'add'){
    var customer = customers.addCustomer(argv.name,argv.id);
    if (customer){
      customers.logCustomer(customer);                                //add a new note
    } else{
      console.log("Customer already exists");
    }
}

else if (command === 'list') {
  var AllCustomers = customers.getall();
  console.log(`Printing ${AllCustomers.length} customer(s).`);
  AllCustomers.forEach((customer)=>{                                //list all note(s)
    customers.logCustomer(customer);
  });
}

else if (command === 'read') {
   var customer = customers.getCustomer(argv.id);
   if(customer){
    customers.logCustomer(customer);                                //read a note 
          }
   else{
    console.log("Customer not found");
   }
}

else if (command === 'remove'){
    var destruct = customers.removeCustomer(argv.name);
    if(destruct){
        console.log(`Customer already delete`);
    }else{
        console.log(`Something wrong!`);
    }
}

else{
  console.log('command customer recognized'); 
}