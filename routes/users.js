var express = require('express');
var User = require('../model/user')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/create',function(req,res){
  var user= new User({
    name:req.body.name,
    mobile:req.body.mobile,
    address:req.body.address
});

user.save((err,result)=>{
    if(err) {throw err;}
    else{
        res.send(result);
    }

})
} );

router.post('/saveExcel',async function(req,res){
  var data=JSON.parse(req.body);
  console.log(data.length);
  for(var i=0;i<data.length;i++){
    var user= new User({
      name:data[i][0],
      mobile:data[i][1],
      address:data[i][2]
  });
   await user.save();
  console.log(user);
  if(i==(data.length-1)){
    res.send(data);
  }
 
  }

  
} );




router.post('/delete', function(req,res){
  
  User.findByIdAndRemove(req.body._id).exec((err,result)=>{
    if(result){ 
      res.send(result);
    }else{
      console.log(err);
    }
  })
});

router.get('/getAllUser', function(req,res){
  User.find().exec((err,result)=>{
    if(result){ 
      res.send(result);
    }else{
      console.log(err);
    }
  })
});

router.post('/edit',  function(req,res){
 
  User.findByIdAndUpdate(req.body._id,{
    name:req.body.name,
    mobile:req.body.mobile,
    address:req.body.address
  }).exec((err,result)=>{
    if(result){ 
      res.send(result);
    }else{
      console.log(err);
    }
  })

});



module.exports = router;
