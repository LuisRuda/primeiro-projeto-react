import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/35377905?s=460&u=13ce29ab7e21a38284b72412f6cbd0485ddd112b&v=4"
            alt="Luis Paulo"
          />

          <div>
            <strong>Unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/35377905?s=460&u=13ce29ab7e21a38284b72412f6cbd0485ddd112b&v=4"
            alt="Luis Paulo"
          />

          <div>
            <strong>Unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/35377905?s=460&u=13ce29ab7e21a38284b72412f6cbd0485ddd112b&v=4"
            alt="Luis Paulo"
          />

          <div>
            <strong>Unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/35377905?s=460&u=13ce29ab7e21a38284b72412f6cbd0485ddd112b&v=4"
            alt="Luis Paulo"
          />

          <div>
            <strong>Unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
