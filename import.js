function toString(value){
	value = value.toString();
	return value;
}
function toInt(value){
	return parseInt(value);
}
function Import(value){
	return document.write('<script src="cryptojs/rollups/' + value + '.js"></script>');
}
Import("md5");
Import("pbkdf2");
Import("ripemd160");
Import("sha1");
Import("sha3");
Import("sha224");
Import("sha256");
Import("sha384");
Import("hmac-md5");
Import("hmac-ripemd160");
Import("hmac-sha1");
Import("hmac-sha3");
Import("hmac-sha224");
Import("hmac-sha256");
Import("hmac-sha384");
Import("hmac-sha512");
Import("hmac-sha384");
Import("aes");
Import("tripledes");
Import("rabbit");
Import("rc4");