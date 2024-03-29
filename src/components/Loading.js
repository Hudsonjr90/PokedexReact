import React from 'react';

class Loading extends React.Component {

    openGithub = () => {
        window.open("https://github.com/Hudsonjr90/PokedexReact");
    }

    render() {
        return (
            <>
                <div className="app__container">
                    <div className="loading__text">
                        Carregando...
                    </div>
                    <div className="gif__container">
                        <img src="https://i.gifer.com/VgI.gif" className="loading__gif noselect" alt="loading-gif"></img>
                    </div>
                </div>
            </>
        )
    }
}

export default Loading;