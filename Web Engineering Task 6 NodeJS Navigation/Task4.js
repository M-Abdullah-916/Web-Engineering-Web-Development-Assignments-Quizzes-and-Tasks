var fs = require ('fs');

fs.rename('mytask4.txt', 'mynewTask4.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed! PS: Check File Name Before Trying to Rename it Again!');
  }); 