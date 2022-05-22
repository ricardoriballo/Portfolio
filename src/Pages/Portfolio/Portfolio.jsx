import React from "react";
import "./Portfolio.scss"

export const Portfolio = () => {
  return (
    <>
      <div className="projectsContainer">
        <div className="project">
        <h2>BookStore</h2>
          <div className="imgProject">
            <img src="./assets/bookstore.gif" alt="BookStore" />
          </div>
          
          <p>Project Info</p>
          <p>Repository: <a target="blank" rel="noopener" href="https://github.com/Cristianfarriol29/bookstore_React">BookStore ReactJS</a></p>

        </div>
        <div className="project">
        <h2>Spot at Work</h2>
          <div className="imgProject">
            <img src="./assets/coworking.gif" alt="coworking" />
          </div>
          <p>Project Info</p>
          <p>Repository: <a target="blank" rel="noopener" href="https://github.com/ricardoriballo/Final-Project-ReactJS">Spot at Work ReactJS</a></p>
          <p>Take a look at the page: <a target="blank" rel="noopener" href="https://final-project-react-js-hazel.vercel.app/">Spot at Work</a></p>
        </div>
        <div className="project">
        <h2>ReactJS Resume</h2>
          <div className="imgProject">
            <img src="./assets/cvreact.gif" alt="cvreact" />
          </div>
          <p>Project Info</p>
          <p>Repository: <a target="blank" rel="noopener" href="https://github.com/ricardoriballo/CV-ReactJS">Resume ReactJS</a></p>
          <p>Take a look at the page: <a target="blank" rel="noopener" href="https://cv-react-js.vercel.app/">React Resume</a></p>

        </div>
        <div className="project">
        <h2>Studio Ghibli</h2>
          <div className="imgProject">
            <img src="./assets/angular.gif" alt="angularApi" />
          </div>
          <p>Project Info</p>
          <p>Repository: <a target="blank" rel="noopener" href="https://github.com/ricardoriballo/Angular-Project">Angular API</a></p>
          <p>Take a look at the page: <a target="blank" rel="noopener" href="https://angular-project-nine.vercel.app/films">Studio Ghibli</a></p>

        </div>
        <div className="project">
        <h2>F1 2021</h2>
          <div className="imgProject">
            <img src="./assets/f1api.gif" alt="F1" />
          </div>
          <p>Project Info</p>
          <p>Repository: <a target="blank" rel="noopener" href="https://github.com/ricardoriballo/Formula1-Api">Formula 1 HTML - CSS - JS</a></p>
          <p>Take a look at the page: <a target="blank" rel="noopener" href="https://ricardoriballo.github.io/Formula1-Api/">Formula 1 2021</a></p>

        </div>
        <div className="project">
        <h2>Pokemon API</h2>
          <div className="imgProject">
            <img src="./assets/pokeapi.gif" alt="BookStore" />
          </div>
          <p>Project Info</p>
          <p>Repository: <a target="blank" rel="noopener" href="https://github.com/ricardoriballo/Poke-Api">PokeApi HTML - CSS - JS</a></p>
          <p>Take a look at the page: <a target="blank" rel="noopener" href="https://ricardoriballo.github.io/Poke-Api/">PokeApi</a></p>

        </div>
        <div className="project">
        <h2>Rick & Morty</h2>
          <div className="imgProject">
            <img src="./assets/rickandmorty.gif" alt="rickandmorty" />
          </div>
          <p>Project Info</p>
          <p>Repository: <a target="blank" rel="noopener" href="https://github.com/ricardoriballo/Api-RickAndMorty">Rick & Morty ReactJS</a></p>
          <p>Take a look at the page: <a target="blank" rel="noopener" href="https://api-rick-and-morty-hfbh4lein-ricardoriballo.vercel.app/">Rick & Morty</a></p>

        </div>
      </div>
    </>
  );
};
