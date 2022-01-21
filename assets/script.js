function get_details(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    mobile = document.getElementById("mobile").value;
    address = document.getElementById("address").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;
    zipcode = document.getElementById("zipcode").value;
    country = document.getElementById("country").value;
    comment = document.getElementById("comment").value;

    confirm(`-- Confirm Your Information --\n\nFirst name: ${fname}\nLast name: ${lname}\nEmail: ${email}\nMobile: ${mobile}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nZip/Postal Code: ${zipcode}\nCountry: ${country}\nComments: ${comment}\n\nThank You!`)
}