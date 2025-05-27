//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

let personas = []

function validar(){
    let eNombre = document.getElementById('nombre')
    let vNombre = eNombre.value
    let eEmail = document.getElementById('email')
    let vEmail = eEmail.value
    let errorEmail = document.getElementById('errorEmail')
    let errorNombre = document.getElementById('errorNombre')
    let rNombre = validarNombre(eNombre, vNombre, errorNombre)
    let rEmail = validarCorreo(eEmail, vEmail, errorEmail)
    if (rNombre == "exito" && rEmail == "exito"){
        let p = {
                nombre:vNombre,
                email:vEmail
        }
        personas.push(p)
        eNombre.value = ""
        eEmail.value = ""
        eNombre.style.backgroundColor = "white"
        eEmail.style.backgroundColor = "white"
        cargarDatos()
    }
}


function validarNombre(elemento, valor, error){
    const isNumber = /\d/;
    if (valor.length < 3 || isNumber.test(valor))
    {
        console.log("Pocos caracteres")
        error.innerText="Debe ingresar mas de 3 caracteres (Sin caracteres numericos)."
        error.style.color="red"
        elemento.style.backgroundColor = "white"
        return "falla"
    }
    else{
        elemento.style.backgroundColor="#AFE1AF"
        error.innerText=""
        return "exito"

    }

}

function eliminar(indice){
    con = confirm('¿Seguro que desea eliminar a esta persona?')
    if (con == true){
        personas = personas.filter((p, index)=>{
            if (indice != index){
                return p
            }})
        cargarDatos();
        console.log(personas)
    }
    
    
}

function actualizar(){
    let eNombre = document.getElementById('aNombre')
    let vNombre = eNombre.value
    let eEmail = document.getElementById('aEmail')
    let vEmail = eEmail.value
    let indice = btnActualizar.value
    let errorEmail = document.getElementById('errorEmail2')
    let errorNombre = document.getElementById('errorNombre2')
    let rNombre = validarNombre(eNombre, vNombre, errorNombre)
    let rEmail = validarCorreo(eEmail, vEmail, errorEmail)
    if (rNombre == "exito" && rEmail == "exito"){
        personas = personas.map((p, index)=>{
            if (index == indice){
                document.getElementById("form").innerHTML = "";
                return {
                    nombre:vNombre,
                    email:vEmail
                }
                
            }
            
            else{
                return p


            }
        

        })}
    console.log(personas)
    cargarDatos()
    
}

function rightEmail(email){
    let correo = /^[^@]*@[^@]*\.cl$/i;
    return correo.test(email);
}


function validarCorreo(elemento, value, error){
    if (rightEmail(value) != true){
        error.innerText="El correo debe tener solo un @ y terminar en .cl"
        error.style.color="red"
        elemento.style.backgroundColor = "white"
        return "falla"
    }
    else{
        elemento.style.backgroundColor="#AFE1AF"
        error.innerText=""
        return "exito"
    }

}

function cargarDatos(){
    console.log("Cargando...")
    let mapPersonas = personas.map((p,index)=>{
        return '<tr><td>'+p.nombre+
        '</td><td>'+p.email+
        "</td><td><button type='button' value='"+index+"' onclick='eliminar("+index+")'>Eliminar</button>"+
        "<button onclick='actualizarFormulario("+index+")'>Actualizar</button></td></tr>"
    })
    let cuerpoTabla = document.getElementById("cuerpoTabla")
    let strCuerpoTabla = mapPersonas.join("")
    cuerpoTabla.innerHTML = strCuerpoTabla
    console.log(personas)
}

function actualizarFormulario(indice){
    let htmlPersonas = "<input type='text' id='aNombre' placeholder='Nombre'/><span class='error' id='errorNombre2'></span><br><input type='text' id='aEmail' placeholder='Email'/><span class='error' id='errorEmail2'><br></span><br/><button type='button' id='btnActualizar'>Actualizar</button>"
    let form = document.getElementById("form")
    form.innerHTML = htmlPersonas;
    let eNombre = document.getElementById("aNombre")
    let eEmail = document.getElementById("aEmail")
    let persona = personas.filter((p, index)=>{
        if (index == indice){
            return p
        }
    })
    eNombre.value = persona[0].nombre
    eEmail.value = persona[0].email
    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.onclick = function (){
        actualizar()
    }
}