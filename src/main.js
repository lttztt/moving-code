var string = `
/** 你好，我是一个前端程序员，
 *  我要展示一些我的技能了， 先给背景上个色
 **/

  body{
    background: #eee;
  }
/** 首先准备一个div做画布 **/

  #preview{
    position: fixed;
    width: 300px;
    height: 300px;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
    border: 1px solid gray;
  }

/** 然后，开始用一个div做一个太极
 *  能动的哦！
 **/ 
  #circle{
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: -webkit-linear-gradient(left, #000000 0%,#000000 50%,#ffffff 51%,#ffffff 100%);
  }

/** 这里两个黑白两点也用渐变做 **/
  #circle::before{
    width: 150px;
    height: 150px;
    background: -webkit-radial-gradient(center, ellipse cover, #000000 0%,#000000 30%,#ffffff 30%,#ffffff 100%);
    top: 0;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
  }
  #circle::after{
    width: 150px;
    height: 150px;
    background: -webkit-radial-gradient(center, ellipse cover, #FFF 0%,#FFF 30%,#000 30%,#000 100%);
    bottom: 0;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
  }

/** 加上关键帧动画 **/

  @keyframes run{
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  #circle{
    animation: run 5s infinite linear;
  }
/** 去除没用的border **/

  #preview{
    border: none;
  }
  
/** 完  **/



`
var code = ''

var codeDom = document.querySelector('#code')

// string = string.replace(/\n/g, '<br>')
// string = string.replace(/\s/g, '&nbsp;')
var style = document.querySelector('#style');



let n = 0;
run()
function run(){
  // 用setTimeout代替setInterval
  setTimeout(() => {
    if(string[n] === '\n'){
      code += '<br>'
    }else if(string[n] === ' '){
      code += '&nbsp;'
    }
    n += 1
    code += string[n]
    codeDom.innerHTML = code
    style.innerHTML = string.substring(0,n)
    codeDom.scrollTo(0, 99999)
    if(n < string.length - 1){
      run()
    }else {
      return 
    }
  },10)
}