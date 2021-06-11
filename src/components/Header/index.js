import './style.css';
import {Link } from 'react-router-dom';
import { useEffect, useState, } from 'react';

export default function Header(){

    return(
        <header>
           <Link className="logo" to="/">Filmaria</Link>
           <Link className="salvos" to="/salvos">Salvos</Link>
        </header>
    )
}