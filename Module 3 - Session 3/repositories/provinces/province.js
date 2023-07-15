/* 
  The source of data is from json. If the source data is come from database, such as mysql. You can just add the mysql connection here, and then you can just query in the function.
*/
import provinces from "./json/province.json" assert { type: "json" };

// business logic to get the province detail data by id
export const getProvinceByIDRepo = (id) => {
  // you can imagine this is querying to database
  const province = provinces.find((province) => province.id === Number(id));

  return province;
};
