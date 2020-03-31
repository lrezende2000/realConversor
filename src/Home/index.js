import React, { useEffect, useState } from 'react'
//import { useParams } from 'react-router-dom'

import { doGet } from '../services/api'

import './styles.css'

const Home = () => {
    const [moedas, setMoedas] = useState([])
    const [moeda, setMoeda] = useState("")

    useEffect(() => {
        doGet().then(response => {
            setMoedas(response)
            setMoeda(Object.keys(response)[0])
        })
    }, [])

    const coinList = Object.entries(moedas).map(m => {
        return (
        <option value={m[0]} key={m[0]}>{m[1].name}</option>
        )
    })

    return (
        <div className="container">
            <h1>Conversor de Moedas</h1>
            <div className="conversor-moeda-real">
                
                <select name="moeda" id="moeda" onChange={c => setMoeda(c.target.value)}>
                    {coinList}
                </select>
                <p>Valor em Real:</p>
                <p> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 4 }).format(moedas[moeda]?.high)}</p>
                
            </div>

            
        </div>
    )
    
}

export default Home