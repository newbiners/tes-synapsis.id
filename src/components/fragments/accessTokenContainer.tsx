import { useState, useEffect } from "react";

const AccessTokenContainer = () => {
  const [token, setToken] = useState<string>("");
  const [act, setAct] = useState<Boolean>(true);
  const btnGenerateAccess = () => {
    if (token !== "") {
      localStorage.setItem("token", token);
    }
    setToken("");
  };

  useEffect(() => {
    const result = localStorage.getItem("token");
    if (result) {
      setAct(false);
    }
  }, [token]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
    const scrollEvent = () => {
      const accessToken = document.getElementById("accessToken");

      if (window.scrollY > 0) {
        accessToken?.classList.remove("absolute");
        accessToken?.classList.add("hidden");
      } else {
        accessToken?.classList.add("absolute");
        accessToken?.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <>
      {act && (
        <main
          id="accessToken"
          className="bg-sky-50 p-10 z-20 sm:z-30 transition-all absolute right-4  shadow-xl top-20 w-64 sm:w-1/2 xl:w-1/5"
        >
          <form onSubmit={btnGenerateAccess} className="flex flex-col gap-1">
            <label htmlFor="accessTokenInput">Access Token:</label>
            <input
              id="accessTokenInput"
              placeholder="Access Token"
              onChange={(e) => setToken(e.target.value)}
              value={token}
              className="p-1"
            />
            <button
              type="submit"
              className="bg-violet-500 p-1 text-white"
            >
              Insert
            </button>
          </form>
          <p className="mt-3">
            Note: Access token for read, create, update, delete user.
          </p>
        </main>
      )}
    </>
  );
};

export default AccessTokenContainer;
