function guardarUsuario(usuario, id){
    window.localStorage.setItem('usuario', usuario);
    window.localStorage.setItem('id', id);
}

function estaRegistrado(){
    if(window.localStorage.getItem('id') != undefined)
        return true;
    else
        return false;
}

//WEB SQL
function accesoBD(){
    var bd = window.openDatabase("hotel","1.0","Hotel CENET","2000000");
    return bd;
}

function crearReserva(th,pe,di,ha){
    accesoBD().transaction(function(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th, pe, di, ha)');
        tx.executeSql('INSERT INTO reservas (th,pe,di,ha) VALUES ("'+th+'","'+pe+'","'+di+'","'+ha+'")');
    }, function(err){
        alert("Error processing SQL: "+err);
    }, function(){
        crearHistorial(th,pe,di,ha);
        window.location.href = "#home";
    });
}

function leerReserva(){
    accesoBD().transaction(function(tx){
        tx.executeSql('SELECT * FROM reservas',[],function(tx2,r){
            var largo = r.rows.length;
            for(i=0;i<=largo;i++){
                var th = r.rows.item(i).th;
                var pe = r.rows.item(i).pe;
                var di = r.rows.item(i).di;
                var ha = r.rows.item(i).ha;
                
                sincronizarReserva(th,pe,di,ha);
            }
        },function(err){
            alert("Error processing SQL: "+err);
        });
    }, function(err){
        alert("Error processing SQL: "+err);
    });
}

function crearHistorial(th,pe,di,ha){
    accesoBD().transaction(function(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique, th, pe, di, ha)');
        tx.executeSql('INSERT INTO historial (th,pe,di,ha) VALUES ("'+th+'","'+pe+'","'+di+'","'+ha+'")');
    }, function(err){
        alert("Error processing SQL: "+err);
    }, function(){
        navigator.notification.alert("Reserva Guardada en el Historial",null,"Guardado","Aceptar");
    });
}

function leerHistorial(){
    accesoBD().transaction(function(tx){
        tx.executeSql('SELECT * FROM historial',[],function(tx2,r){
            var largo = r.rows.length;
            for(i=0;i<=largo;i++){
                var th = r.rows.item(i).th;
                var pe = r.rows.item(i).pe;
                var di = r.rows.item(i).di;
                var ha = r.rows.item(i).ha;
                
                //Mistrar Lista
            }
        },function(err){
            alert("Error processing SQL: "+err);
        });
    }, function(err){
        alert("Error processing SQL: "+err);
    });
}

//csanchez83@hotmail.com
//centenonestor@hotmail.com