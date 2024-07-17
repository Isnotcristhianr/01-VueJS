<template>
    <div>
        
        <form action="" class="form">
            <div>
                <label for="">
                    Divisa: 
                </label>
                <select name="" id="" required class="select">
                    <option value="" disabled selected>Elige una divisa..</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                </select>
            </div>
            <div>
                <label for="">
                    Criptomoneda:  
                </label>
                <select name="" id="" required class="select">
                    <option value="" disabled selected>Elige una criptomoneda..</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Ethereum</option>
                    <option value="XRP">Ripple</option>
                    <option value="LTC">Litecoin</option>
                </select>
            </div>
            <div>
                <button type="submit" class="buttons">
                    Cotizar
                </button>
            </div>
        </form>
        
    </div>
</template>

<script>
export default {

}
</script>