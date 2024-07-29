import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersInfo: []
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users");
        const json = await data.json();
        const allUsers = [];
        
        json.map(async (item) => {
            const userData = await fetch("https://api.github.com/users/" + item.login);
            const jsonUserData = await userData.json();
            allUsers.push(jsonUserData);
        })

        this.setState = {
            usersInfo: allUsers
        }
    }

    render() {
        return (
            <div>
                {this.state.usersInfo.map((userInfo) => {
                    const { avatar_url, name, bio, login, location, followers } = userInfo;
                    
                    return (
                        <div className="user-card" key={login}>
                            <img className="user-avatar" src={avatar_url} alt={`${name}'s avatar`} />
                            <h2 className="user-name">{name}</h2>
                            <p className="user-bio">{bio}</p>
                            <p className="user-login">{login}</p>
                            <p className="user-location">{location}</p>
                            <p className="user-followers">{followers} followers</p>
                        </div>
                    );
                })}
            </div>
        );
    }    
}

export default User;