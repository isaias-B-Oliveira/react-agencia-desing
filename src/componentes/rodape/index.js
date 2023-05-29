import "./style.css";
import Logo from '../../assets/logo.png';
import iconeFacebook from '../../assets/facebook.png';
import iconeTwitter from '../../assets/twitter.png';
import iconeLinkedin from '../../assets/linkedin.png';
import iconeDribble from '../../assets/dribble.png';
import iconeBehance from '../../assets/behance.png';
import iconeGooglePlus from '../../assets/google-plus.png';

export default function Rodape(props) {

  return(
    <footer className={props.ehTemaEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}>
      <img src={Logo} alt="logomarca"/>
      <p className="paragrafo">
        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.
      </p>
      <div className="iconesRodape">
        <img src={iconeFacebook} alt="facebook"/>
        <img src={iconeTwitter} alt="twitter"/>
        <img src={iconeLinkedin} alt="linkedin"/>
        <img src={iconeDribble} alt="dribble"/>
        <img src={iconeBehance} alt="behance"/>
        <img src={iconeGooglePlus} alt="google plus"/>
      </div>
      <div>
        <p className="copyright">Copyright 2022 &copy; <span>nome do desenvolvedor</span></p>
      </div>
    </footer>
  )
}