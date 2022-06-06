function User(n,e,a,am){
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount=am;
}

function storeData(){
    event.preventDefault();

    let form=document.getElementById("form");
    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;

    // console.log(name,email,address,amount);
    let u1= new User(name,email,address,amount);

    // let data=JSON.parse(localStorage.getItem('user')) || {};

    localStorage.setItem("user",JSON.stringify(u1));

    document.getElementById('name').value=null;
    document.getElementById('email').value=null;
    document.getElementById('address').value=null;
    document.getElementById('amount').value=null;

}