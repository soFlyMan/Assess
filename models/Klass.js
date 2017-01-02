var mongoose = require('mongoose')
var KlassSchema = require('../schemas/klass')

var Klass =mongoose.model('Klass',KlassSchema)

var kls =new Klass({
	klassname: 'ggddg',
	password: '213'
})

// kls.save(function(err){
// 	if(err) console.log(err)
// })

// Klass.fetch(function(err,klass){
// 	if(err){
// 		console.log(err)
// 	}
// 		console.log(klass)
// })


// Klass.remove({isHistory: '否'},function(err){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log("deleted")
// 	}
// })

// var query = {'username':req.user.username};
// req.newData.username = req.user.username;
// MyModel.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, doc){
//     if (err) return res.send(500, { error: err });
//     return res.send("succesfully saved");
// });

// Klass.findOneUpdate(kls,{$set})
module.exports = Klass
