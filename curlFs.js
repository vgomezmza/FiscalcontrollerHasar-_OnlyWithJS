var Curl = require('node-libcurl').Curl;
const fs = require('fs-extra');


const CargarDocumentoAsociado = () => {
    let path = "CargarDocumentoAsociado"
    let doc = {
        "CargarDocumentoAsociado":
        {
            "NumeroLinea": "1",
            "CodigoComprobante": "RemitoR",
            "NumeroPos": "99998",
            "NumeroComprobante": "00000876"
        }
    }
    doc = JSON.stringify(doc)
    fs.writeFileSync('./CargarDocumentoAsociado.json', doc)
    EnviarAControlador(path)
}
const CargarDatosCliente = () => {
    let path = "CargarDatosCliente"
    let doc = {
        "CargarDatosCliente":
        {
            "RazonSocial": "ELSIS SRL - Electrosistemas a medida",
            "NumeroDocumento": "22222222226",
            "ResponsabilidadIVA": "ResponsableInscripto",
            "TipoDocumento": "TipoCUIT",
            "Domicilio": "Avenida Julio Argentino Roca 852 - CABA"
        }
    }
    doc = JSON.stringify(doc)
    fs.writeFileSync('./CargarDatosCliente.json', doc);
    EnviarAControlador(path)
}
const AbrirDocumento = () => {
    let path = "AbrirDocumento"
    let doc = {
        "AbrirDocumento":
        {
            "CodigoComprobante": "TiqueFacturaA"
        }
    }
    doc = JSON.stringify(doc)
    fs.writeFileSync('./AbrirDocumento.json', doc);
    EnviarAControlador(path)
}
const ImprimirTextoFiscal = () => {
    let path = "ImprimirTextoFiscal"
    let doc = {
        "ImprimirTextoFiscal":
        {
            "Atributos": ["Centrado"],
            "Texto": "Producto en oferta: Sólo por hoy !",
            "ModoDisplay": "DisplayNo"
        }
    }
    doc = JSON.stringify(doc)
    fs.writeFileSync('./ImprimirTextoFiscal.json', doc);
    EnviarAControlador(path)
}
const ImprimirItem = () => {
    let path = "ImprimirItem"
    let doc = {
        "ImprimirItem":
        {
            "Descripcion": "Cable miniplug 1.5",
            "Cantidad": "1.0",
            "PrecioUnitario": "200.00",
            "CondicionIVA": "Gravado",
            "AlicuotaIVA": "21.00",
            "OperacionMonto": "ModoSumaMonto",
            "TipoImpuestoInterno": "IIVariableKIVA",
            "MagnitudImpuestoInterno": "0.00",
            "ModoDisplay": "DisplayNo",
            "ModoBaseTotal": "ModoPrecioTotal",
            "UnidadReferencia": "20",
            "CodigoProducto": "779123456789",
            "CodigoInterno": "C1130",
            "UnidadMedida": "Pack"
        }
    }
    doc = JSON.stringify(doc)
    fs.writeFileSync('./ImprimirItem.json', doc);
    EnviarAControlador(path)
}


const ImprimirDescuentoItem = () => {
    let path = "ImprimirDescuentoItem"
    let doc = {
        "ImprimirDescuentoItem":
        {
            "Descripcion": "Super oferta semanal",
            "Monto": "15.00",
            "ModoDisplay": "DisplayNo",
            "ModoBaseTotal": "ModoPrecioTotal"
        }
    }
    doc = JSON.stringify(doc)
    fs.writeFileSync('./ImprimirDescuentoItem.json', doc);
    EnviarAControlador(path)
}
const ImprimirAnticipoBonificacionEnvases = () => {
    let path = "ImprimirAnticipoBonificacionEnvases"
    let doc = {
        "ImprimirAnticipoBonificacionEnvases":
        {
            "Descripcion": "Recargo Financiero",
            "Monto": "12.50",
            "CondicionIVA": "Gravado",
            "AlicuotaIVA": "21.00",
            "TipoImpuestoInterno": "0",
            "MagnitudImpuestoInterno": "0.00",
            "ModoDisplay": "0",
            "ModoBaseTotal": "ModoPrecioTotal",
            "CodigoProducto": "7790001001047",
            "Operacion": "R"
        }
    }
    doc = JSON.stringify(doc)
    fs.writeFileSync('./ImprimirAnticipoBonificacionEnvases.json', doc);
    EnviarAControlador(path)
}
const ImprimirAjuste = () => {
    let path = "ImprimirAjuste"
    let doc = {
        "ImprimirAjuste":
        {
            "Descripcion": "Promoción Fidelidad",
            "Monto": "18.00",
            "ModoDisplay": "DisplayNo",
            "ModoBaseTotal": "ModoPrecioTotal",
            "CodigoProducto": "7790001001030",
            "Operacion": "AjusteNeg"
        }
    }

    doc = JSON.stringify(doc)
    fs.writeFileSync('./ImprimirAjuste.json', doc);
    EnviarAControlador(path)
}
const ImprimirOtrosTributos = () => {
    let path = "ImprimirOtrosTributos"
    let doc = {
        "ImprimirOtrosTributos":
        {
            "Codigo": "PercepcionImpuestosMunicipales",
            "Descripcion": "Percepción municipal",
            "BaseImponible": "50.00",
            "Importe": "3.00"
        }
    }


    doc = JSON.stringify(doc)
    fs.writeFileSync('./ImprimirOtrosTributos.json', doc);
    EnviarAControlador(path)
}
const ImprimirPago = () => {
    let path = "ImprimirPago"
    let doc = {

        "ImprimirPago":
        {
            "Descripcion": "Tarjeta de Crédito",
            "Monto": "200.00",
            "Operacion": "Pagar",
            "ModoDisplay": "DisplayNo",
            "DescripcionAdicional": "Nro.: *******3245",
            "CodigoFormaPago": "TarjetaDeCredito",
            "Cuotas": "6",
            "Cupones": "12345678",
            "Referencia": "ABC123"
        }
    }
    doc = JSON.stringify(doc)
    fs.writeFileSync('./ImprimirPago.json', doc);
    EnviarAControlador(path)
}
const CerrarDocumento = (s) => {
    let path = "CerrarDocumento"
    let doc = {
        "CerrarDocumento":
        {
            "Copias": "0",
            "DireccionEMail": "cliente@suempresa.com.ar"
        }
    }

    doc = JSON.stringify(doc)
    fs.writeFileSync('./CerrarDocumento.json', doc);
    EnviarAControlador(path)
}

// CargarDocumentoAsociado();
CargarDatosCliente();
AbrirDocumento();
ImprimirTextoFiscal();
ImprimirItem();
// ImprimirDescuentoItem();
// ImprimirAnticipoBonificacionEnvases();
// ImprimirAjuste();
// ImprimirOtrosTributos();
// ImprimirPago();
CerrarDocumento();

function EnviarAControlador(path) {
    var xml_src = fs.readFileSync(`./${path}.json`, 'utf-8', (err, data) => {
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
            descri = "OK";
        }
        console.log("Estado", descri);
        console.log(Descripcion);
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
    fs.unlinkSync(`./${path}.json`)
}
