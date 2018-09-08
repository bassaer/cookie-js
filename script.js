var expire = new Date();
expire.setDate(expire.getDate() + 1);
console.log(expire.toUTCString());

document.cookie = 'mycookie=this-is-my-cookie; expire=' + expire.toUTCString();

var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; ++i) {
    href = anchors[i].getAttribute('href');
    var domain = href.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    if (domain === document.domain) {
        console.log(domain);
    }
}


