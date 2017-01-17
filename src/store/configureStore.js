if(process.env.NODE_ENV === 'production'){
  module.exports=require('./configureStore.prod');
}else{
  debugger;
  module.exports=require('./configureStore.dev');
}
