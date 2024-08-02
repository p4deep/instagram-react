import { ShareFileButton } from "./components/ShareFileButton";
import { base64toFile } from "./utils/base64toBlob";
import { SUDO_LOGO_BASE64 } from "./utils/constants";
import "./styles.css";

export default function App() {
  const file = base64toFile(SUDO_LOGO_BASE64, `sudolabs.png`, "image/png");
  return (
    <div className="App">
      <ShareFileButton file={file} />
    </div>
  );
}
