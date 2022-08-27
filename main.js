// let Name = "Abraham"
// let job = 'Web Developer'
// let City = 'miami'
// let Age = 30
// let html;

// // Template Literals
// html=`
//     <ul>
//     <li>Name: ${Name}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${City}</li>
//     <li>Age: ${Age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>

// `;
// document.body.innerHTML = html
// document.write(html)
let welcome
let Request
let deliveryLocation
let payment
    let tesla_amount
    let acc_name
    let ride
    let auto_pilot
    let rate
    let driver_person
    let responds
    let dev_name
TESLA()
function TESLA(){
    welcome= parseInt(prompt("Tesla \n Welcome to urban Teslar \n 1. proceed \n 2.Cancel"))
    if(welcome === 1){
        request =parseInt(prompt("Tesla \n 1. Request a Ride \n 2. Request a Driver \n 3. Work as a Dev"))
     
         if(request === 1){
             deliveryLocation = prompt("Tesla \n  AI Rider Activation Process \n Please Enter Location")
             local(deliveryLocation)
         }
         else if(request === 2){
            driver_person = prompt("Tesla\n Driver Gender?")
            deliveryLocation = prompt("Tesla \n Please Enter Location")
            personel(local)
         }
         else if(request === 3){
           dev_name = prompt("Tesla\n Enter your name")
           if(dev_name){
            responds = prompt("Tesla\n Welcome " + dev_name + " to Tesla Developers World\n Please Select Area of Expertise\n 1. Front End \n 2. Back End \n 3. Fullstack")
            Dev(responds)
           }
           else{
            TESLA()
           }
         }
     }
     else{
         thanks();
     }
}






// Functions Are written here
function Dev(responds){
    if(responds ==="1"){
        alert("Tesla\n Congratulation " + dev_name + "\n we have recieved your Interest, and we would get back to your soonest\n on your request as a Front End Developer")
    }
    else if(responds === "2"){
        alert("Tesla\n Congratulation " + dev_name + "\n we have recieved your Interest, and we would get back to your soonest\n on your request as a Back End Developer" )
    }
    else if(responds === "3"){
        alert("Tesla\n Congratulation " + dev_name + "\n we have recieved your Interest, and we would get back to your soonest\n on your request as a Fullstack Developer ")
    }
    else{
        TESLA()
    }
    thanks()
}
function thanks(){
    if(confirm("Are You sure you want to exit?")){
        alert("Thank you we look forward to\n seeing you soonest from Tesla")
    }
    else{
        welcome
    }
}

function personel(){
    if(deliveryLocation){
       local(deliveryLocation);
    }
    else{
        driver_person
    }
}

function local(deliveryLocation){
    if(deliveryLocation){
        alert("Location confimred as  ".concat( deliveryLocation))
       payment =parseInt(prompt("Tesla\n Make payment\n 1. Transfer"))

       if(payment === 1){
       tesla_amount =(prompt("Tesla\n Enter Amount"))

       if(tesla_amount){
       acc_name = prompt("Tesla\n Enter your Account Name")

       if(acc_name){
       alert("Tesla\n" + acc_name + " You are paying " + tesla_amount + "\n For your Ride to " + deliveryLocation)
          auto_pilot =  prompt("Tesla\n Please confirm transaction\n to activate Tesla Auto Pilot \n 1. Confirm \n 2. Go back")

          if(auto_pilot === "1"){
            alert("Tesla\n Sucess! Payment Recieved \n Tesla Auto Pilot activavted successfully")
            rate = prompt("Tesla\n Please Rate our Services")

            if(rate >= 5){
                alert("Tesla\n Thank you for your Feedback \n we are Dedicated to serving you more")
                alert("Tesla\n Thank you for Riding with us")
            }
            else{
                alert("Tesla \n Thank you for your feedback \n we would get back to you as soon as possible")
            }
          }
          else{
            acc_name
          }
        }
        
       }
       else{
        acc_name
       }
       }
       else{
        alert("Enter Amount")
        tesla_amount
       }
       }
       else{
        payment
       }
    }
