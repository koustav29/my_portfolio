import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <span className="project__language">{item.language}</span>
            <p className="project__description">{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="project__button">
                View Repo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
    );
}

export default ProjectItems;