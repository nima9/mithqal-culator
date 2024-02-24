/* package main

import (
	"fmt"
	"os/exec"

	"github.com/robfig/cron"
)

// might change this to netlify cronjobs
func main() {
	c := cron.New()

	// Define the Cron job schedule
	c.AddFunc("@daily", func() {
		// Run the metalAPI.js file
		cmd := exec.Command("bun", "run", "metalAPI.js")
		err := cmd.Run()
		if err != nil {
			fmt.Println("mr.GO:Failed to run metalAPI.js:", err)
		}
	})

	// Start the Cron job scheduler
	c.Start()

	// Wait for the Cron job to run
	select {} //never stop waiting
}
*/