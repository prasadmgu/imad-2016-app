var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone= {
    title: 'Article One | Prasad K G',
    heading: 'Article-One',
    date:'October,4',
    content:`
<p>
          This is a test file for article one created by Prasad K G This is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K G.This is a test file for article one created by Prasad K G
      </p>  
    
     <p>
          This is a test file for article one created by Prasad K G This is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K GThis is a test file for article one created by Prasad K G.This is a test file for article one created by Prasad K G
      </p>  `
};
function createTemplate(data){
    var title=data.title;
    var heading= data.heading;
    var date= data.date;
    var content=dat.content;

var htmltemplate=`
            <html>
               <head>
                <title>
            
                 $(title)
                 </title>
            
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
            
            </head>
            <body>
            <div class="container">
            <div>
            <a href="/">Home ></a>
            </div> 
            <hr/>
            <h3>
            
            $(heading)
            
            </h3>
            <div>
            $(date)
            </div>
            $(content)
            </div>
            </body>
            
            </html>
`;
 return htmltemplate
 }  
 


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req, res){
res.send(createTemplate(articleone));   
});
app.get('/article-two',function(req, res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req, res){
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));   
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
