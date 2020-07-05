ourSales = [
    {month: 1, sales: 50000},
    {month: 2, sales: 20000},
    {month: 3, sales: 5000},
    {month: 4, sales: 100000},
    {month: 5, sales: 120000},
    {month: 6, sales: 1000},
    {month: 7, sales: 25000},
    {month: 8, sales: 12000},
    {month: 9, sales: 75000},
    {month: 10, sales: 3000},
    {month: 11, sales: 60000},
    {month: 12, sales: 0}
]

window.onload = function () {
    // get canvas
    // actual x size is 1*50
    // actual y size s 1/1000

    let chartCanvas = document.querySelector('#chartCanvas')
    let context = chartCanvas.getContext('2d')
    context.strokeStyle = 'black'
    let startY = 120
    let stepX = 50 // division of width in canvas by 12 to get this 50
    context.moveTo(
        0,
        startY - (ourSales[0].sales/1000)
    )
    context.fillText(1, 0, startY - (ourSales[0].sales/1000)+10)
    for(let i = 1; i < ourSales.length; i++){
        let pointY = startY - (ourSales[i].sales/1000)
        let pointX = i *stepX
        context.lineTo(pointX, pointY)
        context.fillText(i+1, pointX, pointY+10)
        

    }
    context.stroke()
    //context.moveTo(0, 120)
    // context.fillText('ja', 0, 120)
    // context.fillText('Fe', 50, 120)
    // context.fillText('Me', 180, 120)

}