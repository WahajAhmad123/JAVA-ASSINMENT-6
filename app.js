function form(){
    var firstname = document.getElementById("inp1").value
    var lastname = document.getElementById("inp2").value
    var password= document.getElementById("inp3").value
    var e_mail= document.getElementById("inp4").value
    var mob= document.getElementById("inp5").value
    var nic_no= document.getElementById("inp6").value
    console.log(firstname)
    console.log(lastname)
    console.log(password)
    console.log(e_mail)
    console.log(mob)
    console.log(nic_no)
    document.writeln("My Personal Info: <br>"+"First Name: "+firstname+"<br>")
    document.writeln("Last Name: "+lastname+"<br>")
    document.writeln("Password: "+password+"<br>")
    document.writeln("Email Address: "+e_mail+"<br>")
    document.writeln("Mobile Number: "+mob+"<br>")
    document.writeln("CNIC Number: "+nic_no+"<br>")
}