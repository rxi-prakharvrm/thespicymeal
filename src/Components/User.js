import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersInfo: []
        }
    }
    
    async componentDidMount() {
        try {
            const data = await fetch('https://dummyjson.com/users');
            const json = await data.json();
    
            console.log(json.users);
    
            const allUsers = await Promise.all(
                json.users.map(async (item) => {
                    const userData = await fetch(`https://dummyjson.com/users/${item.id}`);
                    const jsonUserData = await userData.json();
                    return jsonUserData;
                })
            );

            this.setState({
                usersInfo: allUsers
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }    

    render() {
        return (
            <div className="w-full p-2xl my-[5rem] flex justify-center items-center flex-wrap">
                {this.state.usersInfo.map((userInfo) => {
                    const { id, image, firstName, address, company } = userInfo;
                    // const fullAddress = `${address?.address}, ${address?.city}, ${address?.state}, ${address?.country}`;
                    const jobTitle = company?.title;

                    return (
                        <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-200 rounded-2xl w-80 h-[28rem] m-8 p-8" key={id}>
                            <img className="m-4" src={image} alt={`${firstName}'s avatar`} />
                            <h2 className="text-4xl m-4">{firstName}</h2>
                            <p className="text-2xl m-4">{jobTitle}</p>
                            {/* <p className="text-2xl text-gray-600 text-center">{fullAddress}</p> */}
                        </div>
                    );
                })}
            </div>
        );
    }    
}

export default User;