# JS-Cypto
Javascript 加解密模組 使用到 [cryptojs](https://code.google.com/archive/p/crypto-js/) 3.1.2

***
## 使用方法
在網頁中插入以下js檔

    <script src="cypto.js"></script>

並在該檔案最上方Import需要使用的加密方法
## 所有加密、解密方法
### MD5
    var hash = MD5("待加密內容");
***
### PBKDF2
    var hash = PBKDF2("待加密內容",長度(必要,可選));
長度有以下選項 : 128, 256, 512
***
### RIPEMD160
    var hash = RIPEMD160("待加密內容");
***
### SHA1
    var hash = SHA1("待加密內容");
***
### SHA3
    var hash = SHA3("待加密內容");
    var hash = SHA3("待加密內容",長度(可選));
長度有以下選項 : 224, 256, 384, 512
***
### SHA224
    var hash = SHA224("待加密內容");
***
### SHA256
    var hash = SHA256("待加密內容");
***
### SHA384
    var hash = SHA384("待加密內容");
***
### SHA512
    var hash = SHA512("待加密內容");
***
### Hmac
    var hash = Hmac("方法","待加密內容","密碼");
方法有以下選項 : MD5, RIPEMD160, SHA1, SHA3, SHA224, SHA256, SHA384
密碼自行輸入
***
### SHA3
    var hash = SHA3("待加密內容");
***
### SHA3
    var hash = SHA3("待加密內容");
***
### SHA3
    var hash = SHA3("待加密內容");
***
### AES
#### 加密
    var aes = new AES();
    var encyption = aes.encyption("待加密內容");
    var encyption = aes.encyption("待加密內容","秘鑰"(可選),"向量"(可選));
    
    範例 : 
    var encyption = aes.encyption("456");
    var encyption = aes.encyption("456","861ff6ca13cef2b5","c596207a221ab0fc");
    
    顯示秘鑰、向量、加密後的資料
    document.write(encyption.key+"<br/>");
    document.write(encyption.iv+"<br/>");
    document.write(encyption.hash+"<br/>");
#### 解密
    var decyption = aes.decyption("秘鑰","向量","加密後的資料");
    
    範例 : 
    var d = aes.decyption("861ff6ca13cef2b5","c596207a221ab0fc","ZbQMj0T8dNajQFHVCCXN7A==");
    
    顯示解密後的資料
    document.write(d);
    
    範例 : 123
***
### DES
#### 加密
    var des = new DES();
    var encyption = des.encyption("待加密內容");
    var encyption = des.encyption("待加密內容","(key)秘鑰","(iv)向量");
    
    範例 : 
    var encyption = des.encyption("456");
    var encyption = des.encyption("456","861ff6ca13cef2b5","c596207a221ab0fc");
    
    顯示秘鑰、向量、加密後的資料
    document.write(encyption.key+"<br/>");
    document.write(encyption.iv+"<br/>");
    document.write(encyption.hash+"<br/>");
#### 解密
    var decyption = des.decyption("(key)秘鑰","(iv)向量","(hash)加密後的資料");
    
    範例 : 
    var d = des.decyption("97ccec5569d8596b","6796ed29d11797b7","rJix9AFoHLh7ZnulLfcujYAkZUIaKw4LDEd97A68zoA=");
    
    顯示解密後的資料
    document.write(d);
    
    範例 : DES加解密測試
***
### Rabbit
#### 加密
    var rabbit = new Rabbit();
    var encyption = rabbit.encyption("待加密內容");
    var encyption = rabbit.encyption("待加密內容","(key)秘鑰","(iv)向量");
    
    範例 : 
    var encyption = rabbit.encyption("456");
    var encyption = rabbit.encyption("456","861ff6ca13cef2b5","c596207a221ab0fc");
    
    顯示秘鑰、向量、加密後的資料
    document.write(encyption.key+"<br/>");
    document.write(encyption.iv+"<br/>");
    document.write(encyption.hash+"<br/>");
#### 解密
    var decyption = rabbit.decyption("(key)秘鑰","(iv)向量","(hash)加密後的資料");
    
    範例 : 
    var d = rabbit.decyption("97ccec5569d8596b","6796ed29d11797b7","rJix9AFoHLh7ZnulLfcujYAkZUIaKw4LDEd97A68zoA=");
    
    顯示解密後的資料
    document.write(d);
***
### RC4
#### 加密
    var rc4 = new RC4();
    var encyption = rc4.encyption("待加密內容");
    var encyption = rc4.encyption("待加密內容","(key)秘鑰","(iv)向量");
    
    範例 : 
    var encyption = rc4.encyption("456");
    var encyption = rc4.encyption("456","861ff6ca13cef2b5","c596207a221ab0fc");
    
    顯示秘鑰、向量、加密後的資料
    document.write(encyption.key+"<br/>");
    document.write(encyption.iv+"<br/>");
    document.write(encyption.hash+"<br/>");
#### 解密
    var decyption = rc4.decyption("(key)秘鑰","(iv)向量","(hash)加密後的資料");
    
    範例 : 
    var d = rc4.decyption("97ccec5569d8596b","6796ed29d11797b7","rJix9AFoHLh7ZnulLfcujYAkZUIaKw4LDEd97A68zoA=");
    
    顯示解密後的資料
    document.write(d);
***
