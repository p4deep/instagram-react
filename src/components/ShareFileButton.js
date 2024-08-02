import { CannotShareFallback } from "./CannotShareFallback";

export function ShareFileButton({ file }) {
  const shareData = {
    files: [file]
  };

  const onClick = async () => {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.log("Something has failed", error);
    }
  };

  const isShareable = navigator.canShare && navigator.canShare(shareData);

  if (!isShareable) {
    return <CannotShareFallback />;
  }

  return (
    <>
      <button onClick={onClick}>Share some cool stuff</button>
    </>
  );
}
