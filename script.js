Array = ['green', 'yellow', 'black', 'blue', 'red', 'purple', 'orange', 'turquoise', 'silver']

function getFirstThree(colors) {
    let firstThree = []
    colors.map((e, i) => {
        if (i < 3){
            firstThree.push(e)
        }

    })
    return console.log(firstThree)
}
getFirstThree(Array)