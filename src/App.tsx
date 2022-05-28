import { ToastContainer, Flip, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./components/Game";
import React, { useEffect, useMemo, useState } from "react";
import { Infos } from "./components/panels/Infos";
import { useTranslation } from "react-i18next";
import { InfosFr } from "./components/panels/InfosFr";
import { Settings } from "./components/panels/Settings";
import { useSettings } from "./hooks/useSettings";
import { Flagle } from "./components/Flagle";
import { Stats } from "./components/panels/Stats";
import { useReactPWAInstall } from "@teuteuf/react-pwa-install";
import { InstallButton } from "./components/InstallButton";
import { Twemoji } from "@teuteuf/react-emoji-render";
import { getDayString, useCountry } from "./hooks/useCountry";
// import ToggleSwitch from "./components/DarkMode";

// const supportLink: Record<string, string> = {
//   UA: "https://donate.redcrossredcrescent.org/ua/donate/~my-donation?_cv=1",
// };
//useState() re-renders UI upon changes of state/when data changes, takes default state as input (0/false),
//returns reactive value and setter

const App = () => {
  const { t, i18n } = useTranslation();

  // const dayString = useMemo(getDayString, []);
  const dayString = useMemo(() => getDayString(), []);

  const [country] = useCountry(dayString);
  console.log('country here',country, dayString);
  console.log('country here', dayString);
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  console.log('pwaInstall here', pwaInstall);
  console.log('supported here', supported);
  console.log('isInstalled here', isInstalled);

  const [infoOpen, setInfoOpen] = useState(false); //if info tab is open
  const [settingsOpen, setSettingsOpen] = useState(false); //if settings tab is open
  const [statsOpen, setStatsOpen] = useState(false); //if stats tab is open

  const [settingsData, updateSettings] = useSettings();


  console.log('infoOpen here', infoOpen);
  console.log('settingsOpen here', settingsOpen);
  console.log('statsOpen here', statsOpen);
  console.log('settingsData here', settingsData);

  // toast.success("Noice")
  // toast.error("Oh no error")
  // toast.info("INFO")
  // toast.warn("Warning")

  // useEffect(() => {
  //   if (settingsData.theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [settingsData.theme]);

  useEffect(() => {
    switch (settingsData.theme) {
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      case "dark":
      default:
        document.documentElement.classList.add("dark");
        break;
    }
  }, [settingsData.theme]);


  return (
    <>
      <ToastContainer
        draggable={false}
        hideProgressBar
        position="top-center"
        transition={Zoom}
        theme={settingsData.theme}
        autoClose={5000}
        bodyClassName="font-bold text-center"
      />
      {/* {i18n.resolvedLanguage === "fr" ? (
        <InfosFr
          isOpen={infoOpen}
          close={() => setInfoOpen(false)}
          settingsData={settingsData}
        />
      ) : ( */}
      <Infos
        isOpen={infoOpen}
        close={() => setInfoOpen(false)}
        settingsData={settingsData}
      />
      {/* )} */}
      <Settings
        isOpen={settingsOpen}
        close={() => setSettingsOpen(false)}
        settingsData={settingsData}
        updateSettings={updateSettings}
      />
      <Stats
        isOpen={statsOpen}
        close={() => setStatsOpen(false)}
        distanceUnit={settingsData.distanceUnit}
      />
      <div className="flex justify-center flex-auto dark:bg-slate-900 dark:text-slate-50">
        <div className="w-full max-w-lg flex flex-col">
          <header className="border-b-2 px-3 border-gray-200 flex">
            <button
              className="mr-3 text-xl"
              type="button"
              onClick={() => setInfoOpen(true)}
            >
              <Twemoji text="❓" />
            </button>
            {/* <React.Fragment>
              <ToggleSwitch label="Dark/Light Mode" />
            </React.Fragment> */}

            {supported() && !isInstalled() && (
              <InstallButton pwaInstall={pwaInstall} />
            )}
            <h1 className="text-4xl font-bold uppercase tracking-wide text-center my-1 flex-auto">
              Flag<span className="text-green-600">l</span>e
            </h1>
            <button
              className="ml-3 text-xl"
              type="button"
              onClick={() => setStatsOpen(true)}
            >
              <Twemoji text="📈" />
            </button>
            <button
              className="ml-3 text-xl"
              type="button"
              onClick={() => setSettingsOpen(true)}
            >
              <Twemoji text="⚙️" />
            </button>
          </header>
          <Game settingsData={settingsData} />
          <footer className="flex justify-center items-center text-sm mt-8 mb-1">
            <Twemoji
              text="❤️"
              className="flex items-center justify-center mr-1"
            />{" "}
            <Flagle />? -
            {/* {supportLink[country.code] != null ? (
              <a
                className="underline pl-1"
                href={supportLink[country.code]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-max">{t(`support.${country.code}`)}</div>
              </a> */}
              <a
                className="underline pl-1"
                href="https://github.com/amckenna41"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-max">
                  <Twemoji
                    text={t("repoLink")}
                    options={{ className: "inline-block" }}
                  />
                </div>
              </a>
          
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
