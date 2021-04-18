import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";
import ChallengeButton from "./Buttons/ChallengeButton";

const USER_DB_LINK = "http://localhost:4001/users";
const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;
let IN_CHALLENGE = "inChallenge";
const CHALLENGE_SELECTED = "challengeSelected";

// 201 = user not in db
// 200 = user already there

// 201 = user not in a challenge
// 200 = user is in one

// START TIME = createdAt (state) => challengeDurationUnix
// END TIME =

const challengeDurationUnix = (challengeDuration) => {
  let duration = challengeDuration;
  return duration * 86400;
};

const challengeEndTimeUnix = (createdAt, challengeDurationUnix) => {
  return createdAt + challengeDurationUnix;
};

const Home = ({
  handleChallengeStart,
  selectedChallenge,
  setSelectedChallenge,
  handleChallengeData,
  challengeCreatedAt,
  unixCreatedAt,
  challengeDistance,
  challengeDuration,
  setChallengeDuration,
  dateCreatedInUnixTime,
  activeChallenge,
}) => {
  // CHECK IF USER IS IN A CHALLENGE AND SET STATE

  const data = [
    {
      resource_state: 2,
      athlete: {
        id: 4085849,
        resource_state: 1,
      },
      name: "Family run 🏃🏼‍♀️ 🏃🏽‍♀️👶🏽",
      distance: 4813.6,
      moving_time: 1958,
      elapsed_time: 2047,
      total_elevation_gain: 24.7,
      type: "Run",
      workout_type: 3,
      id: 4703814368,
      external_id: "F2126B1F-BF00-468D-A3F2-CB1135552852-activity.fit",
      upload_id: 5021887230,
      start_date: "2021-01-30T10:09:35Z",
      start_date_local: "2021-01-30T10:09:35Z",
      timezone: "(GMT+00:00) Europe/London",
      utc_offset: 0,
      start_latlng: [53.53, -2.49],
      end_latlng: [53.53, -2.49],
      location_city: null,
      location_state: null,
      location_country: "United Kingdom",
      start_latitude: 53.53,
      start_longitude: -2.49,
      achievement_count: 2,
      kudos_count: 2,
      comment_count: 0,
      athlete_count: 1,
      photo_count: 0,
      map: {
        id: "a4703814368",
        summary_polyline:
          "imveIfsdNYMMF]@IKFm@DEFe@b@m@DMDQNa@P_AR_@@ICOMYKc@?oAJc@TaCLg@@MEa@LeBViBZsEb@gDHe@?YCGIWUQCMFcADOLYPOTc@DODELAZIHMTsBDaALcANm@Z}BIe@AYBYCKUQWEIE]EGKEM@i@Jg@Hu@Ry@B]No@DEj@EV?PKNa@BYPoAv@{ALc@LW^iA@SEgA?y@IsAI{EB]CeADSBu@CeAHiBA}A@QJq@Le@TuAB]FOL}@BW@}@NoAAc@RkCHwBFe@\\uAj@eBXmAR]Hg@Re@JWC?Kr@Un@S|@Md@KTKb@KNYlASh@Oz@IfAKpCI`AAx@OzAIxAEd@On@UfCSv@Gt@?z@Gv@B~AGxCB\\@\\CnA@r@Ed@@~BEdABL?JCJQZ]`AU\\Mf@S^Cn@UnAGJm@LWNM`@Kt@C|@GZSh@EZDVDDBAv@XP@JF@RGv@?LFVSvAGh@Ql@OnCQt@K|@G?o@`@]`@a@z@Q|@ARDPN@PDL@FDDn@Ex@MvAY|A?ZKr@SdCIl@Aj@@^ElAc@bAGh@SvD?h@Jl@AHWn@G\\Ur@C^CHKPONM\\I|@BBP@TED@NCLD",
        resource_state: 2,
      },
      trainer: false,
      commute: false,
      manual: false,
      private: false,
      visibility: "everyone",
      flagged: false,
      gear_id: null,
      from_accepted_tag: false,
      upload_id_str: "5021887230",
      average_speed: 2.458,
      max_speed: 3.6,
      has_heartrate: false,
      heartrate_opt_out: false,
      display_hide_heartrate_option: false,
      elev_high: 73.7,
      elev_low: 61,
      pr_count: 0,
      total_photo_count: 0,
      has_kudoed: false,
    },
    {
      resource_state: 2,
      athlete: {
        id: 4085849,
        resource_state: 1,
      },
      name: "Asher and Lucy run 🏃🏼‍♀️👶🏽",
      distance: 4293.2,
      moving_time: 1439,
      elapsed_time: 1899,
      total_elevation_gain: 49.9,
      type: "Run",
      workout_type: 3,
      id: 4597905503,
      external_id: "7ABE22AE-953F-4651-9388-9C5CB536FE5D-activity.fit",
      upload_id: 4911520443,
      start_date: "2021-01-10T12:16:56Z",
      start_date_local: "2021-01-10T12:16:56Z",
      timezone: "(GMT+00:00) Europe/London",
      utc_offset: 0,
      start_latlng: [53.53, -2.49],
      end_latlng: [53.53, -2.49],
      location_city: null,
      location_state: null,
      location_country: "United Kingdom",
      start_latitude: 53.53,
      start_longitude: -2.49,
      achievement_count: 0,
      kudos_count: 4,
      comment_count: 0,
      athlete_count: 1,
      photo_count: 0,
      map: {
        id: "a4597905503",
        summary_polyline:
          "q`seIfaeNVJJ@jAn@LBJ@JCVDDCF?JDPA^Fl@l@NVN^Su@GIQQs@g@]M{@Bi@IQM_@KKIYCKE",
        resource_state: 2,
      },
      trainer: false,
      commute: false,
      manual: false,
      private: false,
      visibility: "everyone",
      flagged: false,
      gear_id: null,
      from_accepted_tag: false,
      upload_id_str: "4911520443",
      average_speed: 2.983,
      max_speed: 4.7,
      has_heartrate: false,
      heartrate_opt_out: false,
      display_hide_heartrate_option: false,
      elev_high: 63.3,
      elev_low: 28.7,
      pr_count: 0,
      total_photo_count: 1,
      has_kudoed: false,
    },
    {
      resource_state: 2,
      athlete: {
        id: 4085849,
        resource_state: 1,
      },
      name: "1/2 a family run (Strava stopped!) #2",
      distance: 1969.7,
      moving_time: 815,
      elapsed_time: 2106,
      total_elevation_gain: 14.5,
      type: "Run",
      workout_type: 3,
      id: 4577283317,
      external_id: "BDC2A998-CFF8-4CE0-8354-6A8C99262184-activity.fit",
      upload_id: 4889927612,
      start_date: "2021-01-06T15:21:10Z",
      start_date_local: "2021-01-06T15:21:10Z",
      timezone: "(GMT+00:00) Europe/London",
      utc_offset: 0,
      start_latlng: [53.53, -2.49],
      end_latlng: [53.53, -2.47],
      location_city: null,
      location_state: null,
      location_country: "United Kingdom",
      start_latitude: 53.53,
      start_longitude: -2.49,
      achievement_count: 0,
      kudos_count: 3,
      comment_count: 0,
      athlete_count: 1,
      photo_count: 0,
      map: {
        id: "a4577283317",
        summary_polyline:
          "gmveIdsdNKAe@MQBEAT{@Xa@HSP_Ap@kB@MIK?YIi@L}BJm@Bw@X}@NaA?QAMEI?SBS?c@JcABk@L{@D_A`@oCBc@NeAAS]WUIIoA@IJWZ[RYN{@FF@AHBDCFGVi@VyAFa@Bw@Ps@JWLgA@KEk@@a@ES@q@A?S]YOOEEGGMCUHwANoALm@?c@BDLMNGB?DDF@\\ARWJ]F{@T{@\\}@h@cAH_@XwD?cAEu@Ju@CsABGIoACkAHyAAg@Di@A[RwAEe@DW@m@LoAPq@T{A",
        resource_state: 2,
      },
      trainer: false,
      commute: false,
      manual: false,
      private: false,
      visibility: "everyone",
      flagged: false,
      gear_id: null,
      from_accepted_tag: false,
      upload_id_str: "4889927612",
      average_speed: 2.417,
      max_speed: 4,
      has_heartrate: false,
      heartrate_opt_out: false,
      display_hide_heartrate_option: false,
      elev_high: 73.7,
      elev_low: 61.1,
      pr_count: 0,
      total_photo_count: 1,
      has_kudoed: false,
    },
  ];

  const timeNow = Date.now();

  // CHALLENGE DURATION
  const timeElapsedDays = ((timeNow - unixCreatedAt) / 86400000).toFixed(2);
  const timeElapsedUnix = timeNow - unixCreatedAt;
  const challengeTotalDurationUnix = window.localStorage.duration * 86400000;
  const durationLeftUnix = challengeTotalDurationUnix - timeElapsedUnix;
  const durationLeftDays = (durationLeftUnix / 86400000).toFixed(2);

  // CHALLENGE START
  const challengeStart = unixCreatedAt;

  // CHALLENGE END
  const endTimeInUnix = challengeStart + challengeTotalDurationUnix;

  console.log("time now", timeNow);
  console.log("timeElapsedUnix", timeElapsedUnix);
  console.log("timeElapsedDays", timeElapsedDays);
  console.log("challengeTotalDurationUnix", challengeTotalDurationUnix);
  console.log("durationLeftUnix", durationLeftUnix);
  console.log("durationLeftDays", durationLeftDays);
  console.log("challengeStart", challengeStart);
  console.log("endTimeInUnix", endTimeInUnix);

  // Runs span from 6th Jan - 10th Jan - 30th Jan

  const testEndTimeInUnix = 1610281016000; // Jan 10th 2021
  const testStartTime = 1610453816000; // Jan 11th 2021
  const testEndTime = 1627989416000; // Aug 3rd 2021

  console.log("testEndTimeInUnix", testEndTimeInUnix);
  console.log("testEndTime", testEndTime);

  // GETTING THE DISTANCE RUN IN THE CHALLENGE
  const myRuns = data.map((item) => {
    const container = {};
    container["kilometres"] = item.distance / 1000;
    container["unixTime"] = dateCreatedInUnixTime(item.start_date);
    return container;
  });

  console.log("mapped runs", myRuns);

  const filterMyRuns = myRuns.filter((item) => {
    return item.unixTime <= testEndTime && item.unixTime >= testStartTime;
  });

  console.log("filtered runs", filterMyRuns);

  const reducedFilterMyRuns = filterMyRuns.reduce(function (a, b) {
    return a.kilometres + b.kilometres; // returns object with property x
  });

  console.log("reduced runs", reducedFilterMyRuns);

  // DISTANCE RUN IN CHALLENGE
  const distanceCovered = reducedFilterMyRuns.kilometres.toFixed(2);

  // DISTANCE REMAINING IN CHALLENGE

  const remainingDistanceKm = challengeDistance / 1000;

  useEffect(() => {
    const getRequestUserChallengeDb = async () => {
      await axios
        .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
        .then((res) => {
          if (res.status === 200) {
            console.log(
              "GET REQ HOME You're already in a challenge.",
              res.data
            );
            handleChallengeStart(res.data.currentChallenge, res.data.duration);
            window.localStorage.setItem("duration", res.data.duration);
            setSelectedChallenge(res.data.currentChallenge);
            handleChallengeData(res.data.createdAt, res.data.currentDistance);
          }
          if (res.status === 201) {
            window.localStorage.setItem(IN_CHALLENGE, false);
          }
        })
        .catch((error) => {
          throw error;
        });
    };
    getRequestUserChallengeDb();
  }, [handleChallengeData, handleChallengeStart, setSelectedChallenge]);

  return (
    <>
      <Navbar />
      <div className="page_container">
        <h2>Hi {window.localStorage.firstName}</h2>
        {activeChallenge ? (
          <>
            <div className="activities-list_div">
              <h3>You're in the {activeChallenge.name} Challenge</h3>
              {/* 
              <h3>Time elapsed in challenge: {timeElapsedDays} days</h3>

              <h3>Duration left days: {durationLeftDays} days</h3>

              <h3>Distance covered: {distanceCovered} km</h3>
              <h3>STATE: challengeDistance {challengeDistance}</h3>
              <h3>Distance remaining:{remainingDistanceKm}</h3>
              <h3>End time of Challenge in Unix {endTimeInUnix}</h3>

              <h3>Date of challenge start {challengeCreatedAt}</h3>
            </div>
            <h2>Challenge Info</h2>
            {/* <h3>Challenge started at {challengeCreatedAt}</h3> */}
            </div>
            <h3>Challege total distance {challengeDistance}</h3>
            <h1>Your Challenge Info</h1>
            <h3>!! Distance run so far !!</h3>
            <h3>Distance remaining</h3>
          </>
        ) : (
          <ChallengeButton>
            <ChallengeButton />
          </ChallengeButton>
        )}
      </div>
    </>
  );
};

export default Home;

// New variable which is challengeDurationUnix which is the no of days of challenge x 86400
// New variable challengeEndUnix which is challengeStartUnix + challengeDurationUnix
// You now have the variables for the filter
// We already have the GET request from the activities
// We now have the runs that fit the criteria for in the timeframe
// Reduce will add the activity.distance together and give 1 number
