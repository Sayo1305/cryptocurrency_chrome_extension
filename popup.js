const url =  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&name=all";
var coin = document.querySelectorAll('.coin_name');
var price  = document.querySelectorAll('.price');
var _24h_high = document.querySelectorAll('.high_24');
var _24_low = document.querySelectorAll('.low_24');
var img = document.querySelectorAll('.pics');
var price_change = document.querySelectorAll('.price_change');
let last_price = null;
let last_change = null;
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    //console.log(data);
    change_text(data);
}

function change_text(data)
{
    var idx = 0;
    img.forEach((i) =>{
        i.setAttribute('style' , `background: url("${data[idx].image}"); background-size: contain; background-repeat: no-repeat;`);
        idx+=1;
    })
    idx = 0;
    coin.forEach((c) =>{
        c.innerHTML = data[idx].name;
        idx+=1;
    })
    idx = 0;
    price.forEach((p) =>{
        p.innerHTML = (data[idx].current_price).toFixed(5);
        p.style.color = !last_price || last_price == (data[idx].current_price).toFixed(5) ? 'black' : (data[idx].current_price).toFixed(5) > last_price ? 'green' : 'red';
        last_price = (data[idx].current_price).toFixed(5);
        idx+=1;
    })
    idx = 0;
    _24h_high.forEach((high) =>{
        high.innerHTML = data[idx].high_24h.toFixed(5);
        idx+=1;
    })
    idx = 0;
    _24_low.forEach((low) =>{
        low.innerHTML = data[idx].low_24h.toFixed(5);
        idx+=1;
    })
    idx = 0;
    price_change.forEach((coin_ch) =>{
        coin_ch.innerHTML = data[idx].price_change_24h.toFixed(5);
        coin_ch.style.color = !last_change || last_change == (data[idx].price_change_24h).toFixed(5) ? 'black' : (data[idx].price_change_24h).toFixed(5) > last_change ? 'green' : 'red';
        last_change = (data[idx].price_change_24h).toFixed(5);
        idx+=1;
    });
}
getapi(url);



