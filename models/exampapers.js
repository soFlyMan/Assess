var mongoose = require('mongoose')
var random = require('mongoose-simple-random')

var ExampapSchema = require('../schemas/exampapers')
ExampapSchema.plugin(random)

var Exampap = mongoose.model('Exampap',ExampapSchema)

// var exampap1 = new Exampap({ radio: 
//    [ { _id: "587ca4921819627858325b0c",
//        body: '下列说法正确的是（  ）',
//        options: 'A.当运行Javac命令对一个Java源程序（.java文件）进行编译时，\n  必须写出该源文件的完整文件名，包括扩展名.java\nB.当运行javac命令对一个java源程序（.java文件）进行编译时，\n  不必写出该源文件的扩展名.java\nC.当用Java命令解析运行一个class文件时，必须写出\n   该class文件的扩展名.class\nD.无论是运行Javac还是Java命令，后面的文件都必须给出文件扩展名',
//        answer: 'A',
//        __v: 0 },
//      { _id: "587ca4cf1819627858325b0e",
//        body: '编译Java源程序文件将产生相应的字节码文件，字节码文件的扩展名为',
//        options: 'A. .java       B. .class\nC. .html      D. .exe',
//        answer: 'B',
//        __v: 0 },
//      { _id: "587ca4ed1819627858325b0f",
//        body: 'Java应用程序运行未结束时，在DOS命令行窗体中按下( )键可以终止程序的运行。',
//        options: 'public class MyMain{\n  public static void main(String argv){\n     System.out.println("Hello cruel world");\n  }\n}\nA．编译错误；\nB．运行输出 "Hello cruel world"；\nC．编译无错，但运行时指示没有定义构造方法。\nD．编译无错，但运行时指示找不到main方法。',
//        answer: 'D',
//        __v: 0 },
//      { _id: "587ca5191819627858325b10",
//        body: '不属于Java语言特点的一项是：',
//        options: 'A．面向网络  B. 安全性高   C. 编译执行    D.面向对象',
//        answer: 'C',
//        __v: 0 },
//      { _id: "587ca6b71819627858325b11",
//        body: 'Java源程序文件的扩展名为（      ）',
//        options: 'A. java　　        B. class \nC. txt　　　       D. exe',
//        answer: 'A',
//        __v: 0 } ],
//   judge: 
//    [ { _id: "588027eced75080684093198",
//        body: 'asd\nll\nlll',
//        answer: 'asd',
//        __v: 0 },
//      { _id: "58842765c01f07281edf087e",
//        body: 'kkk',
//        answer: 'kkk',
//        __v: 0 } ],
//   correct: 
//    [ { _id: "58833e72eb514022fadbc679",
//        body: 'kkkk\nllll',
//        answer: false,
//        __v: 0 } ],
//   fillblank: 
//    [ { _id: "587de25ee7280882d66bed3e",
//        body: '如果一个Java源程序文件中定义有4个类，则使用Sun公司的JDK编译器javac编译该源序\n文件将产生____个文件名与类名相同而扩展名为________的字节码文件。',
//        answer: '4 class',
//        __v: 0 },
//      { _id: "587de284e7280882d66bed3f",
//        body: 'import java.applet.*;\nimport java.awt.Graphics;\n\n//*********Found********\npublic class Java_1 extends __________________ {  \n   public void paint( Graphics g )\n   {\n      //*********Found********\n      g.__________________( "欢迎你来参加Java 语言考试!", 25, 25 );\n   }\n}',
//        answer: 'Applet drawString',
//        __v: 0 },
//      { _id: "587f1f138b352402df150b3a",
//        body: ' das\naaad\nads',
//        answer: '嗷嗷',
//        __v: 0 },
//      { _id: "587f21e7a503dc0371ef1923",
//        body: 'd',
//        answer: 'dasd',
//        __v: 0 } ],
//   multi: 
//    [ { _id: "587db9c01196b9823afca19e",
//        body: '下列说法正确的是（ 1 ）s',
//        options: 'A.当运行Javac命令对一个Java源程序（.java文件）进行编译时，\n必须写出该源文件的完整文件名，包括扩展名.java\nB.当运行javac命令对一个java源程序（.java文件）进行编译时，\n  不必写出该源文件的扩展名.java\nC.当用Java命令解析运行一个class文件时，必须写出\n   该class文件的扩展名.class\nD.无论是运行Javac还是Java命令，后面的文件都必须给出文件扩展名1111',
//        answer: 'AB',
//        __v: 0 },
//      { _id: "588311e82ea98c2166baf5b9",
//        body: 'aa',
//        options: 'aa\naa\naaaaaa\nasd',
//        answer: 'aa',
//        __v: 0 } ],
//   programming: 
//    [ { _id: "587de565e7280882d66bed40",
//        body: '编写窗体应用，窗体中安排一个文本框和一个标签。在文本框输入一个整数，按回车，如果该整数是奇数，则在标签中显示“奇数”，否则，显示“偶数”。\nimport java.awt.*;\nimport java.awt.event.*;\npublic class Test extends Frame implements Action@Listener@ {\n    TextField tx = new @TextField@(30);\n    Label dis = new Label("....");\n    public Test(){\n        setLayout(new FlowLayout());\n        add(tx);add(dis);\n        tx.addActionListener(this);\n        setSize(200,200);\n        setVisible(@true@);\n    }\n    public void actionPerformed(@ActionEvent@ e){\n        int m = Integer.parseInt(tx.@getText())@;\n        if ( m % 2 != 0)\n          @dis.setText(@"奇数");\n        else\n          dis.setText("偶数");\n    }\n    public static void main(String args[]){\n          new Test();\n    }\n}',
//        answer: '',
//        __v: 0 },
//      { _id: "58801d99ed75080684093196",
//        body: 'aa\nad',
//        answer: 'aa',
//        __v: 0 } ] })

// exampap1.save(function(err){
// 	console.log(err)
// })
module.exports = Exampap