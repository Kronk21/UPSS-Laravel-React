import LoadingBar from "react-top-loading-bar";

const ProgressBar = function () {
    return (
        <LoadingBar
            color="#5b85aa"
            height={5}
            progress={100}
            // onLoaderFinished={() => setProgress(0)}
        />
    );
};

export default ProgressBar;
