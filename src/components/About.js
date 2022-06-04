import React from "react";
import Links from "./Links"
import user from "../data/user";

function About(props) {
  const bio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links
      github={user.links.github}
      linkedin={user.links.linkedin}
      />
    </div>
  );
}

export default About;

