import fs from 'fs'

const lockFilePath = './fetchMetalsAPI.lock'

// Check if the lock file exists
if (fs.existsSync(lockFilePath)) {
	// If the lock file exists, delete it
	fs.unlinkSync(lockFilePath)
	console.log('Metals Lock file deleted successfully')
} else {
	console.log('Metals Lock file does not exist, skipping deletion')
}
