"use strict";

$(document).ready(function () {
    var url = "https://alumnoscurso.azure-mobile.net/Tables/curso";

    function procesarJson(datos) {
        var strTabla = "", i = 0, longitud = datos.length;

        for (i = 0; i < longitud; i++) {
            strTabla += datos[i].nombre + " " + datos[i].duracion + "<br />";
        }

        $("#divDatos").html(strTabla);
    }

    function cargarDatos(evento) {
        $.get(url, procesarJson);
    }

    function filtrarDatos(evento) {
        var strTextoABuscar = $("#txtBuscar").val();
        var strDireccionCompleta = (strTextoABuscar === "") ? url : url + "?$filter=substringof('" + strTextoABuscar + "', nombre)";
        $.get(strDireccionCompleta, procesarJson);
    }


    $.get(url, procesarJson);

    $("#btnBuscar").click(filtrarDatos);

});