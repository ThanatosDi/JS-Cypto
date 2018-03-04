function MD5(value){
	Import("md5");
	var hash = CryptoJS.MD5(toString(value));
	return hash;
}

function PBKDF2(value,length){
	var hash;
	var salt = CryptoJS.lib.WordArray.random(128/8);
	switch(toInt(length)){
		case 128:
			hash = CryptoJS.PBKDF2(toString(value), salt, { keySize: 128/32 });
			break;
		case 256:
			hash = CryptoJS.PBKDF2(toString(value), salt, { keySize: 256/32 });
			break;
		case 512:
			hash = CryptoJS.PBKDF2(toString(value), salt, { keySize: 512/32 });
			break;
		default:
			return 0;
	}
	return hash;
}

function RIPEMD160(value){
	return CryptoJS.RIPEMD160(toString(value));
}

function SHA1(value){
	var hash = CryptoJS.SHA1(toString(value));
	return hash;
}

function SHA3(value,length){
	var hash;
	if(length === undefined){
		hash = CryptoJS.SHA3(toString(value));
	}else{
		switch(toInt(length)){
			case 224:
				hash = CryptoJS.SHA3(toString(value),{outputLength : 224});
				break;
			case 256:
				hash = CryptoJS.SHA3(toString(value),{outputLength : 256});
				break;
			case 384:
				hash = CryptoJS.SHA3(toString(value),{outputLength : 384});
				break;
			case 512:
				hash = CryptoJS.SHA3(toString(value),{outputLength : 512});
				break;
			default:
				return 0;
		}
	}
	return hash;
}

function SHA224(value){
	var hash = CryptoJS.SHA224(toString(value));
	return hash;
}
function SHA256(value){
	var hash = CryptoJS.SHA256(toString(value));
	return hash;
}
function SHA384(value){
	var hash = CryptoJS.SHA384(toString(value));
	return hash;
}
function SHA512(value){
	var hash = CryptoJS.SHA512(toString(value));
	return hash;
}

function Hmac(method,value,key){
	var hash;
	switch(method){
		case "MD5":
			hash = CryptoJS.HmacMD5(toString(value), toString(key));
			break;
		case "RIPEMD160":
			hash = CryptoJS.HmacRIPEMD160(toString(value), toString(key));
			break;
		case "SHA1":
			hash = CryptoJS.HmacSHA1(toString(value), toString(key));
			break;
		case "SHA3":
			hash = CryptoJS.HmacSHA3(toString(value), toString(key));
			break;
		case "SHA224":
			hash = CryptoJS.HmacSHA224(toString(value), toString(key));
			break;
		case "SHA256":
			hash = CryptoJS.HmacSHA256(toString(value), toString(key));
			break;
		case "SHA384":
			hash = CryptoJS.HmacSHA384(toString(value), toString(key));
			break;
		default:
			return 0;
	}
	return hash;
}

class AES{
	encyption(value,key,iv){
		if(key === undefined && iv === undefined){
			key = CryptoJS.lib.WordArray.random(16/2);
			iv = CryptoJS.lib.WordArray.random(16/2);
			
			
		}
		var enckey = CryptoJS.enc.Utf8.parse(key);
		var enciv = CryptoJS.enc.Utf8.parse(iv);
			
			
		var hash = CryptoJS.AES.encrypt(value, enckey, {
			iv: enciv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
			
		return {
			key		: toString(key),
			iv		: toString(iv),
			hash	: toString(hash)
		};
	}
	decyption(key,iv,hash){
		key = CryptoJS.enc.Utf8.parse(key);
		iv = CryptoJS.enc.Utf8.parse(iv);
		hash = toString(hash);
		var value = CryptoJS.AES.decrypt(hash, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		
		value = CryptoJS.enc.Utf8.stringify(value);
		return value;
	}
}

class DES{
	encyption(value,key,iv){
		if(key === undefined && iv === undefined){
			key = CryptoJS.lib.WordArray.random(16/2);
			iv = CryptoJS.lib.WordArray.random(16/2);
		}
		
		var enckey = CryptoJS.enc.Utf8.parse(key);
		var enciv = CryptoJS.enc.Utf8.parse(iv);
			
			
		var hash = CryptoJS.AES.encrypt(value, enckey, {
				iv: enciv,
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7
		});
			
		return {
			key		: toString(key),
			iv		: toString(iv),
			hash	: toString(hash)
		};
	}
	decyption(key,iv,hash){
		key = CryptoJS.enc.Utf8.parse(key);
		iv = CryptoJS.enc.Utf8.parse(iv);
		hash = toString(hash);
		var value = CryptoJS.AES.decrypt(hash, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		 
		value = CryptoJS.enc.Utf8.stringify(value);
		return value;
	}
}

class Rabbit{
	encyption(value,key,iv){
		if(key === undefined && iv === undefined){
			key = CryptoJS.lib.WordArray.random(16/2);
			iv = CryptoJS.lib.WordArray.random(16/2);
		}
		var enckey = CryptoJS.enc.Utf8.parse(key);
		var enciv = CryptoJS.enc.Utf8.parse(iv);
			
		var hash = CryptoJS.Rabbit.encrypt(value, enckey, {
				iv: enciv
			});
			
		return {
			key 	: toString(key),
			iv 		: toString(iv),
			hash 	: toString(hash)
		};
	}
	decyption(key,iv,hash){
		key = CryptoJS.enc.Utf8.parse(key);
		iv = CryptoJS.enc.Utf8.parse(iv);
		var value = CryptoJS.Rabbit.decrypt(hash, key, {
			iv: iv
		});
		
		value = CryptoJS.enc.Utf8.stringify(value);
		
		return value;
	}
}

class RC4{
	encyption(value,key,iv){
		if(key === undefined && iv === undefined){
			key = CryptoJS.lib.WordArray.random(16/2);
			iv = CryptoJS.lib.WordArray.random(16/2);
		}
		var enckey = CryptoJS.enc.Utf8.parse(key);
		var enciv = CryptoJS.enc.Utf8.parse(iv);
		 
		var hash = CryptoJS.RC4.encrypt(value, enckey, {
			iv: enciv
		});
		return {
			key		: toString(key),
			iv		: toString(iv),
			hash	: toString(hash)
		}
	}
	decyption(key,iv,hash){
		var key = CryptoJS.enc.Utf8.parse(key);
		var iv = CryptoJS.enc.Utf8.parse(iv);
		
		var value = CryptoJS.RC4.decrypt(hash, key, {
			iv: iv
		});
		
		value = CryptoJS.enc.Utf8.stringify(value);
		
		return value;
	}
	
}

