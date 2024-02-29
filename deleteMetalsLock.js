import fs from 'fs'
const path = require('path')

const lockFilePath = './fetchMetalsAPI.lock'

// Check if the lock file exists
if (fs.existsSync(lockFilePath)) {
	// If the lock file exists, delete it
	fs.unlinkSync(lockFilePath)
	console.log('Metals Lock file deleted successfully')
} else {
	console.log('Metals Lock file does not exist, skipping deletion')
}

const metals = require('./src/api/metals.json')

// Update the value of KRW (b/c API is wrong for now)
metals.currencies.KRW = metals.currencies.KRW / 100

// Convert the updated object back to a JSON string
const updatedJson = JSON.stringify(metals, null, 2)

// Write the updated JSON string back to metals.json
fs.writeFileSync(path.join(__dirname, './src/api/metals.json'), updatedJson, 'utf8')
