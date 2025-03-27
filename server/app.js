import express from "express";
import dotenv from "dotenv";

import bodyParser from "body-parser";
import nodemailer from "nodemailer";

import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors({origin : process.env.FRONTEND_URL, credentials : true}));

// to user details
app.post("/api/user/details" , async(req, res) => {
    
    try {
        const {name, email, phone, message} = req.body;
       
        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: "Required fields can't empty"
           });
        }  

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "devharishjuyal18@gmail.com",
                pass: "kmxeehnfzxtdivat",  // Use App Password, NOT your real password
            },
        });
        
        const mailOptions = {
            from: "devharishjuyal18@gmail.com",
            to: email,   
            subject: "Confirmation Mail",
            html: 
            `<body style="background-color: #F5F5F7; min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 0 30px;">
            <div style="max-width: 400px; width: 100%;">
            
            <h1 style="color: #2d3748; font-size: 18px ; font-weight: 100">Harish Chandra Juyal</h1>
            <hr style="margin: 30px 0; border: none; height: 1px; background-color: #d1d1d1;">
            <h2 style="color: black; font-size: 30px; font-weight: 300; margin-bottom: 16px;">Form submission</h2>
            
            <p><strong>Name</strong> : ${name}</p>
            <p><strong>Email address</strong> : ${email}</p>
            <p><strong>Phone number</strong> : ${phone}</p>
            <p><strong>Message</strong> : ${message}</p>
            <p><strong>I allow this website to store my submission</strong> : Yes✅ </p>
            
            <hr style="margin: 50px 0; border: none; height: 1px; background-color: #d1d1d1;">
            
            <div style="color: #718096;">
                <p>Harish Juyal, 
                        <a href="https://www.google.com/maps/search/?api=1&query=Delhi+India+110084" 
                        style="color: #3182ce; text-decoration: none;" target="_blank">
                        Delhi, India 110084
                        </a>
                </p>
            </div>
            </div>
            </body>
            `
        };  
        
        
        await transporter.sendMail(mailOptions);
        
        
        return res.status(200).json({
            success : true,
            message : "Thank you for your information. We received your response and emailed you a copy."
        })
        
    }
    catch(err) {
        console.error(err);
        res.status(400).json({ success: false, message: "Error in sending mail" });
    }  
})


//to user Intake
app.post("/api/user/intake" , async(req, res) => {
    
    try {

        const {name, email, services, deadline, budget, technologies, projectDetails, additionalComments} = req.body;
        
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                // error: "Validation Error",
                message: "Name and email are required fields"
            });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "devharishjuyal18@gmail.com",
                pass: "kmxeehnfzxtdivat",  // Use App Password, NOT your real password
            },
        });
        
        const mailOptions = {
            from: "devharishjuyal18@gmail.com",
            to: email,   
            subject: "Confirmation Mail",
            html: 
            `<body style="background-color: #F5F5F7; min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 0 25px;">
              <div style="max-width: 400px; width: 100%; padding: 0 25px;">

                <h1 style="color: #2d3748; font-size: 18px ; font-weight: 100">Harish Chandra Juyal</h1>
                <hr style="margin: 30px 0; border: none; height: 1px; background-color: #d1d1d1;">
                <h2 style="color: black; font-size: 30px; font-weight: 300; margin-bottom: 16px;">Form submission</h2>

                <p><strong>Name</strong> : ${name}</p>
                <p><strong>Email address</strong>: ${email}</p>
                <p><strong>What services are you interested in?</strong> : ${services}</p>
                <p><strong>What is your project deadline ?</strong> : ${deadline}</p>
                <p><strong>What is your budget range ?</strong> : ${budget}</p>
                <p><strong>What technologies are you planning to use?</strong> : ${technologies}</p>
                <p><strong>Please describe your project in detail</strong> : ${projectDetails}</p>
                <p><strong>Additional questions or comments</strong> : ${additionalComments}</p>

                <hr style="margin: 50px 0; border: none; height: 1px; background-color: #d1d1d1;">

                <div style="color: #718096;">
                <p>Harish Juyal, 
                    <a href="https://www.google.com/maps/search/?api=1&query=Delhi+India+110084" 
                    style="color: #3182ce; text-decoration: none;" target="_blank">
                    Delhi, India 110084
                    </a>
               </p>
        </div>
     </div>
 </body>
`
    };  
        
     
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({
          success : true,
          message : "Thank you for your information. We received your response and emailed you a copy."
    })

    }
     catch(err) {
        console.error(err);
        res.status(400).json({ success: false, message: "Something went wrong..." });
     }  
}) 



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listen at port ${PORT}`); 
})


