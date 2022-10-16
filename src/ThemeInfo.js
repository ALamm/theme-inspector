import React from "react";
import getData from "./getData";

export default function ThemeInfo(props) {
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const theme = props.theme;

  React.useEffect(() => {
    if (!props.theme) {
      return;
    }

    setStatus("pending");

    let url = `https://themes.shopify.com/services/api/themes/${theme}/versions`;

    getData(url).then(
      (themeData) => {
        setStatus("resolved");
        props.onVersionsChange(themeData);
      },
      (errorData) => {
        setStatus("rejected");
        setError(errorData);
      }
    );
  }, [theme]);

  if (status === "idle") {
    return "Waiting for you to select a theme";
  }

  if (status === "rejected") {
    return "Oh no...";
  }

  if (status === "pending") {
    return "...";
  }

  if (status === "resolved") {
    return <pre>Finished fetching {props.theme} versions</pre>;
    // return <pre>{JSON.stringify(versions, null, 2)}</pre>
  }
}
