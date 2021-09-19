import React from "react"
import {NavLink} from "react-router-dom"

function NavBar(){


    const [user, setUser] = useState(null);

    function handleLogin(){
        useEffect(() => {
        fetch("/me").then((response) => {
            if (response.ok) {
            response.json().then((user) => setUser(user));
            }
        });
        }, []);
    }

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <nav className="navbar">
            <h1 className="display-4">Welcome to the Activities App!</h1>
            <p className="lead">For people who want to live life offline.</p>
            <header className="jumbotron">
                <div className= "nav-link-container flex-row">
                    
                    <div className = "nav-link flex-row">
                        <NavLink exact to ="/">Home</NavLink>
                    </div>
                    <div>
                    {user? 
                    <div className = 'nav-link'>
                        <NavLink to ="/logout" onClick = {handleLogout}>Logout</NavLink>
                        <h2>Welcome, {user.username}!</h2>
                    </div> : 
                    <div className = 'nav-link'>
                        <NavLink to ="/login" onClick = {handleLogin}>Login</NavLink>
                        <Login onLogin={setUser} />
                    </div>}
                    </div>
                    <div className = 'nav-link'>
                        <NavLink to ="/users">Users</NavLink>
                    </div>
                    <div className = 'nav-link'>
                        <NavLink to ="/activities">Activities</NavLink>
                    </div>
                </div>
            </header>
        </nav>

    )
}

export default NavBar ;