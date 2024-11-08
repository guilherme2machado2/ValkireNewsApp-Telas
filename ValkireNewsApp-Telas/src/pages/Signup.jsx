import { ValkyrieLogo } from '../components/ValkyrieLogo';
import '../styles/pages/Signup.scss';

const Signup = () => {
  return (
    <div className='container'>
      <ValkyrieLogo />
      <div className='form-container'>
        <div className='top-text'>
          <span>
            Ficamos felizes por velo aqui <br />
            Continue com os dados de Login/Cadastro!!
          </span>
        </div>
        <div className='input-forms'>
          <div className='signup-inputs'>
            <input
              type='email'
              placeholder='Insira seu usuário ou email'
            />
            <input
              type='password'
              placeholder='Insira sua senha'
            />
          </div>
          <div className='input-buttons'>
            <span>
              <a href='#'>Esqueci minha senha</a>
            </span>
            <button>Cadastre-se</button>
          </div>
        </div>
        <div className='media-buttons'>
          <button>
            <img
              src='google-icon.svg'
              height={30}
            />
            Google
          </button>
          <button>
            <img
              src='instagram-icon.svg'
              height={30}
            />{' '}
            Instatram
          </button>
          <button>
            <img
              src='apple-icon.svg'
              height={30}
            />{' '}
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
