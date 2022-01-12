const form_input = document.getElementById(`form__input`);
const boxes = document.querySelectorAll(`.box`);

const boxesFilter = (palabra)=>{
    
    for(const element of boxes){
        element.classList.remove(`box--disabled`)
        if(element.lastElementChild.firstElementChild.textContent.toUpperCase().slice(0, palabra.length) != palabra){
            element.classList.add(`box--disabled`)
        }
    }

    // PROBLEMA: Necesitas agregar automaticamente la cantidad de hijos que tiene la clase "box--disabled". VER!!!

    // SOLUCIONADO: agregaste el padre (section) y contaste sus hijos, los cuales deben coincidir con lo dicho. 

    const no_search = document.getElementById(`no-search`)
    const section = document.getElementById(`section`)
    const all = document.querySelectorAll(`.box--disabled`)

    if(all.length == section.children.length) no_search.classList.add(`no-search--active`)
    else no_search.classList.remove(`no-search--active`)
}


form_input.addEventListener(`keyup`, e =>{
    let mayus = e.target.value.toUpperCase()
    boxesFilter(mayus)
})


                        // ANIMACIÓN Y CORRIDA DE LINK

const fa_angle_down = document.querySelectorAll(`.fa-angle-down`)

for(const element of fa_angle_down){
    element.addEventListener(`click`, e =>{
        for(const element of fa_angle_down){
            if(element.classList.contains(`fa-angle-down--active`)) element.classList.remove(`fa-angle-down--active`)
            else e.target.classList.add(`fa-angle-down--active`)
        }
    })
}


                        // ESCUCHAR LINK DE UN BOX

const section = document.getElementById(`section`);

const funcionElement = (elemento) =>{
    // elemento = link que le hacemos click.
    // NOTA: Ko hiciste como funcion para usar el return, si no nunca iba a funcionar, pues el codigo debe dejar de ejecutarse
    // al entrar en un if, cosa que no ocurria si no usabamos una funcion con return.
    if(elemento.parentElement.parentElement.parentElement.classList.contains(`no-desaparece`) == false){
        elemento.parentElement.parentElement.parentElement.classList.add(`no-desaparece`);
        elemento.textContent = "Volver"
        
        // La linea form_input.value = "" es para que al apretar click en algun enlace se reinicie el value 
        form_input.value = ""
        form_input.setAttribute(`disabled`, ``)
        for(const sec of section.children){
            if(sec.classList.contains(`no-desaparece`) == false){
                sec.classList.add(`box--disabled`)
            }
        }
        return true
    }

    if(elemento.parentElement.parentElement.parentElement.classList.contains(`no-desaparece`)){
        for(const sec of section.children){
            if(sec.classList.contains(`no-desaparece`) == false){
                // sec.classList.remove(`box--disabled`)
                // Le agregaste un set time out para que "no se vea feo al reprimir la tarjeta al apretar click en volver"
                setTimeout(() => {
                    sec.classList.remove(`box--disabled`)       
                }, 400);       
            }
            elemento.parentElement.parentElement.parentElement.classList.remove(`no-desaparece`)
            elemento.textContent = "Leer más"
            // La linea form_input.value = "" es para que al apretar click en algun enlace se reinicie el value 
            form_input.value = ""
            form_input.removeAttribute(`disabled`, ``)
        }
        return false
    }
}

section.addEventListener(`click`, e =>{
    if(e.target.classList.contains(`link`)){
        funcionElement(e.target)
    }
})




                // CÓDIGO DE LA TARJETA HECHA APARTE.

// const fa_angle_down = document.getElementById(`fa-angle-down`);

// fa_angle_down.addEventListener(`click`, () =>{
//     fa_angle_down.classList.toggle(`fa-angle-down--active`)
// })


// const card__description_content = document.getElementById(`card__description-content`);
// const card__description_content_extra = document.getElementById(`card__description-content-extra`);
// const link = document.getElementById(`link`);

// link.addEventListener(`click`, ()=>{
//     const element = document.body.firstElementChild
//     element.classList.toggle(`card--active`)

//     if(element.classList.contains(`card--active`)){
//         link.textContent = "Volver"
//         card__description_content.classList.add(`card__description-content--active`)
//         card__description_content_extra.classList.add(`card__description-content_extra--active`)
//     }else{
//         link.textContent = "Leer más"
//         card__description_content.classList.remove(`card__description-content--active`)
//         card__description_content_extra.classList.remove(`card__description-content_extra--active`)
//     } 
// })