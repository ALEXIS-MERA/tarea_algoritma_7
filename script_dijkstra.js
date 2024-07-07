function encontrarCamino() {
    const grafo = {
        A: { B: 1, C: 4 },
        B: { A: 1, C: 2, D: 5 },
        C: { A: 4, B: 2, D: 1 },
        D: { B: 5, C: 1 }
    };

    const inicio = document.getElementById('inicio').value;
    const fin = document.getElementById('fin').value;
    const resultado = document.getElementById('resultado');

    if (!(inicio in grafo) || !(fin in grafo)) {
        resultado.textContent = 'Nodos inválidos. Por favor, ingrese nodos válidos.';
        return;
    }

    const dijkstra = (grafo, inicio, fin) => {
        const costos = {};
        const prev = {};
        const nodos = new Set(Object.keys(grafo));
        const infinito = Infinity;

        Object.keys(grafo).forEach(nodo => {
            costos[nodo] = nodo === inicio ? 0 : infinito;
            prev[nodo] = null;
        });

        while (nodos.size > 0) {
            let nodoActual = [...nodos].reduce((a, b) => (costos[a] < costos[b] ? a : b));

            if (costos[nodoActual] === infinito) {
                break;
            }

            nodos.delete(nodoActual);

            Object.keys(grafo[nodoActual]).forEach(vecino => {
                const nuevoCosto = costos[nodoActual] + grafo[nodoActual][vecino];
                if (nuevoCosto < costos[vecino]) {
                    costos[vecino] = nuevoCosto;
                    prev[vecino] = nodoActual;
                }
            });
        }

        const camino = [];
        let paso = fin;

        while (paso) {
            camino.unshift(paso);
            paso = prev[paso];
        }

        return camino.length === 1 ? [] : camino;
    };

    const camino = dijkstra(grafo, inicio, fin);

    if (camino.length === 0) {
        resultado.textContent = `No hay un camino desde ${inicio} hasta ${fin}.`;
    } else {
        resultado.textContent = `El camino más corto desde ${inicio} hasta ${fin} es: ${camino.join(' -> ')}`;
    }
}
