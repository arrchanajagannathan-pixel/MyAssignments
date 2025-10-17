
//if-else and switch-case statements in JavaScript to make decisions in a program
let browserName="Chrome"
if(browserName="Chrome"){
    console.log("Launching Chrome browser..")
}else{
    console.log("Launching default browser..")
}

let testType="sanity"
switch(true){
    case(testType=="smoke"):
    console.log("Running Smoke Tests...");
    break;
    case(testType=="sanity"):
    console.log("Running Sanity Tests...");
    break;
    case(testType=="regression"):
    console.log("Running Regression Tests...");
    break;
    
    default: console.log("Running Default Smoke Tests..");
}