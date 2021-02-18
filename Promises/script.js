fetch('https://api.github.com/users/kpgstapleton').then(function(result){
  return result.json(); //turn result in json object
}).then(function(response){
  console.log(response);
});