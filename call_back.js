function explain_callback(name,age,task){
    console.log('hello ',name);
    console.log('Your age',age);
    task();

}
function washHand(){
    console.log('Wash hand with soap');
}
function takeShower(){
    console.log('Take Showor');
}
explain_callback('Apurba Roy', 17, washHand);
explain_callback('Anik ', 21, takeShower);