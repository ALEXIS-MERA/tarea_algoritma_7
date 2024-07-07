class ColaDePrioridad {
    constructor() {
        this.heap = [];
    }

    insertar(elemento, prioridad) {
        const nodo = { elemento, prioridad };
        this.heap.push(nodo);
        this.subir(this.heap.length - 1);
    }

    subir(index) {
        const nodo = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (nodo.prioridad <= parent.prioridad) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = nodo;
    }

    extraerMaximo() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bajar(0);
        }
        return max;
    }

    bajar(index) {
        const length = this.heap.length;
        const nodo = this.heap[index];
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.prioridad > nodo.prioridad) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.prioridad > nodo.prioridad) ||
                    (swap !== null && rightChild.prioridad > leftChild.prioridad)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = nodo;
    }
}

const colaDePrioridad = new ColaDePrioridad();

function insertarElemento() {
    const elemento = document.getElementById('elemento').value;
    const prioridad = parseInt(document.getElementById('prioridad').value);
    if (elemento && !isNaN(prioridad)) {
        colaDePrioridad.insertar(elemento, prioridad);
        document.getElementById('resultado').textContent = `Elemento "${elemento}" con prioridad ${prioridad} ha sido insertado.`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, introduce un elemento y una prioridad válida.';
    }
}

function extraerMaximo() {
    const max = colaDePrioridad.extraerMaximo();
    if (max) {
        document.getElementById('resultado').textContent = `Elemento con máxima prioridad: "${max.elemento}" con prioridad ${max.prioridad}.`;
    } else {
        document.getElementById('resultado').textContent = 'La cola de prioridad está vacía.';
    }
}
