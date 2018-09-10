
var msg = new SpeechSynthesisUtterance('魏则西');
msg.lang = 'zh-CN';
document.getElementById('su').addEventListener('click',window.speechSynthesis.speak(msg));
