export function calculator() {
    $('#calculate').click(function() {
        var inputNumber = $('#num-of-items').val();
        const price = 19.95
        const priceOnePercent = price/100
        
        if (inputNumber < 3) {
          var discount = priceOnePercent*10
        } else if (inputNumber < 5) {
          var discount = priceOnePercent*20
        } else {
          var discount = priceOnePercent*30
        }
      
        var sum = inputNumber * (price - discount)
        $('#price').text(`${sum.toFixed(2)} €`)
      })
}