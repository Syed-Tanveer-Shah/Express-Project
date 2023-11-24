import express from "express"

const contactcontroller=(req,res)=>{
    res.render('contact',{'title' :'Contact'})
}
export default contactcontroller