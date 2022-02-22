import React, { useRef, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { GOOGLE_API_KEY } from '../../config/config';
import Spinner from './Spinner';

const RegularMap = withScriptjs(
	/**
	 * SETUP OPTIONS
	 */
	withGoogleMap(({ zoom, defaultCenter, markers, freeScroll, lockScroll }) => {
		const mapRef = useRef(null);
		const scrollwheel = freeScroll ? true : lockScroll ? false : null;
		const defaultOptions = { scrollwheel };
		const markersWidgets = markers.map(({ lng, lat }, index) => <Marker key={`marker_${index}`} position={{ lat, lng: lng || long }} />);
		return (
			<GoogleMap ref={mapRef} defaultZoom={zoom} defaultCenter={defaultCenter} defaultOptions={defaultOptions}>
				{markersWidgets}
			</GoogleMap>
		);
	})
);

const mapElementStyle = { height: '100%' };

// ===================================================================================================================
//  USED JS HERE DUE TO MULTIPLE TS ERRORS FROM THE GOOGLE MAPS PACKAGE
// ===================================================================================================================
const Location = ({ lat, lng }) => {
	/**
	 * UI
	 */
	return (
		<div className='Location'>
			<h3>Location</h3>
			<RegularMap
				zoom={17}
				defaultCenter={{ lat, lng }}
				markers={[{ lat, lng }]}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`}
				loadingElement={
					<div className='.mapLoader'>
						<Spinner />
					</div>
				}
				containerElement={<div className='mapContainer' />}
				mapElement={<div className='map' style={mapElementStyle} />}
			/>

			{/* STYLE */}
			<style jsx>{`
				h3 {
					padding: 20px 0;
					color: #fff;
					opacity: 0.5;
				}
				.mapContainer,
				.Location :global(.mapLoader) {
					min-width: 250px;
					width: 100%;
					height: 350px;
					border-radius: 10px;
					overflow: hidden;
					box-shadow: var(--boxShadow);
				}

				.Location :global(.mapLoader) {
					background: rgba(0, 0, 0, 0.589);
					display: flex;
					align-items: center;
					justify-content: center;
					padding-bottom: 25px;
				}
			`}</style>
		</div>
	);
};

export default Location;
