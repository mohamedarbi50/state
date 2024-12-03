import React, { Component } from "react";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Lionel Messi",
      bio: "Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine, est un footballeur international argentin jouant au poste d'attaquant à l’Inter Miami CF en MLS. Il est considéré comme l'un des plus grands footballeurs de l'histoire.",
      imgurl:
        "https://assets.goal.com/images/v3/bltd58c4d60ecd9275e/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60",
      timer: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({timer:this.state.timer+1})

    }, 1000);
  }

  render() {
    const { fullName, bio, imgurl } = this.state;

    return (
      <div id="profile" style={{ textAlign: "center", padding: "20px" }}>
        <img
          src={imgurl}
          alt={`${fullName}'s Profile`}
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <h1>{fullName}</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>{bio}</p>
        <div><p>the profile was mountedsince{this.state.timer }seconds</p></div>
      </div>
    );
  }
}

export default Profile;
