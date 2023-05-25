const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const userSchema=new Schema({
    username:{type:String, reuired:true,unique:true},
    password:{type:String, reuired:true},
});
const UserModel=model('User',userSchema);
module.exports=UserModel;