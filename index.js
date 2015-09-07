var Sealious = require("sealious");
//var Promise = require("bluebird");


Sealious.init();

var www_server = Sealious.ChipManager.get_chip("channel", "www_server");
www_server.static_route("E:\\Projekt Sealious\\sealious-example\\www_server_files");

var someone = new Sealious.ChipTypes.ResourceType({
	name: "person",
	fields: [
		{name: "name", type: "text"},
		{name: "age", type: "int"}
	]
});



Sealious.start();



