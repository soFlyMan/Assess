var express = require('express')
var router = express.Router()
var Q = require('q')
var defer = Q.defer()
var EventProxy = require('eventproxy')
var ep =new EventProxy()

var Radio = require('../models/items/radio')
var Multi = require('../models/items/multi')
var Judge = require('../models/items/judge')
var Fillblank = require('../models/items/fillblank')
var Programming = require('../models/items/programming')
var Correct = require('../models/items/correct')
var Exampap = require('../models/exampapers')
var User = require('../models/users')
var PaperParams = require('../models/paperparams')

function getInputPromise(){
  return defer.promise
}

router.post('/useExampap',function(req,res){
  var date = req.body.date
  Exampap.find({},function(err,results){
    if(err){
      console.log(err)
    }else{
      getInputPromise().then(function(results){
        var n = Math.floor(Math.random()*results.length)
        // console.log(date)
        return results[n]
      }).then(function(result){
        result.date = date
        // console.log(result)
        return result
      }).then(function(result){
        console.log(result)
          User.update({},{$addToSet: {exampaper: result}},{multi: true},function(err,docs){
              if(err){
                console.log(err)
              }else{
                res.send({status: 1}) 
              }
            })
      })
      defer.resolve(results)
      // console.log(results.length)
      // function result(results,date,callback){
      //   var n = Math.floor(Math.random()*results.length)
      //   results[n].date = date
      //   callback(results[n])
      // }
      // result(results,date,function(result){
      //       User.update({},{$addToSet: {exampaper: result}},{multi: true},function(err,docs){
      //         if(err){
      //           console.log(err)
      //         }else{
      //           res.send({status: 1})
      //         }
      //       })
      // })
    }
  })
})

// router.post('/randomMakePaper',function(req,res){

// })


// paperparams
router.get('/paperparams',function(req,res){
  PaperParams.find({}).exec(function(err,paperparams){
    if(err){
      console.log(err)
    }else{
      // console.log(paperparams[0])
      res.send(paperparams[0])
    }
  })
})


