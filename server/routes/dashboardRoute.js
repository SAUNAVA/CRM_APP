import express from 'express'
// import User from '../models/User.model'
import Client from '../models/Client.model.js'
const router = express.Router()

router.get('/overview' , async(req,res)=>{

    try {
        const userId = req.user.id

        const totalClients = await Client.countDocuments({userId: userId})

        res.status(200).json({
            totalClients
        })
    } catch (error) {
        console.error("Error fetching stats")
        res.status(500).json({
            message: "Internal server error"
        })
    }


})

export default router