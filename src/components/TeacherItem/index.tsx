import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
                   <header>
                       <img src="https://avatars0.githubusercontent.com/u/69706950?s=460&v=4" alt="Gabriel Mascarenhas"/>
                       <div>
                           <strong>Gabriel Mascarenhas</strong>
                           <span>Quimica</span>
                       </div>
                   </header>

                   <p>
                       Tempor quis consectetur ipsum laborum.
                       <br/><br/>
                       Irure deserunt incididunt consequat mollit.
                   </p>

                   <footer>
                       <p>
                       Preço/hora
                       <strong>  R$ 80,00</strong>
                       </p>
                       <button type="button">
                           <img src={whatsappIcon} alt="WhatsApp"/>
                           Entrar em contato
                       </button>
                   </footer>
               </article>
    )
}