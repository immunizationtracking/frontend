import React from "react";

// const patient = getName(name);

class Maxcard extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getVaccs(this.props.props.location.state.patient.id);
	}
	render() {
		return (
			<div>
				{console.log(this.props)}
				<h1>
					<strong>Name: </strong>
					{this.props.props.location.state.patient.firstName}{" "}
					{this.props.props.location.state.patient.lastName}
				</h1>
				<h1>
					<strong>Sex: </strong>

					{this.props.props.location.state.patient.gender}
				</h1>
				<h1>
					<strong>DOB: </strong>
					{this.props.props.location.state.patient.dateOfBirth.substr(0, 10)}
				</h1>

				<h1>
					<strong>Last Visited:</strong>
					{this.props.props.location.state.patient.last_visit}
				</h1>
				{console.log(this.props.props.location.state.patient)}
				<div className='Vac-Info'>
					<div className='Vac-name'>
						<h2>Year 1</h2>
						<p>
							<strong>HEP B:</strong>
							<p>use passed information for HEP</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong> ORAL POLIO:</strong>
							<p>use passed information for POLIO</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>BCG:</strong>
							<p>use passed information for BCG</p>
							<p>Did Doctor Sign</p>
						</p>
						<h4>6 weeks to 6 months</h4>
						<p>
							<strong>Oral Rotavirus:</strong>
							<p>use passed information for ORAL ROTAVIRUS</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>DTP:</strong>
							<p>use passed information for DTP</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>HIB:</strong>
							<p>use passed information for HIB</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>HEP B:</strong>
							<p>use passed information for HEP B</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>ORAL POLIO:</strong>
							<p>use passed information for ORAL POLIO</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>INJECTABLE POLIO:</strong>
							<p>use passed information for INJECTABLE POLIO</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>PNEUMOCOCCAL:</strong>
							<p>use passed information for PNEUMOCOCCAL</p>
							<p>Did Doctor Sign</p>
						</p>
						<h4>7 months to 12 months</h4>
						<p>
							<strong>FLU:</strong>
							<p>use passed information for FLU</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>MEASLES:</strong>
							<p>use passed information for MEASLES</p>
							<p>Did Doctor Sign</p>
						</p>
						<h2>Year 2</h2>
						<p>
							<strong>HEP A:</strong>
							<p>use passed information for HEPATITIS A</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>MMR:</strong> <p>use passed information for MMR</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>CHICKENPOX:</strong>
							<p>use passed information for CHICKENPOX</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>DTP:</strong>
							<p>use passed information for DTP</p>
							<p>Did Doctor Sign</p>
						</p>
						<p>
							<strong>HIB:</strong>
							<p>use passed information for HIB</p>
							<p>Did Doctor Sign</p>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Maxcard;
