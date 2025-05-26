//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

let personas = []

function validar(){
    let eNombre = document.getElementById('nombre')
    let vNombre = eNombre.value
    let eEmail = document.getElementById('email')
    let vEmail = eEmail.value
    //let errorEmail = document.getElementById('errorEmail')
    let errorNombre = document.getElementById('errorNombre')
    let rNombre = validarNombre(eNombre, vNombre, errorNombre)
    //let rEmail = validarEmail(eEmail, vEmail, errorEmail)
    if (rNombre == "exito"){
        let p = {
                nombre:vNombre,
                email:vEmail
        }
        personas.push(p)
        cargarDatos()
        vNombre = ""
        vEmail = ""
        console.log("hecho")
    }
}




function validarNombre(elemento, valor, error){
    if (valor.length < 3){
        console.log("Pocos caracteres")
        error.innerText="Debe ingresar mas de 3 caracteres"
        elemento.style.backgroundColor="red"
        return "falla"
    }
    else{
        elemento.style.backgroundColor="green"
        error.innerText=""
        return "exito"

    }

}

function eliminar(indice){
    personas = personas.filter((p, index)=>{
        if (indice =! index){
            return p
        }
        else{

        }
    })
}

function actualizar(indice){
    eNombre = document.getElementById('nombre1')
    vNombre = eNombre.value
    eEmail = document.getElementById('email1')
    vEmail = eEmail.value
    persona = personas.filter((p, index)=>{
        if (index == indice){
            return p
        }
        else{

            let p={
                nombre:vNombre,
                email:vEmail
            }
            persona.push(p)
            cargarDatos()
        }

    })
    
}


function cargarDatos(){
    console.log("Cargando...")
    personas.map((p,index)=>{
        return '<td><tr>'+p.nombre+'<td><td><button type="button" onclick="Actualizar()">Actualizar<'+index+'<td><td>'+p.email+'<td><td>'+index+'</td></tr>'
    })

    
}

