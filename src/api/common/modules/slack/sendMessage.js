import axios from "axios";


const jobService = () => {
    getUsers()
        .then((usersList) => {
            for (const user in usersList) {
                if (user.id !== 'USLACKBOT' && user.id !== 'UFQNY34Q3') { //verificando se o usuário não é o slack bot nem o próprio bot Namastop
                    sendMessage(user)
                        .then((res)=>{
                            // console.log(res.status);
                            res.status===200 ? console.log('Mensagem enviada com sucesso'): console.log('Houve um problema no envio de mensagens');;
                        })
                        .catch((e)=> console.log(e))
                } 
            }
        })
        .catch((e)=> console.log(e))
    
}



async function getUsers() {
    try {
        const response = await axios.get(`https://slack.com/api/users.list?token=${process.env.TOKEN_SLACK}&presence=false&pretty=1`);
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }
}

async function sendMessage(userSlack) {
    const username = 'Namastop';
    const real_name = userSlack.profile? userSlack.profile.real_name: userSlack.name
    const message = 
        `Bom dia ${real_name}! Hoje é sexta-feira, dia de relembrar as boas ações que recebemos e demonstrarmos gratidão. Que tal enviar um agradecimento aos seus colegas? Basta usar o comando /namastop e enviar uma mensagem para seus colegas. Ah, não se esqueça de marcar o seu colega na mensagem`;
    const user = userSlack.id;
    const config = {
        headers: { 'Content-Type': 'application/json'}
    }
    try {
        const response = await axios.post('https://slack.com/api/chat.postMessage',{
                                            token:process.env.TOKEN_SLACK,
                                            channel:user,
                                            text:message,
                                            username:username }, config);
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }
}


export default jobService;