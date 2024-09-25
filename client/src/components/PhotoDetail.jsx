import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PhotoDetail = () => {
    const { id } = useParams(); // Отримання id з URL

    const photos = {
        1: ['/vikno/IMG4.JPG', '/vikno/IMG2.JPG', '/vikno/IMG3.JPG', '/vikno/IMG1.JPG'],
        2: ['/iglo/iglo1.jpg', '/iglo/iglo2.jpg', '/iglo/iglo3.jpg'],
        3: ['/44teppich/Teppich1.jpg', '/44teppich/Teppich2.jpg', '/fxk.jpg'],
        4: ['/kylym/kylym2.jpg', '/kylym/kylym1.jpg'],
        5: ['/insect/insect1.JPG', '/insect/insect2.JPG', '/insect/insect3.JPG', '/insect/insect4.JPG', '/insect/insect5.JPG',],
        6: ['/hause/RotHaus.jpg', '/hause/VerkauftesHaus.jpg', '/hause/WarmHaus.jpg']
    };

    const descriptions = {
        1: (<div>
            <h2>Werkhofe</h2>
            <p>(Raum Vollreinigung, Berlin), DE</p>
            <p>
                "Wekhofe", a structural support in architecture that upholds walls or ceilings, is reimagined in this work as a window support.</p>
            <p>Visually, it takes on the form of the PEACE symbol. Through a window, we gaze into the future, while a shattered window reflects the harsh reality of war.</p>
            <p>The once-hallowed PEACE symbol is rendered ironic in its impotence, failing to fulfill its promise.</p>
            <p>2023</p>

        </div>),
        2: (
            <div>
                <h2>Igloo</h2>
                <p>(Zukunfts Visionen, Görlitz), DE</p>
                <p>The lgloo installation is a holistic artwork that addresses the subject of "affordable housing for all."
                    It also explores recycling processes and the rational use of resources.</p>
                <p>The installation features posters collected from the streets of Berlin, whose material resembles tree bark
                    despite being artificially produced by the city’s concrete landscape.</p>
                <p>These multiple layers, along with the color scheme and the overall concept, encourage viewers to contemplate
                    the passage of time. To create the lgloo, I first had to understand the material itself: substance came before form.</p>
                <p>2020</p>
            </div>
        ),
        3: (<div>
            <h2>Collaboration with 44flavours</h2>
            <p>(Raum Vollreinigung, Berlin) DE</p>
            <p>The series of five carpets was made in collaboration with Berlin-based duo 44.</p>
            <p>2021-2022</p>
        </div>),
        4: (<div>
            <h2>O.P.I.L.D.</h2>
            <h3>"Oma Parashovia Ich Liebe Dich"  </h3>
            <p>(Bötzow, Berlin, 2023 ) DE</p>
            <p>(Culterimgallery, Berlin, 2022) DE</p>
            <p>This carpet is made in the style of tufting, with the design inspired by my grandmother's camel, which came to me after her death. The carpet is dedicated to my grandmother and raises the theme of friendship within the family—a generational issue. I was under the influence of my father and felt pressured; respect and love were squeezed out of me, resulting in an unnatural friendship.</p>
            <p>In adulthood, I reconsidered this, and this work serves as a requiem—an apology with the words, "Grandmother Parashovia, I love you."</p>
        </div>),
        5: (<div>
            <h2>Insekthause</h2>
            <p>(Berlin) DE</p>
            <p>This work serves as a conceptual commentary on war and the cunning of the enemy, referencing the symbol of the Trojan Horse. It symbolizes how a peaceful exterior can conceal a threat. Even in the most serene forms, dangers may be hidden.</p>
            <p>This project emphasizes that true peace requires vigilance, as the enemy can be closer than it seems, and threats may arise at the most unexpected moments.</p>
            <p>2024</p>
        </div>),
        6: (<div>
            <h2>House series</h2>
            <p>(Culterimgallery, Berlin) DE</p>
            <p>Mixmedia on canvas</p>
            <p>approximately 100/100 cm</p>
            <p>2022</p>
        </div>)
    };

    console.log(id); // Для перевірки правильного id

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <Link to="/" className="close-button">✖</Link>
                </div>
                <div className="info-block">
                    <p>{descriptions[id]}</p>
                </div>

                <div className="photo-gallery">
                    {photos[id]?.map((photo, index) => (
                        <img key={index} src={photo} alt={`Фото ${id} - ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoDetail;
