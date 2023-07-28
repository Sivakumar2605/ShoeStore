var allinput=document.querySelectorAll("input");
function storedata()
{
   var empname=allinput[0].value;
   var empid=allinput[1].value;
   var empdesg=allinput[2].value;
   var empsal=allinput[3].value;
   var empphno=allinput[4].value;
   var empemail=allinput[5].value;
   localStorage.setItem("Ename",empname)
   localStorage.setItem("EId",empid)
   localStorage.setItem("EDesg",empdesg)
   localStorage.setItem("ESal",empsal)
   localStorage.setItem("EPhno",empphno)
   localStorage.setItem("EEmail",empemail)
}