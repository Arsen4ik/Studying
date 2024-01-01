let alrt1 = document.getElementById('alert')
var inp1 = document.getElementById('inp1')


function func1(inp){
    return +inp + 5
}
alrt1.addEventListener('click', () => alert(func1(inp1.value)))

