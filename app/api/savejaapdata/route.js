import connectDB from "../../config/db";
import { jaapModel } from "../../models/jaapCollection";
import  {prompt}  from "../../prompt"
import  { v2 as cloudinary} from "cloudinary" 
import Groq from "groq-sdk"
import { NextResponse } from "next/server";


const groq = new Groq(
  {
    apiKey : process.env.GROQ_API_KEY
  }
);

const cloudinaryConfig = cloudinary.config({
  cloud_name  : process.env.cloud_name,
  api_key  : process.env.api_key,
  api_secret   : process.env.api_secret
})

export async function POST (req, res){
    connectDB()
    const form = await req.formData()

    const file = form.get("jaap")
    const aajKiTarik = form.get("todaysDate")

    if (!file) {
      return new Response("No file uploaded", { status: 400 });
    }

    if (!aajKiTarik) {
      return new Response("No date was passed", { status: 400 });
    }


    const bytes = await file.arrayBuffer()
    const buffer  = Buffer.from(bytes)

    const response = new Promise((ress, rej)=>{
      cloudinary.uploader.upload_stream(
        {folder : "jaapDB_upload"},
        (err,result)=>{
          if (err) rej(err)
          else ress(result)
        }
      ).end(buffer)
    })

    const resultt = await response
    console.log("resultt", resultt) 
    

    const makeReq =  await groq.chat.completions.create({
      "messages" : [
        {
          "role" : "user",
          "content" : [
            {
              "type" : "text", 
              "text" : prompt(resultt.secure_url)
            },
            {
              "type" : "image_url",
              "image_url" : {
                "url" : resultt.secure_url
              }
            }
          ]
        }
      ],
      "model" : "meta-llama/llama-4-scout-17b-16e-instruct"
    })

   const parsedResponse = await JSON.parse(
      makeReq.choices[0]?.message?.content.replace('```') )

    const start = new Date()
    start.setHours(0,0,0,0)
    const end = new Date()
    end.setHours(23,60,60,999)


    let checkIfExist = await jaapModel.findOne({
      createdAt : { $gte : start , $lte : end }
    })

    let returnObj;
    if(checkIfExist && parsedResponse){
      if (parsedResponse.mala > checkIfExist.mala) {
        let findHowMuchMore = parsedResponse.mala - checkIfExist.mala
        checkIfExist.mala += findHowMuchMore
        await checkIfExist.save()
        returnObj = {
          message : "updated record",
          record : checkIfExist
        }
      }else{
         returnObj = {
          message : "cant update because image caannot have less numbers than the previous record", 
          record : checkIfExist
        }
      }

      return NextResponse.json(returnObj)
    }else{
      const savedDoc = new jaapModel({
        mala : parsedResponse.mala,
        dateAndTimeString : parsedResponse.date_and_time
      })
      const saved = await savedDoc.save() 
      returnObj = {
        message : "jaap entery saved",
        saved : saved
      }
      

      return NextResponse.json(returnObj)
    }

}   