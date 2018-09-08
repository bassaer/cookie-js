var expire = new Date();
expire.setDate(expire.getDate() + 1);
console.log(expire.toUTCString());

document.cookie = 'mycookie=this-is-my-cookie; \
                   expire=' + expire.toUTCString();

