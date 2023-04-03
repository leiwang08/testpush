select count(1) from "SYS"."GRANTED_ROLES" WHERE ROLE_NAME like '%reAssure_Super_Admin%' AND GRANTEE = 'S0020208019';

SELECT A.*,B."statusDesc" 
FROM "ESD"."ESD.allTables::queryData" A
INNER JOIN "ESD"."ESD.allTables::statusData" B
ON A."statusId" = B."statusId"
WHERE (SELECT count(1) FROM "SYS"."GRANTED_ROLES" WHERE ROLE_NAME like '%reAssure_Super_Admin%' AND GRANTEE = 'S0020208019')>0;

SELECT A."moduleId",A."areaId",A."errDesc",A."statusId",A."LASTUPDATEDDATE",B."statusDesc",C."name",D."area"
FROM "ESD"."ESD.allTables::queryData" A 
INNER JOIN "ESD"."ESD.allTables::statusData" B
ON A."statusId" = B."statusId"
INNER JOIN "ESD"."ESD.allTables::moduleData" C
ON A."moduleId" = C."id"
INNER JOIN "ESD"."ESD.allTables::areaData" D
ON A."areaId" = D."id"
WHERE A."userId" = 'S0020208019';

INNER JOIN orders  
ON suppliers.supplier_id = orders.supplier_id  

truncate table "ESD"."ESD.allTables::queryData";