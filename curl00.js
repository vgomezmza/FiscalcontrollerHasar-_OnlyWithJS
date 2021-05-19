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