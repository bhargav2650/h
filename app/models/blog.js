const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const blogSchema=new Schema({
    id:{type:Number,required:true,unique:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    likes:{type:Number,default:0},
},
{
timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
  }
}
  );
const BlogModel=model('Blog',blogSchema);
module.exports=BlogModel;