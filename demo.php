<script src="js/core.js"></script>
<script src="js/cypto.js"></script>


var aes = new AES();
var k = aes.encyption("456");
document.write(k.key+"<br/>");
document.write(k.iv+"<br/>");
document.write(k.hash+"<br/>");
var d = aes.decyption("861ff6ca13cef2b5","c596207a221ab0fc","ZbQMj0T8dNajQFHVCCXN7A==");
document.write(d);
</script>


