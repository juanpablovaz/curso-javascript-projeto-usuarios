/**
var nome = document.querySelector("#exampleInputName").value;

Estamos pegando o valor do elemento e armazenando na variavel. Dependendo de como será usado no código, demanda de muito processamento. Para evitar isso podemos armazenar o elemento pra pegar tudo o que precisamos e manipular a variavel.

Teste: console.log(document.querySelector("#exampleInputName")

SOLUÇÂO:
*/
// var name = document.querySelector("#exampleInputName");

// nome.value = "Juan";
// nome.style.color = "red";

// // // var gender = document.querySelector("#exampleInputGenderM");
// var gender = document.querySelectorAll("form-user-create [name=gender] : checked")
// // // var gender = document.querySelector("exampleInputGenderF");

// var birth = document.querySelector("#exampleInputBirth");

// var country = document.querySelector("#exampleInputCountry");

// var email = document.querySelector("#exampleInputEmail");

// var password = document.querySelector("#exampleInputPassword");

// var photo = document.querySelector("#exampleInputFile");

// var admin = document.querySelector("#exampleInputAdmin");


var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

document.getElementById("form-user-create").addEventListener("submit", function (event) {

    event.preventDefault();

    fields.forEach(function (field, index) {

        if (field.name == "gender") {

            if (field.checked) {

                user[field.name] = field.value;

            }

        } else {

            user[field.name] = field.value;

        }

        console.log(user)

        //console.log(field.id, field.name, field.value, field.checked, index);

    });



});


// document.querySelectorAll("button").forEach(function() {

//     this.addEventListener("click", function() {

//         console.log("clicou!");
//     })

// });

