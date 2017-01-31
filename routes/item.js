var express = require('express')
var router = express.Router()

var Radio = require('../models/items/radio')
var Multi = require('../models/items/multi')
var Judge = require('../models/items/judge')
var Fillblank = require('../models/items/fillblank')
var Programming = require('../models/items/programming')
var Correct = require('../models/items/correct')
var Exampap = require('../models/exampapers')

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
  var radioNum = req.body.radioNum
  var multiNum = req.body.multiNum
  var judgeNum = req.body.judgeNum
  var fillblankNum = req.body.fillblankNum
  var correctNum = req.body.correctNum
  var programmingNum = req.body.programmingNum

  var radioScore = req.body.radioScore
  var multiScore = req.body.multiScore
  var judgeScore = req.body.judgeScore
  var fillblankScore = req.body.fillblankScore
  var correctScore = req.body.correctScore
  var programmingScore = req.body.programmingScore

  var randomPaper = {radio: [],multi: [], judge: [],
                    fillblank: [],correct: [],programming: [],
                    radioScore: radioScore,multiScore: multiScore, judgeScore: judgeScore, fillblankScore: fillblankScore, correctScore: correctScore, programmingScore: programmingScore}
  
    Radio.findRandom({}, {}, {limit: radioNum}, function(err, results) {
      if(err){
        console.log(err)
      }else{
        randomPaper.radio=results
        Multi.findRandom({}, {}, {limit: multiNum}, function(err, results) {
          if(err){
            console.log(err)
          }else{
            randomPaper.multi=results
            Judge.findRandom({}, {}, {limit: judgeNum}, function(err, results) {
              if(err){
                console.log(err)
              }else{
                randomPaper.judge=results
                Fillblank.findRandom({}, {}, {limit: fillblankNum}, function(err, results) {
                  if(err){
                    console.log(err)
                  }else{
                    randomPaper.fillblank=results
                    Correct.findRandom({}, {}, {limit: correctNum}, function(err, results) {
                      if(err){
                        console.log(err)
                      }else{
                        randomPaper.correct=results
                        Programming.findRandom({}, {}, {limit: programmingNum}, function(err, results) {
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