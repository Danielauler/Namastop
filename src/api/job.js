import axios from "axios";


async function getUsers() {
    try {
        const response = await axios.get(`https://slack.com/api/users.list?token=${process.env.TOKEN_SLACK}&presence=false&pretty=1`);
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }
}

const jobService = () => {
    const usersList = [];
    usersList = getUsers();
    console.log(userList);
}

export default jobService;