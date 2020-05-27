import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {

	return (
		<div>
			<p className="f3">
				{"Detect faces in any photo."}
			</p>
			<div className="center">
				<div className="pa4 br3 shadow-5 center form">
					<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
					<button className="w-30 grow f4 link ph3 pv2 dib black bg-light"
					onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;