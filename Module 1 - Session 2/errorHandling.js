try{
    let num = 5;
    console.log("Aku sebelum error");
    num.toUpperCase();

    console.log("Aku setelah error");
} catch(error) {
    console.log("Error terjadi! Pesan Error : ", error.message);
}