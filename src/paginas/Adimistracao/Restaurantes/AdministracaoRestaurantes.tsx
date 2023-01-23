import IRestaurante from "../../../interfaces/IRestaurante";
import { useEffect, useState } from 'react';
import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from '@mui/material/Paper';
import axios from "axios";

const AdministracaoRestaurantes = () =>{
    
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v2/restaurantes/')
            .then(response => setRestaurantes(response.data))
    }, [])
    
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            name
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => 
                        <TableRow key={restaurante.id}>
                            <TableCell>
                                {restaurante.nome}
                            </TableCell>
                        </TableRow>)}                   
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoRestaurantes;