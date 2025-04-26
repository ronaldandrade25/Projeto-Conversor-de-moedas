const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select")

function convertValues() {
    const inputCurrencyValue = document.querySelector("input").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value")


    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.4
    const biticoinToday = 84.3




    if (currencySelect.value == "dolar") {

        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {

        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }


        if (currencySelect.value == "libra"){
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency" , 
                currency: "GBP"
            }) .format(inputCurrencyValue /  libraToday )
        }


      



        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue)




    }




    function changeCurrency() {

        const currencyName = document.getElementById("name")
        const currencyImg = document.querySelector(".img")


        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar americano"
            currencyImg.src = "./assets/estados-unidos (1) 1.png"
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImg.src = "./assets/euro.png"
        }

        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImg.src = "./assets/libra 1.png"
        }

      


        convertValues()
    }



    currencySelect.addEventListener("change", changeCurrency)


    convertButton.addEventListener("click", convertValues)