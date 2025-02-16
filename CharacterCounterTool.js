/*Character Counter Tool
Display the length of the text & Converts into uppercase and lowercase  & slices or replaces parts of the text
*/
//textlength
function characterCounter(text) {
    let length=text.length;
    return length;
};
const result=characterCounter('Javascript')
console.log(result);

//lowercase
const txtToLowercase=(text)=>{
    let lowercase=text.toLowerCase();
    return lowercase;
};
console.log(txtToLowercase('NODE JS'))

//uppercase
const txtToUppercase=(text)=>{
    let Uppercase=text.toUpperCase();
    return Uppercase;
};
console.log(txtToUppercase('nodejs'))
//slices
const slicedtext=function(txt,start,end){
    let sliced=txt.slice(start,end);
    return sliced;
};
console.log(slicedtext('javascript',0,8))