import IconButton from "@components/IconButton";
import PopupSection from "@components/PopupSection";
import { useAppSelector } from "@hooks/reduxHook";
import useAccount from "@modules/auth/hooks/useAccount";
// import useAccount from "@modules/voting/hooks/useAccount";
import classNames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const isAuth = useAppSelector((state) => state.auth?.isAuth);
  const account = useAppSelector((state) => state.auth?.account);
  const { connectWallet } = useAccount();
  return (
    <div className="flex items-center justify-between w-full px-2 py-1 mx-auto max-w-7xl">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-2xl font-bold text-black hover:text-black">
          EventBuzz
        </Link>
        <div className="flex">
          {/* <NavLink
            className={({ isActive }) =>
              classNames(isActive && "border-b-2 border-indigo-500")
            }
            to={`/`}
          >
            <IconButton>Create poll</IconButton>
          </NavLink> */}
          {/* {isAuth && (
            <>
              <NavLink
                className={({ isActive }) =>
                  classNames(isActive && "border-b-2 border-indigo-500")
                }
                to={`/user/poll`}
              >
                <IconButton>Your polls</IconButton>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  classNames(isActive && "border-b-2 border-indigo-500")
                }
                to={`/user/answers`}
              >
                <IconButton>Your answers</IconButton>
              </NavLink>
            </>
          )} */}
        </div>
      </div>

      <div>
        {isAuth && (
          <div className="flex items-center space-x-4">
            <div className="w-[200px] line-clamp-1 break-all overflow-hidden">
              {account}
            </div>
            <div className="relative">
              <PopupSection
                sectionContainerClassName={"w-[300px]"}
                button={
                  <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
                }
                section={
                  <div className="px-1 py-1 ">
                    {/* <Link
                    to={`/user-page/${user?.id}`}
                    className="flex items-center p-2 space-x-2 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-500"
                  >
                    <img
                      src={user?.avatar}
                      alt=""
                      className="object-cover w-16 h-16 rounded-full"
                    />
                    <div className="">
                      <div className="text-base font-bold dark:text-gray-50">
                        {user?.lastName}
                      </div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-200">
                        Go to your user page
                      </div>
                    </div>
                  </Link> */}

                    <Link
                      to="/user-event"
                      className="flex items-center p-2 text-base font-bold h-14"
                    >
                      My Event
                    </Link>
                    <Link
                      to="/user-ticket"
                      className="flex items-center p-2 text-base font-bold h-14"
                    >
                      My Ticket
                    </Link>
                    <Link
                      to="/market"
                      className="flex items-center p-2 text-base font-bold h-14"
                    >
                      Marketplace
                    </Link>
                    <Link
                      to="/my-market"
                      className="flex items-center p-2 text-base font-bold h-14"
                    >
                      My marketplace
                    </Link>
                  </div>
                }
              />
            </div>
          </div>
        )}
        {!isAuth && (
          <IconButton
            className="bg-blue-500 text-gray-50"
            onClick={connectWallet}
          >
            Connect wallet
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Header;
