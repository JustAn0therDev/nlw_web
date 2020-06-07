import React from 'react';
import './CreatePoint.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={Logo} alt="Logo Ecoleta" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <form action="">
                <h1>Cadastro do <br /> ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input 
                            id="name" 
                            name="name" 
                            type="text"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="name">E-mail</label>
                        <input 
                            id="email" 
                            name="email" 
                            type="text"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Whatsapp</label>
                        <input 
                            id="whatsapp" 
                            name="whatsapp" 
                            type="text"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereco</h2>
                        <span>Selecione o endereco no mapa</span>
                    </legend>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf">
                                <option value="0">Selecione uma UF</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Itens de coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo de cozinha"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo de cozinha"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo de cozinha"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo de cozinha"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo de cozinha"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo de cozinha"/>
                            <span>Oleo de cozinha</span>
                        </li>
                    </ul>
                </fieldset>

                <button type="submit">Cadastrar ponto de coleta</button>
            </form>
        </div>
    )
}

export default CreatePoint;