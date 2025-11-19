import { wallpapers, launchpadApps } from "~/configs";

interface LaunchpadProps {
  show: boolean;
  toggleLaunchpad: (target: boolean) => void;
}

const placeholderText = "Search";

export default function Launchpad({ show, toggleLaunchpad }: LaunchpadProps) {
  const dark = useStore((state) => state.dark);

  const [searchText, setSearchText] = useState("");
  const [focus, setFocus] = useState(false);

  const search = () => {
    if (searchText === "") return launchpadApps;
    const text = searchText.toLowerCase();
    const list = launchpadApps.filter((item) => {
      return (
        item.title.toLowerCase().includes(text) || item.id.toLowerCase().includes(text)
      );
    });
    return list;
  };

  const close = show ? "" : "opacity-0 invisible transition-opacity duration-200";

  return (
    <div
      className={`${close} z-30 transform scale-110 size-full fixed overflow-hidden bg-center bg-cover`}
      id="launchpad"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`
      }}
      onClick={() => toggleLaunchpad(false)}
    >
      <div className="size-full absolute bg-gray-900/20 backdrop-blur-2xl">
        <div
          className="mx-auto flex h-7 w-64 mt-5 bg-gray-200/10"
          border="1 rounded-md gray-200/30"
          onClick={(e) => e.stopPropagation()}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          <div
            className={`${
              focus ? "w-6 duration-200" : "w-26 delay-250"
            } hstack justify-end`}
          >
            <span className="i-bx-search ml-1 text-white" />
          </div>
          <input
            className="flex-1 min-w-0 no-outline bg-transparent px-1 text-sm text-white"
            placeholder={placeholderText}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div
          className="h-full flex flex-col items-center justify-center"
        >
          <div
            className="grid gap-8 sm:gap-12"
            grid="~ flow-row cols-3"
          >
            {search().map((app) => (
              <div key={`launchpad-${app.id}`} className="flex flex-col items-center group cursor-pointer">
                <a
                  className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
                  href={app.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={app.img} alt={app.title} title={app.title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                </a>
                <span className="mt-4 text-white text-sm sm:text-base text-center font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                  {app.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
