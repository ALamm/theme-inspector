import React from "react";

export default function VersionInfo(props) {
  const [version, setVersion] = React.useState("");

  if (!props.versions) return null;

  return (
    <div className="row">
      <div className="column">
        <div className="right-column">
          <label>Version to inspect: </label>
          <select
            name="versions"
            onChange={(event) => setVersion(event.target.value)}
          >
            <option key="empty_version_spacer" value="" />
            {props.versions.map((item) => (
              <option
                key={item.theme_version.id}
                // because vintage themes sometimes didn't have versions, check for an id instead
                value={
                  item.theme_version.label !== null
                    ? item.theme_version.label
                    : item.theme_version.id
                }
              >
                {item.theme_version.label !== null
                  ? item.theme_version.label
                  : item.theme_version.id}
              </option>
            ))}
          </select>
          <pre>
            {JSON.stringify(
              props.versions.find(
                (item) =>
                  item.theme_version.label === version ||
                  item.theme_version.id === version
              ),
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}
