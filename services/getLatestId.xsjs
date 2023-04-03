var results = {};
results.data = [];

try {
	var conn = $.hdb.getConnection();
	var rs = conn.executeQuery('SELECT "ESD"."ESD.sequence::queryDataSeq".NEXTVAL AS ID FROM DUMMY');


	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(rs[0]));
} catch (err) {

	$.response.setBody(err.message);
}
conn.commit();
conn.close();