'use strict';

window.addEventListener('load', () => {

    let users = [];
    let chats = [];

    fetch("./json/users.json")
    .then((response) => { return response.json() })
    .then((users_json) => {

        Array.prototype.forEach.call(users_json, (obj) => {
            users.push(obj);
        });
        fetch("./json/chats.json")
        .then((response) => { return response.json() })
        .then((chats_json) => {

            Array.prototype.forEach.call(chats_json, (obj) => {
                chats.push(obj);
                users.forEach((user) => {
                    if(user.id === obj.user_id)
                        console.log(user.name);
                });
            });



        });

    })
    .catch((e) => { console.log(e) });

    fetch("./json/posts.json")
    .then((response) => { return response.json() })
    .then((posts_json) => {

        Array.prototype.forEach.call(posts_json, (obj) => {

        });

    })
    .catch((e) => {console.log(e)} );

});