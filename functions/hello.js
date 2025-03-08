const { status } = require("express/lib/response")

exports.handler = async (event, context)=>{
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Netlify functions" 
        })
    }
}