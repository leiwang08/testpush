var SEARCHSTRING = $.request.parameters.get('SEARCHSTRING2');
var MODULEID = $.request.parameters.get('MODULEID');

var results = {};
results.data = [];

try {
	var conn = $.hdb.getConnection();
	var rs = conn.executeQuery('SELECT * FROM "ESD"."ESD.allFunc::TF_QUERYSEARCH"(?,?)', SEARCHSTRING,MODULEID);
	
	
	var out = [];

	for (var i = 0; i < rs.length; i++) {
		out.push({
			'Query': rs[i].queryData,
			'Better': rs[i].betterSentence
		});

	}
	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(out));
} catch (err) {

	$.response.setBody(err.message);
}
conn.commit();
conn.close();