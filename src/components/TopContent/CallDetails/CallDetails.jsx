import "./CallDetails.css";

function CallDetails() {
  return (
    <div className="call-container">
      <p>
        <b>Next call</b>
      </p>

      <div className="call-row">
        <p className="call-title">Date:</p>
        <div className="call-desc">
          <p>Tomorrow, 3PM</p>
          <p>12 November 2017</p>
        </div>
      </div>

      <div className="call-row">
        <p className="call-title">Account:</p>
        <p className="call-desc">Dr. Clinton Ackerman</p>
      </div>

      <div className="call-row">
        <p className="call-title">Specialty:</p>
        <div className="call-desc">
          <p>Respiratory therapist</p>
          <p>Assistive therapy</p>
        </div>
      </div>

      <div className="call-row">
        <p className="call-title">Profile:</p>
        <p className="call-desc">Confident</p>
      </div>
    </div>
  );
}

export default CallDetails;
