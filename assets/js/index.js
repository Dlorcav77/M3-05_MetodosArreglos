const btnAgregar      = document.querySelector('#agregar');
const tarea           = document.querySelector('#tarea');
const total           = document.querySelector('#total');
const reali           = document.querySelector('#reali');
const table           = document.querySelector('#table');

let tareas = [
    {
        id:Date.now()+1,
        text:'aseo',
        check:'true'
    }
    ,
    {
        id:Date.now()+2,
        text:'lavar',
        check:'false'
    },
    {
        id:Date.now()+3,
        text:'secar',
        check:'false'
    }
]

const render = () => {
    table.innerHTML = "";
    
    let colorText = '';
    let text = '';
    tareas.forEach((item) =>{
        const color = item.check;
 
        if(color == 'true')
        {
            colorText = 'success';
            message = 'realizada';
        }
        else
        {
            colorText = 'danger';
            message = 'no realizada';
        }
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.text}</td>
            <td><button type="submit" class="btn btn-${colorText}" id="check" > ${message} </button></td>
            <td><button type="submit" class="btn btn-warning" id="eliminar" onclick='eliminar(${item.id})'> Eliminar </button></td>
        </tr>
        `;
    })
}
const cant = () => {
    total.innerHTML = "";
    const cantidad = tareas.length;

    total.innerHTML += `${cantidad}`;
}

cant();
render();

const eliminar = (id) => {
        tareas = tareas.filter((item) => item.id !== id);
        render(); 
        cant();
    }

btnAgregar.addEventListener('click', (e) => {
    e.preventDefault();

    tareas.push({
        id: Date.now(),
        text:tarea.value,
        check:'false'
    });
    render();
    cant();
    tarea.value = "";
});