router.post('/modiPaperParams',function(req,res){
  var radioNumber = req.body.radioNumber
  var multiNumber = req.body.multiNumber
  var judgeNumber = req.body.judgeNumber
  var fillblankNumber = req.body.fillblankNumber
  var correctNumber = req.body.correctNumber
  var programmingNumber = req.body.programmingNumber

  var radioScore = req.body.radioScore
  var multiScore = req.body.multiScore
  var judgeScore = req.body.judgeScore
  var fillblankScore = req.body.fillblankScore
  var correctScore = req.body.correctScore
  var programmingScore = req.body.programmingScore

  PaperParams.findOneAndUpdate({},{$set: {
    radioNumber: radioNumber,multiNumber: multiNumber,fillblankNumber: fillblankNumber,
    judgeNumber: judgeNumber, correctNumber: correctNumber,programmingNumber: programmingNumber,
    radioScore: radioScore,multiScore: multiScore, fillblankScore: fillblankScore,
    judgeScore: judgeScore, correctScore: correctScore, programmingScore: programmingScore
    }},function(err,docs){
      if(err){
        console.log(err)
      }else{
        PaperParams.findOne({},function(err,paperparams){
          if(err){
            console.log(err)
          }else{
            res.send(paperparams)
          }
        })
      }
    })
})
router.post('/makeRandomPaper',function(req,res){
  var radioNumber = req.body.radioNumber
  var multiNumber = req.body.multiNumber
  var judgeNumber = req.body.judgeNumber
  var fillblankNumber = req.body.fillblankNumber
  var correctNumber = req.body.correctNumber
  var programmingNumber = req.body.programmingNumber

  var radioScore = req.body.radioScore
  var multiScore = req.body.multiScore
  var judgeScore = req.body.judgeScore
  var fillblankScore = req.body.fillblankScore
  var correctScore = req.body.correctScore
  var programmingScore = req.body.programmingScore


    function getRandomPaper(){
      var randomPap = {radio: [],multi: [], judge: [],
                    fillblank: [],correct: [],programming: []}
                  return Q(Radio.aggregate({$sample: {size: 1}}).exec())
                  .then(function(radios){
                    randomPap.radio = radios
                    return Q(Multi.aggregate({$sample: {size: 1}}).exec())
                  })
                  .then(function(multis){
                    randomPap.multi = multis
                    return randomPap
                  })
                }
    getRandomPaper().then(function(randomPap){
      console.log(randomPap)
      res.send({status: 1})
    }).catch(function(err){
      console.log(err)
    })  

})
router.post('/makeRandomPaperaaa',function(req,res){
  var radioNumber = req.body.radioNumber
  var multiNumber = req.body.multiNumber
  var judgeNumber = req.body.judgeNumber
  var fillblankNumber = req.body.fillblankNumber
  var correctNumber = req.body.correctNumber
  var programmingNumber = req.body.programmingNumber

  var radioScore = req.body.radioScore
  var multiScore = req.body.multiScore
  var judgeScore = req.body.judgeScore
  var fillblankScore = req.body.fillblankScore
  var correctScore = req.body.correctScore
  var programmingScore = req.body.programmingScore
  
  User.find({},function(err,users){
    if(err){
      console.log(err)
    }else{
      // ep.after('add_exam_paper',users.length,function(list){
      //   res.send({status: 1})
      // })
      // for(var i=0;i<users.length;i++){
                var randomPap = {radio: [],multi: [], judge: [],
                    fillblank: [],correct: [],programming: [],
                    radioScore: radioScore,multiScore: multiScore,
                     judgeScore: judgeScore, fillblankScore: fillblankScore,
                      correctScore: correctScore, programmingScore: programmingScore}
                // getInputPromise().then(function(randomPap){
                //   Radio.findRandom({},{},{limit: radioNumber},function(err,results){
                //     if(err){
                //       console.log(err)
                //     }else{
                //       randomPap.radio = results
                //       return randomPap
                //     }
                //   })
                // }).then(function(randomPap){
                //       console.log(randomPap)
                //   Multi.findRandom({},{},{limit: multiNumber},function(err,multis){
                //     if(err){
                //       console.log(err)
                //     }else{
                //       randomPap.multi = multis
                //       return randomPap
                //     }
                //   })
                // }).then(function(randomPap){
                //   Judge.findRandom({},{},{limit: judgeNumber},function(err,judges){
                //     if(err){
                //       console.log(err)
                //     }else{
                //       randomPap.judge = judges
                //       return randomPap
                //     }
                //   })
                // }).then(function(randomPap){
                //     Fillblank.findRandom({},{},{limit: fillblankNumber},function(err,fillblanks){
                //       if(err){
                //         console.log(err)
                //       }else{
                //         randomPap.fillblank = fillblanks
                //         return randomPap
                //       }
                //     })
                // }).then(function(randomPap){
                //   Correct.findRandom({},{},{limit: correctNumber},function(err,corrects){
                //     if(err){
                //       console.log(err)
                //     }else{
                //       randomPap.correct = corrects
                //       return randomPap
                //     }
                //   })
                // }).then(function(randomPap){
                //   Programming.findRandom({},{},{limit: programmingNumber},function(err,programmings){
                //     if(err){
                //       console.log(err)
                //     }else{
                //       randomPap.programming = programmings
                //       return randomPap
                //     }
                //   })
                // }).then(function(randomPap){
                //   // User.update({},{$addToSet: {exampaper: randomPap}},function(err,docs){
                //   //   if(err){
                //   //     console.log(err)
                //   //   }else{
                //   //     ep.emit('add_exam_paper',docs)
                //   //   }
                //   // })
                //   // users[i].exampaper.push(randomPap)
                //   // return users[i]
                //   console.log(randomPap)
                //   return randomPap
                // }).then(function(user){
                //   console.log("123")
                //   console.log(user)
                //   // ep.emit('add_exam_paper',user)
                //   // user.save(function(err){
                //   //   if(err){
                //   //     console.log(err)
                //   //   }
                //   // })
                //   res.send({status: 1})
                // })
                // defer.resolve(randomPap)
                

      // }
    }
  })
})
//radio
router.get('/radio',function(req,res){
  Radio.find({}).exec(function(err,radios){
    if(err){
      console.log(err)
    }else{
      res.send(radios)
    }
  })
})
router.delete('/delRadio',function(req,res){
    var id = req.body.id
    Radio.remove({_id: id},function(err){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({ status: 1 })
      }
    })
})
router.post('/addRadio',function(req,res){
  var body = req.body.body
  var options = req.body.options
  var answer = req.body.answer
  var radio = new Radio({
    body: body,
    options: options,
    answer: answer
  })
  radio.save(function(err){
    if(err){
      console.log(err)
      res.send({ status: 0 })
    }else{
      res.send({ status: 1 })
    }
  })
})
router.post('/modiRadio',function(req,res){
    var id = req.body.id
    var body = req.body.body
    var options = req.body.options
    var answer = req.body.answer
    Radio.findOneAndUpdate(
      {_id: id},{ $set: { body: body,
                          options: options,
                          answer: answer 
                        }
                      },
                        function(err,doc){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({ status: 1 })
      }
  })

})


