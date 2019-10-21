var string = `
/** 你好，我是一个程序员，
 *  我有做一些演示。
 ** /
`
var code = ''

var codeDom = document.querySelector('#code')

// string = string.replace(/\n/g, '<br>')
// string = string.replace(/\s/g, '&nbsp;')

let n = 0;
run()
function run(){
  // 用setTimeout代替setInterval
  setTimeout(() => {
    if(string[n] === '\n'){
      code += '<br>'
    }else if(string[n] === '\s'){
      code += '&nbsp;'
    }
    code += string[n]
    codeDom.innerHTML = code
    n += 1
    if(n < string.length - 1){
      run()
    }else {
      return 
    }
  },10)
}