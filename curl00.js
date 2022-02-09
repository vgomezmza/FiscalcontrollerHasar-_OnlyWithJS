var Curl = require('node-libcurl').Curl;
const fs = require('fs-extra');

var xml_src = fs.readFileSync('./repostez.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("err", err);
    }
    else {
        console.log("Leer archivo", data);
    }
})

var curl = new Curl();
var header = ["Content-type: application/json", "Connection: close"]
curl.setOpt(Curl.option.URL, "http://192.168.1.1/fiscal.xml")
curl.setOpt(Curl.option.PROXY, '');
curl.setOpt(Curl.option.HTTPHEADER, header);
curl.setOpt(Curl.option.USERPWD, ':9999');
curl.setOpt(Curl.option.HEADER, 0);
curl.setOpt(Curl.option.POSTFIELDS, xml_src)

curl.setOpt('FOLLOWLOCATION', true);

curl.on('end', function (statusCode, body, headers) {

    console.info('---------------------------------');
    console.info(statusCode);
    console.log('---');
    //console.info("body",body);
    let descri = '';
    let Descripcion = JSON.parse(body);
    if (typeof (Descripcion.Error) != "undefined") {
        descri = Descripcion.Error.Descripcion;
    } else {
        descri =  "OK";
    }
    console.log("Estado", descri);
    console.log(Descripcion);
    console.log(JSON.stringify(Descripcion));
    //console.log(body.length);
    console.info('---');
    //console.info(headers);
    //console.log(headers);
    //console.info('---');
    console.log(this.getInfo(Curl.info.TOTAL_TIME));

    this.close();
});

curl.on('error', curl.close.bind(curl));
curl.perform();



let examp={
    CargarDocumentoAsociado: {
        NumeroLinea: "1",
        CodigoComprobante: "RemitoR",
        NumeroPos: "99998",
        NumeroComprobante: "00000876",
      },
      CargarDatosCliente: {
        RazonSocial: "0000",
        NumeroDocumento: "",
        ResponsabilidadIVA: "ResponsableInscripto",
        TipoDocumento: "TipoCUIT",
        Domicilio: "Avenida Julio Argentino Roca 852 - CABA",
      },
      AbrirDocumento: {
        CodigoComprobante: "TiqueFacturaA",
      },
      ImprimirTextoFiscal: {
        Atributos: ["Centrado"],
        Texto: "Producto en oferta: Sólo por hoy !",
        ModoDisplay: "DisplayNo",
      },
      ImprimirItem: {
        Descripcion: "Cable miniplug 1.5",
        Cantidad: "1.0",
        PrecioUnitario: "200.00",
        CondicionIVA: "Gravado",
        AlicuotaIVA: "0.00",
        OperacionMonto: "ModoSumaMonto",
        TipoImpuestoInterno: "IIVariableKIVA",
        MagnitudImpuestoInterno: "0.00",
        ModoDisplay: "DisplayNo",
        ModoBaseTotal: "ModoPrecioTotal",
        UnidadReferencia: "1",
        CodigoProducto: "779123456789",
        CodigoInterno: "C1130",
        UnidadMedida: "Unidad",
      },
      ImprimirDescuentoItem: {
        Descripcion: "Super oferta semanal",
        Monto: "15.00",
        ModoDisplay: "DisplayNo",
        ModoBaseTotal: "ModoPrecioTotal",
      },
      ImprimirAnticipoBonificacionEnvases: {
        Descripcion: "Recargo Financiero",
        Monto: "12.50",
        CondicionIVA: "Gravado",
        AlicuotaIVA: "21.00",
        TipoImpuestoInterno: "0",
        MagnitudImpuestoInterno: "0.00",
        ModoDisplay: "0",
        ModoBaseTotal: "ModoPrecioTotal",
        CodigoProducto: "7790001001047",
        Operacion: "R",
      },
      ImprimirAjuste: {
        Descripcion: "Promoción Fidelidad",
        Monto: "18.00",
        ModoDisplay: "DisplayNo",
        ModoBaseTotal: "ModoPrecioTotal",
        CodigoProducto: "7790001001030",
        Operacion: "AjusteNeg",
      },
      ImprimirOtrosTributos: {
        Codigo: "PercepcionImpuestosMunicipales",
        Descripcion: "Percepción municipal",
        BaseImponible: "50.00",
        Importe: "3.00",
      },
      ImprimirPago: {
        Descripcion: "Tarjeta de Crédito",
        Monto: "200.00",
        Operacion: "Pagar",
        ModoDisplay: "DisplayNo",
        DescripcionAdicional: "Nro.: *******3245",
        CodigoFormaPago: "TarjetaDeCredito",
        Cuotas: "6",
        Cupones: "12345678",
        Referencia: "ABC123",
      },
      CerrarDocumento: {
        Copias: "1",
        DireccionEMail: "cliente@Acasamalo.com.ar",
      },
}
