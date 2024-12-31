import "./AboutInfo.scss";

export default function AboutInfo() {
  return (
    <div className="about-info">
      <h1>Exposure Calculator</h1>
      <section>
        <p>
          Calculates the values of the aperture and shutter speed based on the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://en.wikipedia.org/wiki/Sunny_16_rule"
          >
            Sunny f/16 rule
          </a>
          .
        </p>
        <p>
          I wrote it to calculate the correct values when photographing with
          film cameras. Therefore, a set of shutter speeds and apertures may not
          be sufficient for your case.
        </p>
      </section>

      <section>
        <h2>How to use</h2>
        <p>
          1. Set the brightness value based on the hints on the cards. Use swipes
          to select values.
        </p>
        <p>2. Set the ISO value of the film.</p>
        <p>
          3. Use the calculated shutter speed and aperture values to properly
          expose the frame.
        </p>
      </section>
    </div>
  );
}
