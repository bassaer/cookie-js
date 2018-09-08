var expire = new Date();
expire.setDate(expire.getDate() + 1);
console.log(expire.toUTCString());

document.cookie = 'mycookie=this-is-my-cookie; expire=' + expire.toUTCString();

var anchors = document.getElementsByTagName('a');
var baseUrl = "http://www.example.com:8000/?go=";
for (var i = 0; i < anchors.length; ++i) {
    target = anchors[i];//.getAttribute('href');
    var domain = target.href.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    if (domain === document.domain) {
        target.href = baseUrl + target;
    }
    console.log(target);
}
