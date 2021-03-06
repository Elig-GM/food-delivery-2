/* eslint-disable no-script-url */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  connected: {
    color: "green",
    display: "inline-block"
  },
  disconnected: {
    color: "red",
    display: "inline-block"
  }
});

const ServerStatus = ({ channelOnline, serverOnline, sec }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Title>Server Status</Title> */}
      <p>{sec} secs</p>
      {channelOnline ? (
        <div className={classes.connected}>Socket Channel Connected</div>
      ) : (
        <div className={classes.disconnected}>Channel Disconnected</div>
      )}{" "}
      /
      {serverOnline ? (
        <div className={classes.connected}>Server Online</div>
      ) : (
        <div className={classes.disconnected}>Server Offline</div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  channelOnline: state.channelOnline,
  serverOnline: state.serverOnline,
  sec: state.sec
});

ServerStatus.propTypes = {
  channelOnline: PropTypes.bool,
  serverOnline: PropTypes.bool,
  sec: PropTypes.number
};

export default React.memo(
  connect(
    mapStateToProps,
    null
  )(ServerStatus)
);
