const http = require('http')

var option = {
    host:'localhost',
    port:'5500',
    path:'/client.html'
}

var callback = function(res){
    var body = ''
    res.on('data',function(data){
        body += data
    })

    res.on(end,function(){
        console.log(body)
    })
}
var req = http.request(option,callback)
req.end()