
/*

var Sealious = require("sealious");
var Promise = require("bluebird");


Sealious.init();

Sealious.ConfigManager.set_default_config(
	"datastore_mongo", 
	{
		//embedded: true, //so there's no need to set up MongoDB server. It'll just keep all the info in flatfiles
	}
);

new Sealious.ChipTypes.ResourceType({
	name: "person",
	fields: [
		{name: "name", type: "text"},
		{name: "age", type: "int"}
	]
})

var rest = Sealious.ChipManager.get_chip("channel", "rest");
rest.set_url_base("/api/v1");

Sealious.start().then(function(){
	var ResourceManager = Sealious.ResourceManager;
/*
	console.time('insertData');

	var insertData = new function(){

		var all_promises = [];
		console.log("przed wstawianiem");

		for(var i=0; i<1000; i++){
			for(var j=0; j<100; j++){
				var current_promise = ResourceManager.create({},"person",{name: "xx"+i, age: i+j});
				all_promises.push(current_promise);
			}
		}

		console.log("po wstawianiu");
		//1000x100 77883ms
		Promise.all(all_promises).then(function(){
			console.timeEnd('insertData');
		})

	};

	

	console.time('findRecord');
	var findRecord = new function(){
		var x = ResourceManager.find({},{'name': "xx2", 'age': 10},"person").then(function(results){
			console.log(arguments);			
		});
	};
	console.timeEnd('findRecord');
});

*/