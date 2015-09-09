require("sealious-www-server");
var Sealious = require("sealious");
Sealious.init();


//console.log("robię loga  ", Sealious.ChipManager.get_chip_amount_by_type("channel")); 

var www_server = Sealious.ChipManager.get_chip("channel", "www_server");
//console.log("po get_chip ",www_server);

//www_server = WwwServer.static_route("E:\\Projekt Sealious\\sealious-example\\www_server_files");

var someone = new Sealious.ChipTypes.ResourceType({
	name: "person",
	fields: [
		{name: "name", type: "text"},
		{name: "age", type: "int"}
	]
});



Sealious.start();



