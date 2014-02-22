function enviarDatos(nom,mail,tel,foto){
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: "nom=" + nom + "&mail="+ mail +"&tel="+tel
    }).done(function(msg){
        if(msg==1){
            subirFoto(foto, nom);
        }else{
            navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
        }
    });
}

function sincronizarReserva(th,pr,di,ha){
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: "th=" + th + "&pr="+ pr +"&di="+di+"&ha="+ha+"&id="+infoDispositivo("id")
    }).done(function(msg){
        if(msg==1){
            navigator.notification.alert("Reserva Sincronizada Satisfactoriamente",null,"Reservas","Aceptar");
        }else{
            navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
        }
    });
}