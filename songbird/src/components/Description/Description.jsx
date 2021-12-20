import React from 'react';
import './Description.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

const Description = (props) => {

    const {
        selectedBird,
        audioPlayer,
        detailsAudioPlayer
    } = props;

    if (selectedBird == null) {
        return (
            <div className="details">
                Послушайте плеер. <br />
                Выберите птицу из списка.
            </div>
        )
    }

    return (
        <div className="details">
            <div className="details__info">
                <img
                    className="details__image"
                    src={selectedBird.image}
                    alt={selectedBird.name} />
                <div className="details__names-audio">
                    <h2>{selectedBird.name}</h2>
                    <h3>{selectedBird.species}</h3>
                    <AudioPlayer width="100%" height="40px"
                        src={selectedBird.audio}
                        ref={detailsAudioPlayer}
                        autoPlayAfterSrcChange={false}
                        onPlay={() => audioPlayer.current.audio.current.pause()} />
                    </div>
                </div>
            <p>{selectedBird.description}</p>
        </div>
    )
}

export default Description;
