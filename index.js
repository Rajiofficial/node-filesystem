// const http=require("http")
// const app=http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end("hello raji  ")
// }) 
// app.listen(4000)
// console.log("node is running")

// http.createServer("/adduser",{method:"POST"},(req,res)=>{
//     const payload=req.body
//     res.writeHead(200)
//     re.send({
//         status:"201",
//         data:result
//     })
    // res.end("hello raji  ")
// }) 
const fs=require('fs');
const fileread=async()=>{
  
 
await fs.open("./data/context.txt","r",(err,data)=>{
    if(err){
        console.log(err);
        return err;
    }
    console.log(data.toString())
    return data.toString()
})
console.log("hello") 

}
const output=  fileread()
console.log(output)

console.log("file reade")

const outputs=fs.readFileSync("./data/context.txt")
console.log(outputs.toString())



// ------****************READDIR*********
fs.readdir('./data',(err,file)=>{
    if(err){
        return err
    }
    console.log("file",file)
    file.forEach((f)=>{
        fs.readFile(`./data/${file}`,(err,content)=>{
            if(err){
                return err
            }
            console.log("content",content.toString())
        })
    })
})
 
// ------------write file--------



const newcontent="i am raji i anm new content"
fs.writeFile('./data/context.txt',newcontent,(err,data)=>{
    if(err){
        return err
    }
    console.log("added data")
    content=fs.readFileSync('./data/context.txt','utf8')
    console.log(content)

})



