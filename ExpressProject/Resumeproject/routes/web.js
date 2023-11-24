import express from 'express'
const router=express.Router()
 import contactcontroller from "../controller/contactcontroller.js"
import { homecontroller } from '../controller/homecontroller.js'
import { servicecontroller } from '../controller/servicecontroller.js'
import { skillscontroller } from '../controller/skillscontroller.js'
router.get('/contact',contactcontroller)
router.get('/',homecontroller)
router.get('/service',servicecontroller)
router.get('/skills',skillscontroller)


export default router