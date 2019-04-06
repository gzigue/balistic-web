const dev = "http://localhost:8080/";
const prod = "https://balistic.herokuapp.com/";

//Mudar aqui para trocar o ambiente. "dev" para desenvolvimento, "prod" para produção
const environment = prod;

const API_CONFIG = {
    address: environment,
}

export default API_CONFIG;