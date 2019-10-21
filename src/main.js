var string = `
/** 你好，我是一个程序员，
 *  我有做一些演示。
 ** /
`

var codeDom = document.querySelector('#code')

string = string.replace(/\n/g, '<br>')
string = string.replace(/\s/g, '&nbsp;')
codeDom.innerHTML = string

let n = 0;
setInterval(() => {
  if(n < string.length){
    n += 1
    codeDom.innerHTML = string.substring(0, n)
  }
}, 30);