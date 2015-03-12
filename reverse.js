function reverse(mystr){
  return mystr.split('').reverse().join().replace(/,/g,'');
  //had to use regular expressions to remove unwanted commas in my reversed string
}