//multi
router.get('/multi',function(req,res){
  Multi.find({}).exec(function(err,multis){
    if(err){
      console.log(err)
    }else{
      res.send(multis)
    }
  })
})
router.delete('/delMulti',function(req,res){
    var id = req.body.id
    Multi.remove({_id: id},function(err){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({status: 1})
      }
    })
})
router.post('/addMulti',function(req,res){
  var body = req.body.body
  var options = req.body.options
  var answer = req.body.answer
  var multi = new Multi({
    body: body,
    options: options,
    answer: answer
  })
  multi.save(function(err){
    if(err){
      console.log(err)
      res.send({ status: 0 })
    }else{
      res.send({ status: 1 })
    }
  })
})
router.post('/modiMulti',function(req,res){
    var id = req.body.id
    var body = req.body.body
    var options = req.body.options
    var answer = req.body.answer
    Multi.findOneAndUpdate(
      {_id: id},{ $set: { body: body,
                          options: options,
                          answer: answer 
                        }
                      },
                        function(err,doc){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({ status: 1 })
      }
  })

})
//judge
router.get('/judge',function(req,res){
  Judge.find({}).exec(function(err,judges){
    if(err){
      console.log(err)
    }else{
      res.send(judges)
    }
  })
})
router.delete('/delJudge',function(req,res){
    var id = req.body.id
    Judge.remove({_id: id},function(err){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({status: 1})
      }
    })
})
router.post('/addJudge',function(req,res){
  var body = req.body.body
  var options = req.body.options
  var answer = req.body.answer
  var judge = new Judge({
    body: body,
    options: options,
    answer: answer
  })
  judge.save(function(err){
    if(err){
      console.log(err)
      res.send({ status: 0 })
    }else{
      res.send({ status: 1 })
    }
  })
})
router.post('/modiJudge',function(req,res){
    var id = req.body.id
    var body = req.body.body
    var options = req.body.options
    var answer = req.body.answer
    Judge.findOneAndUpdate(
      {_id: id},{ $set: { body: body,
                          options: options,
                          answer: answer 
                        }
                      },
                        function(err,doc){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({ status: 1 })
      }
  })

})
//fillblank
router.get('/fillblank',function(req,res){
  Fillblank.find({}).exec(function(err,fillblanks){
    if(err){
      console.log(err)
    }else{
      res.send(fillblanks)
    }
  })
})
router.delete('/delFillblank',function(req,res){
    var id = req.body.id
    Fillblank.remove({_id: id},function(err){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({status: 1})
      }
    })
})
router.post('/addFillblank',function(req,res){
  var body = req.body.body
  var options = req.body.options
  var answer = req.body.answer
  var fillblank = new Fillblank({
    body: body,
    options: options,
    answer: answer
  })
  fillblank.save(function(err){
    if(err){
      console.log(err)
      res.send({ status: 0 })
    }else{
      res.send({ status: 1 })
    }
  })
})
router.post('/modiFillblank',function(req,res){
    var id = req.body.id
    var body = req.body.body
    var options = req.body.options
    var answer = req.body.answer
    Fillblank.findOneAndUpdate(
      {_id: id},{ $set: { body: body,
                          options: options,
                          answer: answer 
                        }
                      },
                        function(err,doc){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({ status: 1 })
      }
  })

})
//programming
router.get('/programming',function(req,res){
  Programming.find({}).exec(function(err,programmings){
    if(err){
      console.log(err)
    }else{
      res.send(programmings)
    }
  })
})
router.delete('/delProgramming',function(req,res){
    var id = req.body.id
    Programming.remove({_id: id},function(err){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({status: 1})
      }
    })
})
router.post('/addProgramming',function(req,res){
  var body = req.body.body
  var options = req.body.options
  var answer = req.body.answer
  var programming = new Programming({
    body: body,
    options: options,
    answer: answer
  })
  programming.save(function(err){
    if(err){
      console.log(err)
      res.send({ status: 0 })
    }else{
      res.send({ status: 1 })
    }
  })
})
router.post('/modiProgramming',function(req,res){
    var id = req.body.id
    var body = req.body.body
    var options = req.body.options
    var answer = req.body.answer
    Programming.findOneAndUpdate(
      {_id: id},{ $set: { body: body,
                          options: options,
                          answer: answer 
                        }
                      },
                        function(err,doc){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({ status: 1 })
      }
  })

})
//correct
router.get('/correct',function(req,res){
  Correct.find({}).exec(function(err,corrects){
    if(err){
      console.log(err)
    }else{
      res.send(corrects)
    }
  })
})
router.delete('/delCorrect',function(req,res){
    var id = req.body.id
    Correct.remove({_id: id},function(err){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({status: 1})
      }
    })
})
router.post('/addCorrect',function(req,res){
  var body = req.body.body
  var options = req.body.options
  var answer = req.body.answer
  var correct = new Correct({
    body: body,
    options: options,
    answer: answer
  })
  correct.save(function(err){
    if(err){
      console.log(err)
      res.send({ status: 0 })
    }else{
      res.send({ status: 1 })
    }
  })
})
router.post('/modiCorrect',function(req,res){
    var id = req.body.id
    var body = req.body.body
    var options = req.body.options
    var answer = req.body.answer
    Correct.findOneAndUpdate(
      {_id: id},{ $set: { body: body,
                          options: options,
                          answer: answer 
                        }
                      },
                        function(err,doc){
      if(err){
        console.log(err)
        res.send({ status: 0 })
      }else{
        res.send({ status: 1 })
      }
  })

})

