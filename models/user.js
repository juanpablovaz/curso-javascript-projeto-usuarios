class User {

    constructor(name, gender, birth, country, email, password, photo, admin) {

        this.id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    get id() {
        return this._id
    }

    get register() {
        return this._register;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    get birth() {
        return this._birth;
    }

    get country() {
        return this._country;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    get admin() {
        return this._admin;
    }

    loadFromJSON(json) {


        for (let name in json) {

            switch (name) {

                case '_register':
                    this[name] = new Date(json[name])
                    break;

                case 'default':
                    this[name] = json[name];

            }

        }
    }

    static getUsersStorage() /* Carrega os dados de dentro do localStorage e faz o parse de string para um array de objetos*/ {

        let users = []; // ou new Array()

        if (localStorage.getItem("users")) {

            users = JSON.parse(localStorage.getItem("users"));

        }

        return users;

    }

    getNewId() {

        let usersId = parseInt(localStorage.getItem("usersId"));

        if (!usersId > 0) window.id = 0;

        usersId++;

        localStorage.setItem("usersId", usersId)

        return usersId;
    }

    save() /*Metodo para salvar no storage, até msm se editar, ele vai 
            *pegar no array a linha que quero editar e depois devolver para a mesma posição*/ {

        let users = User.getUsersStorage();

        if (this.id > 0) {

            /*O MAP, mapeia a posição dos arrays e se alterar dados, substitui*/
            users.map(u => {

                if (u._id == this.id) {

                    Object.assign(u, this);  /* O método Object.assign(u, this) é usado para copiar as propriedades de um objeto 
                    (this neste caso) para outro objeto (u). Aqui está o que acontece quando você usa Object.assign(u, this):
                    Fonte e Destino: Object.assign toma dois argumentos: o primeiro é o objeto de destino (u), 
                    e o segundo é o objeto de origem (this).
                    Cópia de Propriedades: O método copia as propriedades enumeráveis próprias do objeto de origem (this) 
                    para o objeto de destino (u). Se houver propriedades com o mesmo nome em ambos os objetos, 
                    as propriedades do objeto de origem substituirão as propriedades do objeto de destino. 
                    */

                }
                return u;

            });

        } else {

            this._id = this.getNewId();

            users.push(this);

        }

        //sessionStorage.setItem("users" , JSON.stringify(users));
        localStorage.setItem("users", JSON.stringify(users));

    }

    remove(){

        let users = User.getUsersStorage();

        users.array.forEach((userData, index) => {
            
            if (this._id == userData._id){
                users.splice(index, 1) /* O splice remove o array que vc escolhei pelo seu index (nesse caso)*/
            }
        });


    }

}