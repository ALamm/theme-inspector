import React from "react";
import "./styles.css";
import ThemeToInspect from "./ThemeToInspect";
import ThemeInfo from "./ThemeInfo";
import VersionInfo from "./VersionInfo";

export default function App() {
  const [theme, setTheme] = React.useState("");
  const [versions, setVersions] = React.useState(null);

  return (
    <>
      {" "}
      {/* jsx fragment */}
      <div style={{ fontWeight: "bold" }} className="title">
        Theme Version Inspector
      </div>
      <form>
        <ThemeToInspect
          theme={theme}
          onThemeChange={(event) => setTheme(event.target.value)}
        />
        <ThemeInfo
          theme={theme}
          onVersionsChange={(data) => setVersions(data)}
        />
        <VersionInfo versions={versions} />
      </form>
    </>
  );
}
