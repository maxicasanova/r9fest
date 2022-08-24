import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { CSVLink } from "react-csv";
import React from 'react';

function Mulato() {

    const headers = [
        { label: "Apellido", key: "apellido" },
        { label: "Nombre", key: "nombre" },
        { label: "Email", key: "mail" },
        { label: "Genero", key: "genero" },
        { label: "Nacimeinto", key: "nacimiento" },
        { label: "Provincia", key: "provincia" },
        { label: "Telefono", key: "telefono" },

    ];

    const [ready, setReady] = React.useState(false);
    const [csvData, setCsvData] = React.useState([]);

    const getMarkers = async () => {
        const db = getFirestore();
        const clients = await getDocs(collection(db, "clientes"));
        console.log(clients);
        setCsvData(clients.docs.map(doc => ({...doc.data()})))
        setReady(true);
        }

    React.useEffect(()=>{
        getMarkers();
    },[])

    return (
        <div>
            {ready && 
                <CSVLink 
                    data={csvData} 
                    headers={headers}
                >
                        Download me
                </CSVLink>}
        </div>
    )
}

export default Mulato


