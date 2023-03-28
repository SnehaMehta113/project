export default {
 validationMandatory (val) {
    return !!val || 'Mandatory Field'
 },
 validationNoSpace (val) {
   return !val.match(/\s/i) || 'No space is not Allowed'
},
 validationNoSymbols (val) {
    return !val.match(/\W/i) || 'Symbols not Allowed'
 },
 
 validationContactNumber (val) {
   return !((val.length > 10 || val.length < 10 )) || 'Contact Number is not valid' 
 },
 ValidationString (val) {
   return !!((val >='a' && val <='z' || val >='A' && val<='Z')) || 'Enter valid character'
 }
}