let x = new Promise((resolve, reject) => {

    setTimeout(() => {
      const success = false;

      if (success) {
        
        resolve('Data fetched successfully');
      } else {
        
        reject('Error: Unable to fetch data');
      }
    }, 2000);
  });

  x.then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });