var Curl = require('node-libcurl').Curl;


function Madre() {
    // CargarDocumentoAsociado("1", "RemitoR", "99998", "00000876")
    // CargarDatosCliente("ELSIS SRL - Electrosistemas a medida", "22222222226", "ResponsableInscripto", "TipoCUIT", "Avenida Julio Argentino Roca 852 - CABA")
    // AbrirDocumento("TiqueFacturaA");
    // ImprimirTextoFiscal(["Centrado"], "Producto en oferta: Sólo por hoy !", "DisplayNo")
    // ImprimirItem("Cable miniplug 1.5", "1.0", "200.00", "Gravado", "21.00", "ModoSumaMonto", "IIVariableKIVA", "0.00", "DisplayNo", "ModoPrecioTotal", "20", "779123456789", "C1130", "Pack");
    // ImprimirItem("Cable miniplug 1.5", "1.0", "100.00", "Gravado", "21.00", "ModoSumaMonto", "IIVariableKIVA", "0.00", "DisplayNo", "ModoPrecioTotal", "20", "779123456789", "C1130", "Pack");
    // ImprimirItem("Cable miniplug 1.5", "1.0", "50.00", "Gravado", "21.00", "ModoSumaMonto", "IIVariableKIVA", "0.00", "DisplayNo", "ModoPrecioTotal", "20", "779123456789", "C1130", "Pack");
    // ImprimirDescuentoItem("Super oferta semanal","15.00","DisplayNo","ModoPrecioTotal");
    // ImprimirAnticipoBonificacionEnvases("Recargo Financiero","12.50","Gravado","21.00","0","0.00","0","ModoPrecioTotal","7790001001047","R");
    // ImprimirAjuste("Promoción Fidelidad","18.00","DisplayNo","ModoPrecioTotal","7790001001030","AjusteNeg");
    // ImprimirOtrosTributos("PercepcionImpuestosMunicipales","Percepción municipal","50.00","3.00");
    // ImprimirPago("Tarjeta de Crédito","200.00","Pagar","DisplayNo","Nro.: *******3245","TarjetaDeCredito","6","12345678","ABC123");
    // CerrarDocumento("0", "cliente@Acasamalo.com.ar");
    // ConsultarAcumuladosComprobante();
    // ContinuarConsultaAcumulados();
    // AnularItem(1)
    // Cancelar();
    CrearCodigoQR("https://twitter.com/AugustoGSaa")
    ConfigurarImpresoraFiscal()

}
const CargarDocumentoAsociado = (...CargarDocumentoAsociado) => {
    let doc = {
        "CargarDocumentoAsociado":
        {
            "NumeroLinea": `${CargarDocumentoAsociado[0]}`,
            "CodigoComprobante": `${CargarDocumentoAsociado[1]}`,
            "NumeroPos": `${CargarDocumentoAsociado[2]}`,
            "NumeroComprobante": `${CargarDocumentoAsociado[3]}`
        }
    }
    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}


const CargarDatosCliente = (...CargarDatosCliente) => {
    let doc = {
        "CargarDatosCliente":
        {
            "RazonSocial": `${CargarDatosCliente[0]}`,
            "NumeroDocumento": `${CargarDatosCliente[1]}`,
            "ResponsabilidadIVA": `${CargarDatosCliente[2]}`,
            "TipoDocumento": `${CargarDatosCliente[3]}`,
            "Domicilio": `${CargarDatosCliente[4]}`
        }
    }
    doc = JSON.stringify(doc)
    // console.log(doc);
    EnviarAControlador(doc)
}

const AbrirDocumento = (...AbrirDocumento) => {
    let doc = {
        "AbrirDocumento":
        {
            "CodigoComprobante": `${AbrirDocumento[0]}`
        }
    }
    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}


const ImprimirTextoFiscal = (...ImprimirTextoFiscal) => {
    let path = "ImprimirTextoFiscal";
    let doc = {
        "ImprimirTextoFiscal":
        {
            "Atributos": `${ImprimirTextoFiscal[0]}`,
            "Texto": `${ImprimirTextoFiscal[1]}`,
            "ModoDisplay": `${ImprimirTextoFiscal[2]}`
        }
    }
    doc = JSON.stringify(doc)
    EnviarAControlador(doc, path)
}

const ImprimirItem = (...ImprimirItem) => {
    let doc = {
        "ImprimirItem":
        {
            "Descripcion": `${ImprimirItem[0]}`,
            "Cantidad": `${ImprimirItem[1]}`,
            "PrecioUnitario": `${ImprimirItem[2]}`,
            "CondicionIVA": `${ImprimirItem[3]}`,
            "AlicuotaIVA": `${ImprimirItem[4]}`,
            "OperacionMonto": `${ImprimirItem[5]}`,
            "TipoImpuestoInterno": `${ImprimirItem[6]}`,
            "MagnitudImpuestoInterno": `${ImprimirItem[7]}`,
            "ModoDisplay": `${ImprimirItem[8]}`,
            "ModoBaseTotal": `${ImprimirItem[9]}`,
            "UnidadReferencia": `${ImprimirItem[10]}`,
            "CodigoProducto": `${ImprimirItem[11]}`,
            "CodigoInterno": `${ImprimirItem[12]}`,
            "UnidadMedida": `${ImprimirItem[13]}`
        }
    }
    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}
const ImprimirDescuentoItem = (...Descuentos) => {
    let doc = {
        "ImprimirDescuentoItem":
        {
            "Descripcion": `${Descuentos[0]}`,
            "Monto": `${Descuentos[1]}`,
            "ModoDisplay": `${Descuentos[2]}`,
            "ModoBaseTotal": `${Descuentos[3]}`
        }
    }
    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}

const ImprimirAnticipoBonificacionEnvases = (...BonificacionEnvase) => {
    let path = "ImprimirAnticipoBonificacionEnvases"
    let doc = {
        "ImprimirAnticipoBonificacionEnvases":
        {
            "Descripcion": `${BonificacionEnvase[0]}`,
            "Monto": `${BonificacionEnvase[1]}`,
            "CondicionIVA": `${BonificacionEnvase[2]}`,
            "AlicuotaIVA": `${BonificacionEnvase[3]}`,
            "TipoImpuestoInterno": `${BonificacionEnvase[4]}`,
            "MagnitudImpuestoInterno": `${BonificacionEnvase[5]}`,
            "ModoDisplay": `${BonificacionEnvase[6]}`,
            "ModoBaseTotal": `${BonificacionEnvase[7]}`,
            "CodigoProducto": `${BonificacionEnvase[8]}`,
            "Operacion": `${BonificacionEnvase[9]}`
        }
    }
    doc = JSON.stringify(doc)
    EnviarAControlador(doc, path)
}

const ImprimirAjuste = (...Ajustes) => {
    let doc = {
        "ImprimirAjuste":
        {
            "Descripcion": `${Ajustes[0]}`,
            "Monto": `${Ajustes[1]}`,
            "ModoDisplay": `${Ajustes[2]}`,
            "ModoBaseTotal": `${Ajustes[3]}`,
            "CodigoProducto": `${Ajustes[4]}`,
            "Operacion": `${Ajustes[5]}`
        }
    }

    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}


const ImprimirOtrosTributos = (...Tributo) => {
    let doc = {
        "ImprimirOtrosTributos":
        {
            "Codigo": `${Tributo[0]}`,
            "Descripcion": `${Tributo[1]}`,
            "BaseImponible": `${Tributo[2]}`,
            "Importe": `${Tributo[3]}`
        }
    }


    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}

const ImprimirPago = (...ImprimirPago) => {
    let doc = {

        "ImprimirPago":
        {
            "Descripcion": `${ImprimirPago[0]}`,
            "Monto": `${ImprimirPago[1]}`,
            "Operacion": `${ImprimirPago[2]}`,
            "ModoDisplay": `${ImprimirPago[3]}`,
            "DescripcionAdicional": `${ImprimirPago[4]}`,
            "CodigoFormaPago": `${ImprimirPago[5]}`,
            "Cuotas": `${ImprimirPago[6]}`,
            "Cupones": `${ImprimirPago[7]}`,
            "Referencia": `${ImprimirPago[8]}`
        }
    }
    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}

const CerrarDocumento = (...CerrarDocumento) => {
    let doc = {
        "CerrarDocumento":
        {
            "Copias": `${CerrarDocumento[0]}`,
            "DireccionEMail": `${CerrarDocumento[1]}`
        }
    }

    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}

const ConsultarAcumuladosComprobante = (...AcumuladosComprobante) => {
    let doc = {
        "ConsultarAcumuladosComprobante":
        {
            "CodigoComprobante": `${AcumuladosComprobante[0]}`,
            "NumeroComprobante": `${AcumuladosComprobante[1]}`
        }
    }

    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}

const ContinuarConsultaAcumulados = () => {
    let doc = {
        "ContinuarConsultaAcumulados": {}
    }

    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}

const Cancelar = () => {
    let doc = {
        "Cancelar":
            {}
    }

    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}
const AnularItem = (Item) => {
    let doc = {
        "AnularItem":
        {
            "IndiceAuditoria": `${Item}`
        }
    }

    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}


const CrearCodigoQR = (URL) => {
    let doc = {
        "CrearCodigoQR": { "Informacion": "https://www.buenosaires.gob.ar/" }
    }
    doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}

const ConfigurarImpresoraFiscal =(Variable,valor) =>{
    let doc ={
    "ConfigurarImpresoraFiscal":
    {
    "Variable" : `${Variable}`,
    "Valor" : `${valor}`
    }
   }
   doc = JSON.stringify(doc)
    EnviarAControlador(doc)
}


function EnviarAControlador(doc, path) {
    var xml_src = doc
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
        // console.log(Descripcion);
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
}

Madre()


