Users = [];

addUser = (id, username, room) => {
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    if (!username || !room) {
        return {
            error: "Please provide username and room",
        };
    }

    let index = -1;
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].username === username && Users[i].room === room) {
            index = i;
            break;
        }
    }

    if (index != -1) {
        return {
            error: "Username in given room already exists",
        };
    }

    const user = { id, username, room };
    Users.push(user);
    return { user };
};

removeUser = (id) => {
    let index = -1;
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].id === id) {
            index = i;
            break;
        }
    }

    if (index == -1) {
        return {
            error: "User does not exist",
        };
    }

    return Users.splice(index, 1)[0];
};

getUser = (id) => {
    let index = -1;
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        return undefined;
    }

    return Users[index];
};

getUsersInRoom = (room) => {
    const users = Users.filter((user) => user.room === room);

    return users;
};

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom,
};
