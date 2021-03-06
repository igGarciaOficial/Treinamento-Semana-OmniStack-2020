import React, {useState} from "react";
import "./styles.css"

import {FiArrowLeft} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import logoImg from "../../assets/logo.svg";

import api from '../../services/api';

export default function Register(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event){
        event.preventDefault();
    
        const data = {
            name,
            email, 
            whatsapp, 
            city,
            uf
        }

        await api.post('ongs', data)
        .then(response => {
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        })
        .catch( err => {
            alert(`Erro no cadastro, tente novamente. ${err.message}`);
        })
    
        
    }
    
    return (
        <div className="register-container">
            <div className="content">

                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder='Nome da ONG' 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder='Email' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder='Cidade'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input 
                            placeholder='UF'style={{width: 80}} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>

                </form>

            </div>
        </div>
    );
}
