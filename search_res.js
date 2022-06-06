var search_coin = document.querySelector('#search_box');
var search_url = "https://api.coingecko.com/api/v3/coins/markets?ids=";
const search_url_part2 = "&vs_currency=usd";

async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    document.querySelector('.pics_search').setAttribute('style' , `background: url("${data[0].image}"); background-size: contain; background-repeat: no-repeat;`);
    document.querySelector('.coin_name_search').innerHTML = data[0].id;
    document.querySelector('.price_search').innerHTML = data[0].current_price;
    document.querySelector('.high_24_search').innerHTML = data[0].high_24h;
    document.querySelector('.low_24_search').innerHTML = data[0].low_24h;
    document.querySelector('.price_change_search').innerHTML = data[0].price_change_24h;
}

document.querySelector('#search_box').addEventListener('mouseenter' , ()=>{
    search_coin.value = null;
    search_url =  "https://api.coingecko.com/api/v3/coins/markets?ids=";
})

document.querySelector('.submit').addEventListener('click' , ()=>{
    let bug = false;
    search_url = search_url + search_coin.value + search_url_part2;
    //console.log(search_url);
    getapi(search_url).catch((m)  =>{
        console.log('error going loop');
        console.log(m);
        bug = true;
        document.querySelector('.error').classList.remove('deactive');
        document.querySelector('.error').innerHTML = 'error';
        document.querySelector('.get_search_detail').classList.add('deactive');
    });
    if(bug === false)
    {
        console.log('good going loop')
        document.querySelector('.error').classList.add('deactive');
        document.querySelector('.get_search_detail').classList.remove('deactive');
    }
    //console.log(bug)
})
