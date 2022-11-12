import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../source/components/CSSReset"
import Menu from "../source/components/Menu";
import { StyledTimeline } from "../source/components/Timeline";

function HomePage() {
    const styleHomePage = {
        //backgroundColor: "red"
    };

    //console.log(config.playlist);

    return (
        <>
            <CSSReset/>
            <div style={styleHomePage}>
                <Menu />
                <Header />
                <Timeline playlist={config.playlist}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    )
}

export default HomePage

/* function Menu() {
    return (
        <div>
            Menu
        </div>
    )
} */

const StyleHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyleHeader>
            {/* <img src="banner"/> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyleHeader>
    )
}

function Timeline(props) {
    //console.log("Props", props.playlist);
    const playlistName = Object.keys(props.playlist);

    return (
        <StyledTimeline>
            {playlistName.map(function (playlistName) {
                const videos = props.playlist[playlistName];
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}