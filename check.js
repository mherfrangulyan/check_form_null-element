//Usinng JQuery 1.12.1 and Native Javascript Code (Recursive) 

// Geting all inputs in your Form
const active_elem = $('#'+Your_Form_Id+' input');
        var i = 0;

// Function that geting each element value and if any
// input element value is null return that not all inputs have value
        const check_f = function ch_f(i, result) {
          const input_name = $(active_elem[i]).val();
          if(input_name !== ""){
              i = i+1;
              if(i<active_elem.length){
                  return ch_f(i)
              }else{
                  result = 'completed';
                  return result;
              }
          }else{
              result = 'is_null';
              return result;
          }
        };