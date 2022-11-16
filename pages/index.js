import React from 'react';
import config from "../config.json";
import styled from "styled-components";
import Menu from "../source/components/Menu/Index";
import { StyledTimeline } from "../source/components/Timeline";

function HomePage() {
    const StyleHomePage = styled.div`
    .titleHomePage{
        margin-top: 15px; margin-bottom: 15px;
        font-weight: bold;
        margin-left: 30px;
        font-size: 22px;
    }
    `
    const StyleConteudo = styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: ${({ theme }) => theme.backgroundLevel1};
        margin-right: 2px; margin-left: 2px;
    `;

    const [valorDoFiltro, setvalorDoFiltro] = React.useState("");
    //console.log(config.playlist);

    return (
        <>
            <StyleHomePage>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setvalorDoFiltro}/>
                <StyleConteudo>
                    <Header />
                    <p className='titleHomePage'>Genshin Impact</p>
                    <Timeline searchValue={valorDoFiltro} playlist={config.playlist}>
                        Conteúdo
                    </Timeline>
                </StyleConteudo>
            </StyleHomePage>
        </>
    )
}

const StyleHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    color: ${({ theme }) => theme.textColorBase};
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        & .user-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        }
    }
    .githubProfile{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .banner{
        position: absolute;
        width: 100%;
        height: 300px;
        left: 0px;
        top: 56px;
        background: url(.jpg);
    }

    .user-info{
        margin-top: 15px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .informacoes{
        display: flex;
    }

    p{
        font-size: 20px;
        margin-left: 15px;
    }

    .titleProfile{
        font-weight: bold;
        font-size: 22px;
    }

    .infoGithub{
        margin: auto;
        align-items: center;
    }
    .link-item {
        padding: 0.12em 0.35em;
        border: 0.5px solid white;
        border-radius: 50%;
        color: white;
}
`;

const StyledBanner = styled.div`
	background-image: url(${({ bg }) => bg});
	background-size: cover;
	height: 330px;
`

function Header() {
    return (
        <StyleHeader>
            <StyledBanner bg={config.banner} />
            <section className="user-info">
                <div className="informacoes">
                    <img className="githubProfile" src={`https://github.com/${config.github}.png`} />
                        <div className="infoGithub">
                            <p className="titleProfile">
                                {config.name}
                            </p>
                            <p>
                                {config.job}
                            </p>
                        </div>
                </div>
            </section>
        </StyleHeader>
    )
}

function Timeline({searchValue, ...props}) {
    //console.log("Props", props.playlist);
    const playlistName = Object.keys(props.playlist);

    return (
        <StyledTimeline>
            {playlistName.map(function (playlistName) {
                const videos = props.playlist[playlistName];
                console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
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

export default HomePage