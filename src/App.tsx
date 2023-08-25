import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import {
  BookmarkIcon,
  InboxIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { SiGithub } from '@icons-pack/react-simple-icons';
import userAvatar from './assets/user-avatar.jpg';
import repo1 from './assets/repo-1.jpg';
import repo2 from './assets/repo-2.jpg';
import repo3 from './assets/repo-3.png';
import repo4 from './assets/repo-4.png';

function App() {
  return (
    <>
      <nav className="flex items-center gap-4 border-b border-b-gray-300 bg-gray-100 p-4">
        <button className="rounded-lg border border-gray-300 p-2">
          <Bars3Icon className="h-4 w-4" />
        </button>
        <SiGithub className="h-8 w-8" />
        <span className="text-sm font-semibold">Dashboard</span>
        <button className="ml-auto rounded-lg border border-gray-300 p-2">
          <MagnifyingGlassIcon className="h-4 w-4" />
        </button>
        <div className="h-5 w-1 border-l border-gray-300"></div>
        <button className="relative rounded-lg border border-gray-300 p-2 hover:bg-gray-200">
          <InboxIcon className="h-4 w-4" />
          <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-gray-100 bg-blue-600"></div>
        </button>
        <img src={userAvatar} className="h-8 w-8 rounded-full" />
      </nav>
      <div className="md:flex">
        <div className="bg-gray-100 p-4 md:border-r md:border-r-gray-300 md:bg-white">
          <div className="flex justify-between">
            <h1 className="md:font-semibold">
              <span className="hidden md:inline-block">Top&nbsp;</span>
              Repositories
            </h1>
            <button className="hidden rounded-md bg-green-700 p-1 px-2 text-sm text-white md:flex md:items-center md:gap-1">
              <BookmarkIcon className="h-4 w-4" />
              New
            </button>
          </div>
          <div className="flex flex-col rounded-md border border-gray-300 bg-white p-2 pt-3 md:border-0">
            <input
              className="mb-2 rounded-md border border-gray-300 bg-gray-100 p-1 pl-3 placeholder:text-sm placeholder:text-gray-500"
              placeholder="Find a repository..."
              type="text"
            ></input>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <img
                  src={repo1}
                  className="h-4 w-4 rounded-full border border-gray-300"
                />{' '}
                <span className="text-sm">codecentric/habitcentric</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={repo2}
                  className="h-4 w-4 rounded-full border border-gray-300"
                />{' '}
                <span className="text-sm">
                  denniseffing/spring-modulith-test
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={repo3}
                  className="h-4 w-4 rounded-full border border-gray-300"
                />{' '}
                <span className="text-sm">spring-projects/spring-modulith</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={repo2}
                  className="h-4 w-4 rounded-full border border-gray-300"
                />{' '}
                <span className="text-sm">
                  denniseffing/spring-modulith-test-java
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={repo4}
                  className="h-4 w-4 rounded-full border border-gray-300"
                />{' '}
                <span className="text-sm">xmolecules/jmolecules</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={repo2}
                  className="h-4 w-4 rounded-full border border-gray-300"
                />{' '}
                <span className="text-sm">denniseffing/go-game-of-life</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={repo2}
                  className="h-4 w-4 rounded-full border border-gray-300"
                />{' '}
                <span className="text-sm">
                  denniseffing/spring-security-mockoauth2login-issue
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <div className="mb-6 flex items-center gap-4 border-b  border-gray-300">
            <span className="border-b-2 border-orange-400 px-2 pb-2 font-semibold">
              For you
              <span className="ml-2 rounded-xl border border-green-700 p-1 text-xs text-green-700">
                Beta
              </span>
            </span>
            <span className="px-2 pb-2">Following</span>
            <a
              href="http://google.de"
              className="ml-auto px-2 pb-2 text-blue-500 hover:underline"
            >
              Send feedback
            </a>
            <span className="flex items-center px-2 pb-2">
              Filter <ChevronDownIcon className="ml-1 h-4 w-4" />
            </span>
          </div>
          <div className="rounded-md border border-gray-300 bg-white p-4 text-sm">
            <div className="mb-2 flex items-center">
              <h3 className="font-semibold">Welcome to the new feed!</h3>
              <XMarkIcon className="ml-auto h-4 w-4" />
            </div>

            <p className="mb-2">
              We’re updating the cards and ranking all the time, so check back
              regularly. At first, you might need to follow some people or star
              some repositories to get started 🌱.{' '}
            </p>

            <a
              href="http://google.de"
              className="ml-auto pb-2 text-blue-500 hover:underline"
            >
              Send feedback
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
