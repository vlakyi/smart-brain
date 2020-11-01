import React from 'react';
import Modal from '../Modal/Modal';
import Logo from '../Logo/Logo';
import Rank from '../Rank/Rank';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';

const Homepage = ({name, entries, box, imageUrl, isModalOpen, closeModal, onInputChange, onButtonSubmit}) => {
    return(
    <React.Fragment>
        <Modal headerText='Wrong Image Url' mainText="Please, use correct image url and try again" buttonText="Try Again" isModalOpen={isModalOpen} closeModal={closeModal} />
        <Logo />
        <Rank name={name} entries={entries} />
        <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
        <FaceRecognition box={box} imageUrl={imageUrl} />
    </React.Fragment>
    );
}

export default Homepage;