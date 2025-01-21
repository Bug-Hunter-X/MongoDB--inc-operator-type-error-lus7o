```javascript
// Correct usage of $inc operator
//Type checking before incrementing
let value = getValue();//get the value from somewhere
if (typeof value === 'number'){
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{field:value}});
}else{
  console.error("Value must be a number");
}
// Or Explicitly convert to a number
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{field:parseInt(value)}});
```