// import dotenv from "dotenv";
// import { app } from "../functions/app.js";

// dotenv.config();


//     app.listen(process.env.PORT || 8000, ()=>{
//         console.log(`Server is running at port : ${process.env.PORT || 8000}`)
//     })




// export const handler = async (event, context)=>{
//     return new Promise((resolve, reject)=>{
//         const {method, path, headers, body} = event;
//         const req = {
//             method,
//             url: path,
//             headers,
//             body: JSON.parse(body || "{}")
//         }

//         const res = {
//             statusCode: 200,
//             setHeader: (key, value) => headers[key] = value,
//             end: (data) => resolve({
//                 statusCode: res.statusCode,
//                 headers,
//                 body: data
//             })
//         }

//         app(req, res);

//     })
// }