router.post('/randomPaper',function(req,res){
  var radioNumber = req.body.radioNumber
  var multiNumber = req.body.multiNumber
  var judgeNumber = req.body.judgeNumber
  var fillblankNumber = req.body.fillblankNumber
  var correctNumber = req.body.correctNumber
  var programmingNumber = req.body.programmingNumber

  var radioScore = req.body.radioScore
  var multiScore = req.body.multiScore
  var judgeScore = req.body.judgeScore
  var fillblankScore = req.body.fillblankScore
  var correctScore = req.body.correctScore
  var programmingScore = req.body.programmingScore

  var randomPaper = {radio: [],multi: [], judge: [],
                    fillblank: [],correct: [],programming: [],
                    radioScore: radioScore,multiScore: multiScore, judgeScore: judgeScore, fillblankScore: fillblankScore, correctScore: correctScore, programmingScore: programmingScore}
  
    Radio.findRandom({}, {}, {limit: radioNumber}, function(err, results) {
      if(err){
        console.log(err)
      }else{
        randomPaper.radio=results
        Multi.findRandom({}, {}, {limit: multiNumber}, function(err, results) {
          if(err){
            console.log(err)
          }else{
            randomPaper.multi=results
            Judge.findRandom({}, {}, {limit: judgeNumber}, function(err, results) {
              if(err){
                console.log(err)
              }else{
                randomPaper.judge=results
                Fillblank.findRandom({}, {}, {limit: fillblankNumber}, function(err, results) {
                  if(err){
                    console.log(err)
                  }else{
                    randomPaper.fillblank=results
                    Correct.findRandom({}, {}, {limit: correctNumber}, function(err, results) {
                      if(err){
                        console.log(err)
                      }else{
                        randomPaper.correct=results
                        Programming.findRandom({}, {}, {limit: programmingNumber}, function(err, results) {
                          if(err){
                            console.log(err)
                          }else{
                            randomPaper.programming=results
                            var randomPap = new Exampap(randomPaper)
                            randomPap.save(function(err){
                              if(err){
                                console.log(err)
                              }else{
                                res.send({status: 1})
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
})


module.exports = router