// import GitHubLogo from '@/components/icons/GitHubIcons';
import LocationIcon from '@/components/icons/LocationIcon';
import LinkIcon from '@/components/icons/LinkIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import BuilIcon from '@/components/icons/BuildIcon';
import { User } from '@/interface/user';
import Image from 'next/image';
interface Props {
  user: User;
}

function validarURL(url: string) {
  //Verifica si la URL comienza con https:// o http://
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }
  return url;
}

const UserCardInfo = ({ user }: Props) => {
  return (
    <article className="rounded-xl shadow-md bg-white dark:shadow-none dark:bg-blue-900  dark:text-white grid-areas p-4">
      <div className=" overflow-hidden section-logo  bg-gray-200 rounded-full w-24 h-24 grid place-content-center p-1 mr-3 lg:mx-3">
        <Image
          src={user.avatar_url}
          width={96}
          height={96}
          alt={`profile img user ${user.name}`}
          className="rounded-full"
        />
        {/* <GitHubLogo className=" relative top-2 w-full h-full"  /> */}
      </div>

      <div className="section-title">
        <h2 className="font-bold text-3xl">{user.name}</h2>
        <p>@{user.login}</p>
      </div>
      <p className="section-date lg:text-right">
        {new Date(user.created_at || '').toLocaleDateString('es', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p className="section-description mt-8 leading-loose">
        {user.bio || 'Sin user bio'}
      </p>

      <div className="section-number flex justify-around dark:text-white text-blue-950 bg-blue-50 dark:bg-blue-950 mt-4 p-8 rounded-xl text-center">
        <article>
          <p>Repositorios</p>
          <p className="font-bold  text-xl">{user.public_repos}</p>
        </article>
        <article className="mr-2 ml-2">
          <p>Seguidores</p>
          <p className="font-bold text-xl">{user.followers}</p>
        </article>
        <article>
          <p>Seguidos</p>
          <p className="font-bold text-xl">{user.following}</p>
        </article>
      </div>

      <div className="section-social md:grid md:grid-cols-2 mt-4 space-y-1">
        <article className="flex space-x-2">
          <i>
            <LocationIcon
              className="dark:fill-white w-full h-full fill-blue-950"
              width={'1rem'}
            />
          </i>
          <span>{user.location}</span>
        </article>

        <article className="flex space-x-2">
          <i>
            <LinkIcon
              className="dark:fill-white w-full h-full fill-blue-950"
              width={'1rem'}
            />
          </i>
          <a href={validarURL(user?.html_url)} className="truncate">
            {user?.html_url || 'sin informacion'}
          </a>
        </article>

        <article className="flex space-x-2">
          <i>
            <TwitterIcon
              className="dark:fill-white w-full h-full fill-blue-950"
              width={'1rem'}
            />
          </i>
          <a href={`https://www.twitter.com/${user?.twitter_username}`}>
            {user?.twitter_username}
          </a>
        </article>

        <article className="flex space-x-2">
          <i>
            <BuilIcon
              className="dark:fill-white w-full h-full fill-blue-950"
              width={'1rem'}
            />
          </i>
          <a href="#">{user?.company || 'sin informacion'} </a>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
