import React from "react";

const Map = () => {
	return (
		<>
			<div className="card mx-auto w-full max-w-2xl mb-4 rounded-lg p-0 mt-4">
				<iframe
                    className="rounded-lg "
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7071856808!2d72.43965864944794!3d23.020497766159785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1655181554720!5m2!1sen!2sin"
					width="100%"
					height="350"
					style={{border:0}}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</>
	);
};

export default Map;
