var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块

//获取本地json文件格式化生成新的json文件


//获取本地json文件
var file = path.join(__dirname, 'gz_border/yuexiu.json');
var allArr=[];
//读取json文件
fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
        res.send('文件读取失败');
    } else {
        var newData=JSON.parse(data);
        for(let j=0;j<newData.length;j++){
            let list=[];
            var index=j*2;
            if(newData[index]){
                list.push(newData[index]);
                list.push(newData[index+1]);
                allArr.push(list);
            }
        }

        //把data对象转换为json格式字符串
        var content = JSON.stringify(allArr); 

        //指定创建目录及文件名称，__dirname为执行当前js文件的目录
        var file = path.join(__dirname, 'json/yuexiu.json'); 

        //写入文件
        fs.writeFile(file, content, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('文件创建成功，地址：' + file);
        });
    }
});

//启动 node file.js



