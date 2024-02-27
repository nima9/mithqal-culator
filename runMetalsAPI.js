import fs from 'fs'
import fetchMetalsAPI from './src/api/metalsAPI.js'

const lockFilePath = './fetchMetalsAPI.lock'

// Check if the lock file exists
if (!fs.existsSync(lockFilePath)) {
	// If the lock file doesn't exist, run the fetchMetalsAPI function
	fetchMetalsAPI()
		.then(() => {
			console.log('Metals API fetched successfully')
			// Create the lock file
			fs.closeSync(fs.openSync(lockFilePath, 'w'))
		})
		.catch((error) => {
			console.error('Error fetching Metals API:', error)
		})
} else {
	console.log('Metals API has already been fetched, skipping')
}
