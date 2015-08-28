var Sealious = require("sealious");

Sealious.init();

Sealious.ConfigManager.set_default_config(
	"datastore_mongo", 
	{
		embedded: true, //so there's no need to set up MongoDB server. It'll just keep all the info in flatfiles
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

Sealious.start();