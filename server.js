var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one': {
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
},

' article-two': {
    title: 'Article Two | Prasad K G',
    heading: 'Article-two',
    date:'October,5',
    content:`
<p>
           This is a test file for article one created by Prasad K Gis a test file for article two created by Prasad K G
      </p>  
    
     <p>
          T This is a test file for article two created by Prasad K G
      </p>  `
},

 'article-three': {
    title: 'Article Three | Prasad K G',
    heading: 'Article-three',
    date:'October,6',
    content:`
<p>
           This is a test file for article three  created by Prasad K Gis a test file for article threecreated by Prasad K G
      </p>  
    
     <p>
          T This is a test file for article three created by Prasad K G
      </p>  `
}
};

 
function createTemplate(data){
    var title=data.title;
    var heading= data.heading;
    var date= data.date;
    var content=data.content;

var htmltemplate=`
    <html>
         <head>
            <title>
            
                 ${title}
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
            
            ${heading}
            
            </h3>
             <div>
                  ${date}
            </div>
                ${content}
            </div>
            </body>
            
            </html>
            `
;
 return htmltemplate;
 }  
 


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req, res){
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));   
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
