import "./ListenPage.css";

const ListenPage = () => {
  return (
    <div className="listenpage">
      <section className="bandcamp-embeds">
        <iframe
          title="ghost-pavilion"
          width="350px"
          height="470px"
          src="https://bandcamp.com/EmbeddedPlayer/album=3819933139/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://ghostpavilion.bandcamp.com/track/fallout-2">
            Ghost Pavilion by Ghost Pavilion
          </a>
        </iframe>
      </section>
      <section className="bandcamp-embeds">
        <iframe
          title="ghost-pavilion-fallout"
          width="350px"
          height="470px"
          src="https://bandcamp.com/EmbeddedPlayer/track=3117515333/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://ghostpavilion.bandcamp.com/track/fallout-2">
            Fallout by Ghost Pavilion
          </a>
        </iframe>
      </section>
      <section className="bandcamp-embeds">
        <iframe
          title="bleed-on-sunset"
          width="350px"
          height="470px"
          src="https://bandcamp.com/EmbeddedPlayer/track=77723839/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://ghostpavilion.bandcamp.com/track/bleed-on-sunset">
            Bleed on Sunset by Ghost Pavilion
          </a>
        </iframe>
      </section>
      <section className="bandcamp-embeds">
        <iframe
          title="oblivion"
          width="350px"
          height="470px"
          src="https://bandcamp.com/EmbeddedPlayer/album=2411569131/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://ghostpavilion.bandcamp.com/album/oblivion">
            Oblivion by Ghost Pavilion
          </a>
        </iframe>
      </section>
      <section className="bandcamp-embeds">
        <iframe
          title="traces"
          width="350"
          height="470px"
          src="https://bandcamp.com/EmbeddedPlayer/album=3727972298/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://ghostpavilion.bandcamp.com/album/traces">
            Traces by Ghost Pavilion
          </a>
        </iframe>
      </section>
    </div>
  );
};

export default ListenPage;
