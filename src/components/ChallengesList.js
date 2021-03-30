import challengeData from "../data/challengedata";

const ChallengesList = () => {
  const [challenges, setChallenges] = useState([]);

  return (
    <div>
      <Navbar />
      <div className="activities-list_button_container">
        <button
          className="activities-list_button_distance_metric"
          onClick={toggleIsOn}
        >
          {isOn ? "Set to miles" : "Set to kilometres"}
        </button>
      </div>

      {challenges.map((challenge) => {
        return (
          <ChallengeSummary
            className="activities-list"
            activity={activity}
            convertKmToM={ConvertKmToM}
            averagePaceMph={averagePaceMph}
            averagePaceKm={averagePaceKm}
            isOn={isOn}
            key={activity.upload_id}
          />
        );
      })}
    </div>
  );
};
