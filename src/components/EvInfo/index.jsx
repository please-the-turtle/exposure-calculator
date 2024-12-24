import "./EvInfo.scss";

export default function EvInfo() {
  return (
    <div className="ev-info">
      <h2>Daylight, Outdoor</h2>
      <table>
        <tbody>
          <tr>
            <td>Bright sunshine on light sand or snow</td>
            <td>16</td>
          </tr>
          <tr>
            <td>
              <p>Bright sunshine (hard shadows)</p>
              <p>Rainbow against clear sky</p>
            </td>
            <td>15</td>
          </tr>
          <tr>
            <td>
              <p>Hazy sunshine (soft shadows)</p>
              <p>Rainbow against cloudy sky</p>
            </td>
            <td>14</td>
          </tr>
          <tr>
            <td>Cloudy but bright daylight (no shadows)</td>
            <td>13</td>
          </tr>
          <tr>
            <td>Heavily overcast</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Shaded areas in sunny conditions</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Bottom of rain forest canopy</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
      <p className="ev-info-note">
        -1 EV for side lighting; -2 EV for back lighting
      </p>

      <h2>Sunsets</h2>
      <table>
        <tbody>
          <tr>
            <td>Before sunset</td>
            <td>12-14</td>
          </tr>
          <tr>
            <td>Sunset</td>
            <td>11</td>
          </tr>
          <tr>
            <td>After sunset</td>
            <td>9-10</td>
          </tr>
        </tbody>
      </table>

      <h2>Daylight, Indoor</h2>
      <table>
        <tbody>
          <tr>
            <td>Bright room with sunbeams</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Skylight, no sunbeams</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Window, no sunbeams</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>

      <h2>Time Exposures at 100 ISO</h2>
      <table>
        <tbody>
          <tr>
            <td>Fireworks</td>
            <td>B @ f/8</td>
          </tr>
          <tr>
            <td>Lightning</td>
            <td>B @ f/5.6</td>
          </tr>
        </tbody>
      </table>

      <h2>Night, Outdoor</h2>
      <table>
        <tbody>
          <tr>
            <td>Neon signs</td>
            <td>9</td>
          </tr>
          <tr>
            <td>
              <p>Floodlit sports stadium</p>
              <p>Very brightly lit street scenes (e.g., Las Vegas)</p>
              <p>Bonfires, burning buildings</p>
              <p>Shop window displays</p>
            </td>
            <td>8</td>
          </tr>
          <tr>
            <td>Brightly lit street scenes</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Fairs, amusement parks</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Subjects lit by firelight</td>
            <td>5</td>
          </tr>
          <tr>
            <td>
              <p>Bright streetlamps</p>
              <p>Light trails of moving traffic</p>
            </td>
            <td>4</td>
          </tr>
          <tr>
            <td>Average streetlamps</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Distant view of city skyline</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <h2>Night, Indoor</h2>
      <table>
        <tbody>
          <tr>
            <td>Gallery</td>
            <td>8-11</td>
          </tr>
          <tr>
            <td>Strongly spot-lit subjects</td>
            <td>9</td>
          </tr>
          <tr>
            <td>
              <p>Bright office interior with fluorescent lights</p>
              <p>Stage shows (brightly lit)</p>
              <p>Ice shows</p>
            </td>
            <td>8</td>
          </tr>
          <tr>
            <td>
              <p>Indoor sports</p>
              <p>Stage shows (average)</p>
              <p>Circuses</p>
            </td>
            <td>7</td>
          </tr>
          <tr>
            <td>
              <p>Bright home interior</p>
              <p>Swimming pool</p>
            </td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              <p>Average home interior</p>
              <p>Church interior</p>
            </td>
            <td>5</td>
          </tr>
          <tr>
            <td>
              <p>Floodlit buildings</p>
              <p>Christmas tree lights</p>
              <p>Candle-lit close-ups</p>
            </td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
