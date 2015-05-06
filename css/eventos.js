var inicioApp = function()
{
	$("#btnValidaUsiario").on("click" , validausuario);
	{
		var usuario = $("txtUsuario").val();
		var clave = $("txtClave").val();
		if(usuario!="" && clve!="")
		{
			if (usuario=="hola"  && clave=="mundo"
			{
				$("cajaUsuario").hide();
				$("nav").show();
			}
		}
	}

}

$(document).on.("ready" , inicioApp)