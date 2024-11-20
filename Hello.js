// console.log('Hello World');

export default function HelloRoutes(app){
    app.get("/hello", (req, res) => {
        res.send("Hello World!111111111");
    });
    app.get("/",(req,res) =>{
        res.send("11111111");
    })
}