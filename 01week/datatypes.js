const displayDayTime = () =>{
    const d = new Date();
    const day = d.getDay();
    switch(day){
      case 1:
        console.log('Today is Monday');
        break;
      case 2:
        console.log('Today is Tuesday');
        break;
      case 3:
        console.log('Today is Wednesday');
        break;
      case 4:
        console.log('Today is Thursday');
        break;
      case 5:
        console.log('Today is Friday');
        break;
      case 6:
        console.log('Today is Saturday');
        break;
      case 7:
        console.log('Today is Sunday');
        break;
      default:
        break;
    }
    
    const hour   = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();
    console.log('Time now is:',hour,':',minute,':',second);
    }
    
    displayDayTime();
    
    const convertNumberToString = (num) => console.log('String format number is:',num.toString());
    
    convertNumberToString(111);
    
    const convertStringToNumber = (str) => console.log('Number format string is:',parseInt(str,10));
    
    convertStringToNumber("222");
    
    const displayTypeOf = (data) => console.log('Type of data is:', typeof(data));
    
    displayTypeOf(12);
    displayTypeOf(null);
    displayTypeOf(undefined);
    displayTypeOf(true);
    displayTypeOf(NaN);
    displayTypeOf("Hi");
    
    const addNumber = (num1,num2) => console.log("Sum is:", num1+num2);
    
    const checkIfBothTrue = (parm1,parm2) => {
      if(parm1 && parm2)
         console.log("Both the parameters are true");
    }
    
    const checkIfEitherTrue = (parm1,parm2) => {
      if(parm1 || parm2)
         console.log("Either parameter is true");
    }
    
    const checkIfNoneTrue = (parm1,parm2) => {
      if(!parm1 && !parm2)
         console.log("None of the parameters are true");
    }
    
    checkIfBothTrue(1,5);
    checkIfEitherTrue(0,7);
    checkIfNoneTrue(0,0);
    //End of program