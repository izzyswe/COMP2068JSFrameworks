//NPM PROMPT

//Using prompt is relatively straight forward. 
//There are two core methods you should be aware of: prompt.get() 
//and prompt.addProperties(). Their methods take strings representing property 
//names in addition to objects for complex property validation (and more). 
//There are a number of examples that you should examine for detailed usage.

//BASIC PROMPT INFORMATION
var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//Get two properties from the user: username and email

prompt.get(['username', 'email'], function (err, result) {

  if (err) throw err;
  // Log the results.
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});

//incase future thick brain isaac doesn't understand and forgets
// this -> const { username, email } = await prompt.get(['username', 'email']);
// that is the modern way, not needed nor worried for this project.


