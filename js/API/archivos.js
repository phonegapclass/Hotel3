function subirFoto(foto, nom){
    var options = new FileUploadOptions();
    options.fileKey="archivo";
    options.fileName="foto01-Carlos";
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "Registro";
    params.value2 = "toma de foto";
    params.value3 = "Hotel Cenet";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(foto, "http://igitsoft.com/pgtest.php", function(r){
        if(r.response == 1){
            nagator.notification.confirm("Registro Realizado Satisfactoriamente", function(btn){
                switch(btn){
                    case 1:
                        navigator.notification.vibrate(500);
                        break;
                    case 2:
                        navigator.notification.beep(2);
                        break;
                }
                window.location.href = "#home";
                guardarUsuario(nom,infoDispositivo('id'));
            }, "Registro", "Vibrar,Beep,Aceptar");
        }else{
            navigator.notification.alert("Error al subir el archivo", null, "Error de Servidor", "Aceptar");
        }
    }, fail, options);
}