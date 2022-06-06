let data=JSON.parse(localStorage.getItem('user'));
let n=document.getElementById('wallet_balance');
n.innerText=data.amount;

const url='https://masai-vouchers-api.herokuapp.com/api/vouchers';


async function getData(){
    
    try
    {
        let res =await fetch(url);
        let voucher=await res.json();
        append(voucher[0].vouchers)
        
        
    }catch(err){
        console.log(err);
    }
    
}
getData();

function append(data){

    let div=document.getElementById('voucher_list');

    data.forEach(function(el){

        let di=document.createElement('div');
        di.setAttribute('class','voucher');

        let img=document.createElement('img');
        img.src=el.image;

        let h2=document.createElement('h2');
        h2.innerText=el.name;

        let h3=document.createElement('h3');
        h3.innerText=el.price;

        let button=document.createElement('button');
        button.setAttribute('class',"buy_voucher");
        button.innerText="Buy";
        button.addEventListener('click',function(){
            purchase(el);
        })
        

        di.append(img,h2,h3,button);

        div.append(di);
        

    })
}
let new_Amount=0;

function purchase(el){
    let data=JSON.parse(localStorage.getItem("purchase")) || [];

    data.push(el);

    localStorage.setItem('purchase',JSON.stringify(data));

    let amount=JSON.parse(localStorage.getItem("user"))

    new_Amount=amount.amount-el.price;

    let h=document.getElementById('wallet_balance');
    h.innerText=new_Amount;
    // console.log(new_Amount);
}