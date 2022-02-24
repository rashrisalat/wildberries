const search = function () {
const input = document.querySelector('.search-block > input')
const searchBtn = document.querySelector('.search-block > button')
console.log(searchBtn)
    // input.addEventListener('input', function (event){
    //     console.log(event)
    // })
    input.addEventListener('input', (event) => {
        console.log(event.target.value)
    })


//homework
    searchBtn.addEventListener('click', () =>{
        console.log(input.value)
    })
}
search()
