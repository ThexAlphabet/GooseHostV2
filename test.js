const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

stripe.accounts.list({ limit: 100 })
  .then(accounts => {
    console.log(accounts);
  })
  .catch(error => {
    console.error(error);
  });
