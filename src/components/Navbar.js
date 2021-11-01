import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a class="navbar-brand" href="/">TextUtility</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Contact us</a>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label class="form-check-label" style={{'color':props.mode==='light'?'black':'white'}} for="flexSwitchCheckDefault">Enable dark mode</label>
                    </div>
                    </form>
                </div>
            </nav>
        </>
    )
}
