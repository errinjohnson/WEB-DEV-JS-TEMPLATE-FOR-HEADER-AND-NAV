 //create promo code spefic to sessions of an event. ex: IoTConference
//promo code should only allow x qty for a specfic session within its same event(IoTConference).
//ex: promo code name = techWorkshop, IotConference.techWorkshop.session will give x qty session tickets for y amt to eventComboMember.
//After eventComboMember uses all 'sessions' for techWorkshop will no longer be valid 
//After eventComboMember uses ticket limit for techWorkshop, code no longer valid for that member.

function myFuncReset() {
  document.getElementById("promocodeform").reset();
}

//Class IoTConference {}

//event variables

/* var gotCode = "";
var ticket_price;
var ticket_qty;

function userInput()
{
    var returnArray = [];
    
    var x = prompt("ticket limit:  ");
    var session_code_qty = parseInt(x);
    
    returnArray.push(session_code_qty);
    
    var y = prompt("ticket price: ");
    var session_code_price = parseInt(y);
    
    returnArray.push(session_code_price);
    
    var session_code_name = prompt("add a promo code name (name of workshop or session): ");
    returnArray.push(session_code_name);
    
    return returnArray;
}


function session_code()
{    
    var returnValue = userInput();
    
   if(returnValue[2] == gotCode)
   {
       if(ticket_qty <= returnValue[0])
       {
        ticket_qty = returnValue[0];
        ticket_price = returnValue[1];
        }
        else 
        {
          /// this code only allows this session_qty for this session_price, please enter qty less than or equal too.  or enter "x" exit code.
        }
   }
        
}session_code(); */
    