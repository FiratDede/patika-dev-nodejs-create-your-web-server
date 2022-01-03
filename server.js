const http=require("http");
let server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==="/"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write("<h2>Index Sayfasina Hosgeldiniz</h2>");

    }
    else if(url==="/about"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write("<h2>Hakkimda Sayfasina Hosgeldiniz</h2>","utf-8");
        
    }
    else if(url==="/contact"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write("<h2>Iletisim Sayfasina Hosgeldiniz</h2>");

    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write("<h2>Sayfa Bulunamadı</h2>");

    }
 
    res.end();

})
let port=5000;
server.listen(port,()=>{
    console.log(`Server is listening on ${port} port`);

})