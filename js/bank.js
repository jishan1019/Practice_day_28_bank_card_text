function inputToNumber(inputId){
    const inputFlid = document.getElementById(inputId);
    const inputString = inputFlid.value;
    const inputNumber = parseFloat(inputString);
    inputFlid.value = '';
    return inputNumber;
}

function getTvToNumber(tvId){
    const tvElement = document.getElementById(tvId);
    const tvString = tvElement.innerText;
    const tvNumber = parseFloat(tvString);
    return tvNumber;
}

function totalTvCalculateAllBalance(tvDisplayName, totalClaculate){
    document.getElementById(tvDisplayName).innerText = totalClaculate;
}

document.getElementById('btn-deposite').addEventListener('click',function(){
    const newDepositeBalance = inputToNumber('diposite-input');
    const previoutDepositeBalance = getTvToNumber('deposite-total');
    const totalNewDepositeBalance = previoutDepositeBalance+newDepositeBalance;

    totalTvCalculateAllBalance('deposite-total', totalNewDepositeBalance);

    const previousTotalBalance = getTvToNumber('total-balance');

    const totalNewBalance = previousTotalBalance+newDepositeBalance;

    totalTvCalculateAllBalance('total-balance', totalNewBalance);

})



document.getElementById('btn-withdrow').addEventListener('click',function(){
    const newWithdrowBalance = inputToNumber('withdrow-input');
    const previoutWithdrowBalance = getTvToNumber('withdrow-total');
    const totalNewWithdrowBalance = previoutWithdrowBalance+newWithdrowBalance;

    const previousTotalBalance = getTvToNumber('total-balance');

    if(previousTotalBalance < newWithdrowBalance){
        alert('Toamr Tk Nai')
        return;
    }

    totalTvCalculateAllBalance('withdrow-total', totalNewWithdrowBalance);

    const totalNewBalance = previousTotalBalance - newWithdrowBalance;

    totalTvCalculateAllBalance('total-balance', totalNewBalance);

   

})
