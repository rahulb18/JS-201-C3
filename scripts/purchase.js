
let d=document.getElementById('purchased_vouchers');
let data=JSON.parse(localStorage.getItem("purchase"))



function append(data){

    let div=document.getElementById('purchased_vouchers');

    data.forEach(function(el){

        let di=document.createElement('div');
        di.setAttribute('class','voucher');
    
        let img=document.createElement('img');
        img.src=el.image;
    
        let h2=document.createElement('h2');
        h2.innerText=el.name;
    
        let h3=document.createElement('h3');
        h3.innerText=el.price;
    
        
        di.append(img,h2,h3);
    
        d.append(di);
        
    
    })
}
append(data);