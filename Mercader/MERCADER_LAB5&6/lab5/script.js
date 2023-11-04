 function login()
	{
		const uname = document.getElementById("email").value;
		const pwd = document.getElementById("pwd1").value;
		const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if(uname =='')
		{
			alert("please enter user name.");}
		
		else if(pwd =='')
		{
        	alert("Please input username or password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 4 || pwd.length > 4)
		{
			alert("Login Failed!");
		}
		else
		{
	alert('Login successful! ');
			}
	}
	
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}
	
	