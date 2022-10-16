import React from "react";
import getData from "./getData";

export default function ThemeToInspect(props) {
  const [status, setStatus] = React.useState("idle");
  const [themeList, setThemeList] = React.useState([]);

  React.useEffect(() => {
    let diffyServer = `http://diffy-server.shopifycloud.com/themeList`;
    getData(diffyServer).then(
      (themeListData) => {
        var filteredArray = themeListData.filter(
          (themeName) => themeName !== "DevDawn"
        );
        setThemeList(filteredArray);
        setStatus("resolved");
      },
      (errorData) => {
        return errorData;
      }
    );
  }, []);

  if (status === "idle") {
    return "Waiting for list of themes";
  }

  if (status === "resolved") {
    return (
      <div className="row">
        <div className="column">
          <div className="left-column">
            <label className="container">Theme to inspect: </label>
            <select name="themes" onChange={props.onThemeChange}>
              <option key="empty_theme_spacer" value="" />
              {themeList.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
