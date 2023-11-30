import Image from 'next/image';
import GitHubLogo from '@/components/icons/GitHubIcons';
const UserCardInfo = () => {
  return (
    <article className="rounded-xl bg-blue-900 p-2 text-white grid-areas">
      <div className="section-logo  bg-gray-200 rounded-full w-20 h-20 grid place-content-center p-1">
        <GitHubLogo className=" relative top-2 w-full h-full" />
      </div>

      <div className="section-title">
        <h2>The octocat</h2>
        <p>@octocat</p>
      </div>
      <p className="section-date">Joined 25 January, 2011</p>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        repellat suscipit sequi at cum sit iusto laudantium. Iste magnam esse
        neque maxime fugit, reprehenderit deleniti laboriosam animi dolore
        voluptatibus? Atque.
      </p>

      <div className="section-number flex justify-around bg-blue-950">
        <article>
          <p>Repositorios</p>
          <p>8</p>
        </article>
        <article>
          <p>Seguidores</p>
          <p>3892</p>
        </article>
        <article>
          <p>Seguidos</p>
          <p>92</p>
        </article>
      </div>

      <div className="section-social md:grid md:grid-cols-2">
        <article>
          <i>Icono</i>
          <p>Ubicacion</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San francisco</p>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
