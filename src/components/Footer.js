import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

class Footer extends React.Component {

    openGithub = () => {
        window.open("https://github.com/Hudsonjr90/PokedexReact");
    }

    render() {
        return (
            <>
                <div className="app__footer noselect">
                    <div>
                        Built using PokéAPI, React and Material-UI.
                    </div>
                    <div onClick={this.openGithub} className="github__icon">
                        <GitHubIcon></GitHubIcon>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;