document.getElementById('countId').onclick = function () {
    var hamPrice = 9.99;
    var friesPrice = 4.99;
    
    var hamNum = parseInt(document.getElementById('hamNumId').value) * hamPrice;
    var friesNum = parseInt(document.getElementById('friesNumId').value) * friesPrice;
    
    document.getElementById('totalId').textContent = hamNum + friesNum
    
}