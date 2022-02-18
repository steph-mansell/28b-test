import "./CallDetails.css";

function CallDetails() {
  return (
    <div className="call-container">
      <p>Next call</p>

      <div className="call-row">
        <div className="call-title">
          <b>Date:</b>
        </div>
        <div className="call-desc">
          <p>Tomorrow, 3PM</p>
          <p>12 November 2017</p>
        </div>
      </div>

      <div className="call-row">
        <div className="call-title">
          <b>Account:</b>
        </div>
        <div className="call-desc">Dr. Clinton Ackerman</div>
      </div>

      <div className="call-row">
        <div className="call-title">
          <b>Specialty:</b>
        </div>
        <div className="call-desc">
          <p>Respiratory therapist</p>
          <p>Assistive therapy</p>
        </div>
      </div>

      <div className="call-row">
        <div className="call-title">
          <b>Profile:</b>
        </div>
        <div className="call-desc">Confident</div>
      </div>
    </div>
  );
}

export default CallDetails;
